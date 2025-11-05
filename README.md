# Personal Portfolio Website

A fully automated, serverless portfolio website built to showcase my projects, cloud architecture skills, and DevOps automation practices.

Deployed on **AWS S3** with **Route53**, **CloudFront**, and **GitHub Actions CI/CD** , integrating a **Lambda contact form API** for secure messaging and cost-efficient scalability.

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
    %% ===== USER & FRONTEND =====
    A[User Browser] -->|HTTPS Request| B[Route 53 - DNS]
    B -->|Resolves Domain| C[CloudFront CDN]
    C -->|Serves Cached Static Assets| D[S3 Static Website Bucket]

    %% ===== CONTACT FORM + RECAPTCHA =====
    A -->|Submits Form + reCAPTCHA Token| E[Lambda Function]
    E -->|Verify Token| G[Google reCAPTCHA v2 API]
    G -->|Verification Result| E
    E -->|Process Form | E2[Lambda Logic Handler]
    E -->|Send Response| A

    %% ===== LOGGING & MONITORING =====
    E -->|Execution Logs| F[CloudWatch Logs]
    D -->|Access Logs| F

    %% ===== CI/CD PIPELINE =====
    H[GitHub Repository] -->|Push Commit| I[GitHub Actions CI/CD]
    I -->|Build + Deploy Static Site| D
    I -->|Invalidate CDN Cache| C

    %% ===== CLASSES AND STYLING =====
    classDef aws fill:#f8f9fa,stroke:#232f3e,stroke-width:2px,color:#232f3e;
    classDef ext fill:#e8f4fd,stroke:#1a73e8,stroke-width:2px,color:#0b5394;
    classDef github fill:#f5f5f5,stroke:#181717,color:#181717;
    classDef monitor fill:#fef9e7,stroke:#f1c40f,color:#7d6608;

    class B,C,D,E,E2,F aws;
    class G ext;
    class H,I github;
    class F monitor;

    %% ===== GROUPS =====
    subgraph "AWS Infrastructure"
        B
        C
        D
        E
        E2
        F
    end

    subgraph "External Services"
        G
    end

    subgraph "CI/CD Pipeline"
        H
        I
    end
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

### GCP Services

- Google Recaptcha v2

### DevOps Tools:

- GitHub Actions
- AWS CLI
- Boto3

## CI/CD Pipeline (GitHub Actions)

Automated deployments are triggered on each push to main with two events, quality checks and deployment.

**Quality Checks (Linting and Formatting):**

- ESLint for JavaScript (`src/**/*.js`)
- HTMLHint/htmllint for HTML (`src/**/*.html`)
- Prettier for consistent formatting across JS, HTML, CSS, JSON, and Markdown

**Build & Deployment:**

- `dist/` folder is generated from `src/`
- Uses `rimraf` to clean previous builds
- `cpx` to copy files from `src/` to `dist/`
- Deployment to AWS S3 and Cloudfront invalidation.

## Serverless Contact Form (Lambda + API Gateway)

The contact form on this site securely collects visitor messages and sends them to my AWS SNS topic via an AWS Lambda backend. It uses Google reCAPTCHA v2 to prevent spam and automated submissions, with environment variables managing secret keys for security. Form data is sent as JSON, validated server-side, and errors are gracefully handled with friendly fallback messages.

## Security and Cost Optimization

- IAM Roles instead of long-term credentials

- CORS configured for specific origins

- CAPTCHA validation before API invocation

- Minimal Lambda runtime for reduced cold start cost

- CloudFront caching to lower S3 data transfer

- Google recaptcha for lower costs (free for 10 thousand requests per month)

## About Me

I’m a DevOps & Cloud Engineer passionate about automation, scalable architectures, and developer experience.
This portfolio website is both a showcase of my work and a practical demonstration of modern cloud engineering.
