---
layout: home
title: "Sthitaprajna Biswal"
header:
  overlay_color: "#333"
  overlay_filter: "0.5"
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

## Executive Summary

I am a Cybersecurity Engineer with deep expertise in both **Application Security** and **Cloud Infrastructure**. By combining Red Team methodologies with DevSecOps principles, I deliver measurable risk reduction across complex financial technology environments.

My primary focus areas include:
- Web & Mobile Application VAPT (Burp Suite Pro)
- Cloud Security & Attack Surface Reduction (GCP / AWS)
- SIEM Deployment & Detection Engineering (Wazuh)
- Compliance Audits (PCI DSS, ISO 27001, SOC 2)

### Key Metrics
* **VAPT Engagements:** Led 50+ full-scope penetration tests.
* **Vulnerabilities Identified:** Uncovered 230+ unique vulnerabilities (IDOR, SQLi, SSRF, broken access controls).
* **Cloud Hardening:** Secured 92+ GCP Storage buckets, eliminating 100% of public exposure paths.
* **Threat Detection:** Built Wazuh SIEM rules cutting cryptojacking MTTD by 80%.

<div style="margin: 2em 0; text-align: center;">
  <a href="/resume/" class="btn btn--primary btn--large"><i class="fas fa-file-pdf"></i> View & Download Résumé</a>
</div>

### Interactive Terminal

<div id="terminal">
  <div id="terminal-header">
    <div class="terminal-button terminal-close"></div>
    <div class="terminal-button terminal-minimize"></div>
    <div class="terminal-button terminal-maximize"></div>
  </div>
  <div id="terminal-output">
    <div class="terminal-response">Welcome to the interactive terminal. Type 'help' to see available commands.</div>
  </div>
  <div class="terminal-input-line">
    <span class="prompt">visitor@sthitabiswal:~$</span>
    <input type="text" id="terminal-input" autocomplete="off" spellcheck="false" autofocus>
  </div>
</div>

<script src="{{ '/assets/js/terminal.js' | relative_url }}"></script>
