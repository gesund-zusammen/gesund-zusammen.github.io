terraform {
  required_providers {
    aws = "~> 2.0"
  }
  required_version = "~>0.12.0"
}

provider "aws" {
  access_key = var.aws-access-key
  secret_key = var.aws-secret-key
  region     = var.aws-region
  version    = "~> 2.0"
}

locals {
  s3_origin_id = "S3-${var.bucket_name}"
}

resource "aws_s3_bucket" "hosting" {
  bucket = var.bucket_name
  acl    = "public-read"
  region = var.aws-region

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  tags = {
    Name = var.name
  }
}

output "s3_bucket_url" {
  value = aws_s3_bucket.hosting.bucket_domain_name
}

resource "aws_s3_bucket_policy" "hosting" {
  bucket = aws_s3_bucket.hosting.id

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::${var.bucket_name}/*"
    }
  ]
}
POLICY
}

resource "aws_cloudfront_distribution" "cdn" {
  origin {
    domain_name = aws_s3_bucket.hosting.bucket_domain_name
    origin_id   = local.s3_origin_id
  }

  comment             = "CDN for ${var.bucket_name} S3 Bucket"
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  aliases             = [var.domain_name]

  default_cache_behavior {
    target_origin_id = local.s3_origin_id
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    compress         = true

    forwarded_values {
      query_string = true
      headers      = ["Origin", "Access-Control-Request-Headers", "Access-Control-Request-Method"]
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }
  custom_error_response {
    error_caching_min_ttl = 3000
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
  }
  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = var.cert_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.1_2016"
  }

  tags = {
    Name = var.name
  }
}

resource "aws_route53_record" "alias" {
  zone_id = var.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.cdn.domain_name
    zone_id                = aws_cloudfront_distribution.cdn.hosted_zone_id
    evaluate_target_health = false
  }
}
