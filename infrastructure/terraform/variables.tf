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

variable "bucket_name_staging" {
  description = "name of the S3 bucket where the static website will be hosted, e.g. \"demo.com\""
  type        = string
}

variable "bucket_name_production" {
  description = "name of the S3 bucket where the static website will be hosted, e.g. \"demo.com\""
  type        = string
}

variable "domain_name_staging" {
  description = "domain for the cloudfront distribution e.g. \"demo.com\""
  type        = string
}

variable "domain_name_production" {
  description = "domain for the cloudfront distribution e.g. \"demo.com\""
  type        = string
}

variable "zone_id_staging" {
  description = "id of the route53 zone"
  type        = string
}

variable "cert_arn_staging" {
  description = "The ARN of the certificate that the CloudFront distribution uses for https"
  type        = string
}

variable "zone_id_production" {
  description = "id of the route53 zone"
  type        = string
}

variable "cert_arn_production" {
  description = "The ARN of the certificate that the CloudFront distribution uses for https"
  type        = string
}
