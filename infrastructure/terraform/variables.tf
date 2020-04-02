variable "name" {
  description = "the name of your stack, e.g. \"demo\""
  type        = string
  default     = "gesund-zusammen"
}

variable "aws-region" {
  description = "the AWS region in which resources are created"
  type        = string
  default     = "eu-central-1"
}

variable "aws-access-key" {
  type = string
}

variable "aws-secret-key" {
  type = string
}

variable "bucket_name" {
  description = "name of the S3 bucket where the static website will be hosted, e.g. \"demo.com\""
  type        = string
  default     = "gesundzusammen-staging.finleap.tech"
}

variable "domain_name" {
  description = "domain for the cloudfront distribution e.g. \"demo.com\""
  type        = string
  default     = "gesundzusammen-staging.finleap.tech"
}

variable "zone_id" {
  description = "id of the route53 zone"
  type        = string
  default     = "ZWT8GGMPHPMSM"
}

variable "cert_arn" {
  description = "The ARN of the certificate that the CloudFront distribution uses for https"
  type        = string
  default     = "arn:aws:acm:us-east-1:804609905630:certificate/1f6dc9e3-adf5-4f5f-974d-bf58dcb96a92"
}
