---
title: "GCP Bucket Hardening & DLP"
excerpt: "Enumeration of 92+ buckets and the implementation of least-privilege IAM and CMEK."
categories:
  - Cloud Security
tags:
  - GCP
  - IAM
  - Cloud Storage
  - Hardening
---

## Executive Summary
This post outlines the process of auditing and securing over 92 Google Cloud Platform (GCP) Cloud Storage buckets, eliminating all public exposure paths.

## 1. Enumeration & Discovery
*Describe the tools and scripts used to audit the 92+ buckets for public access and misconfigurations.*

## 2. Implementing Least Privilege IAM
*Explain the transition from broad roles to granular, least-privilege IAM policies.*

## 3. Customer-Managed Encryption Keys (CMEK)
*Detail the implementation of CMEK for sensitive buckets to ensure data at rest is protected with keys managed by the organization.*

## Conclusion
*Discuss the final state of the GCP storage environment and the 100% reduction in public exposure.*
