# Personal Portfolio Website

A fully automated, serverless portfolio website built to showcase my projects, cloud architecture skills, and DevOps automation practices.

Deployed on **AWS S3** with **Route53**, **CloudFront**, and **GitHub Actions CI/CD** — integrating a **Lambda contact form API** for secure messaging and cost-efficient scalability.

---

## Overview

This project demonstrates:
- **Serverless Architecture** with AWS
- **CI/CD automation** via GitHub Actions
- **Secure API Gateway + Lambda Integration**
- **Front-end optimization** for performance and reliability

---

## Architecture

```mermaid
graph TD
A[User Browser] -->|HTTPS Request| B[CloudFront CDN]
B --> C[S3 Static Website Hosting]
B --> D[API Gateway (Contact Form)]
D --> E[Lambda Function (Python)]
E --> F[SNS Topic -> Email Notification]
C -->|Route53| G[Custom Domain]
```

## Tech Stack

### Languages:
- HTML
- CSS 
- JavaScript 
- Python

### AWS Services:
- S3
- Lambda 
- API Gateway 
- SNS - CloudFront 
- Route53

### DevOps Tools:
- GitHub Actions 
- AWS CLI 
- Boto3

## CI/CD Pipeline (GitHub Actions)

Automated deployments are triggered on each push to main.
The pipeline syncs files to S3 and invalidates CloudFront caches.

## Serverless Contact Form (Lambda + API Gateway)

Secure contact form handler...



## Security and Cost Optimization

- IAM Roles instead of long-term credentials

- CORS configured for specific origins

- CAPTCHA validation before API invocation

- Minimal Lambda runtime for reduced cold start cost

- CloudFront caching to lower S3 data transfer

## About Me

I’m a DevOps & Cloud Engineer passionate about automation, scalable architectures, and developer experience.
This portfolio website is both a showcase of my work and a practical demonstration of modern cloud engineering.
