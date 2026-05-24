---
title: "GCP IAM Hardening & Architecture Review"
excerpt: "Comprehensive cloud architecture review and IAM least-privilege enforcement eliminating public exposure across 92+ Cloud Storage buckets."
header:
  overlay_color: "#333"
  overlay_filter: "0.5"
---

## Overview

This project involved a comprehensive review of a Google Cloud Platform (GCP) environment supporting payment microservices. The objective was to identify and remediate misconfigured Cloud Storage buckets and over-privileged IAM roles.

## Methodology

1.  **Enumeration:** Utilized Google Cloud Security Command Center and custom scripts to audit IAM policies across all storage buckets.
2.  **Architecture Review:** Mapped data flows to identify trust boundaries and unnecessary public access points.
3.  **Remediation:** Enforced strict IAM least-privilege policies and implemented Customer-Managed Encryption Keys (CMEK).

## Architecture Flow

```mermaid
graph TD
    A[External Clients] -->|HTTPS| B(Load Balancer)
    B --> C{API Gateway}
    C -->|Authenticated API| D[Payment Microservice]
    D -->|Internal VPC| E[(GCP Cloud SQL)]
    D -->|IAM Secured| F[GCP Storage Bucket - Private]

    style F fill:#4CAF50,stroke:#388E3C,stroke-width:2px,color:#fff
```

## Results

*   Successfully secured 92+ GCP Storage buckets.
*   Eliminated 100% of identified public exposure paths.
*   Achieved zero production outages during the remediation process.
