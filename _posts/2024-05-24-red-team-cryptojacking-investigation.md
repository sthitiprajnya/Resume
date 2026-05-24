---
title: "Red Team Cryptojacking Investigation"
excerpt: "A deep dive into initial access, persistence via malicious cron/systemd, and the 6 Wazuh detection rules authored to catch the adversary."
categories:
  - Write-ups
  - Threat Hunting
tags:
  - Red Teaming
  - Cryptojacking
  - Wazuh
  - Detection Engineering
---

## Executive Summary
This write-up details a red team cryptojacking simulation and the subsequent detection engineering efforts. We cover the initial access vectors, persistence mechanisms employed by the adversary, and the specific Wazuh rules created to detect these activities, reducing Mean Time To Detect (MTTD) by 80%.

## 1. Initial Access & Execution
*Detail the vulnerability or misconfiguration exploited to gain initial access (e.g., exposed Docker API, RCE in a web app).*

## 2. Persistence Mechanisms
*Explain how the adversary maintained access. Examples:*
* Malicious `cron` jobs
* Tampered `systemd` services

## 3. Detection Engineering (Wazuh)
*Provide the 6 Wazuh rules authored to detect this behavior.*

```xml
<!-- Example Wazuh Rule Template -->
<group name="cryptojacking, custom">
  <rule id="100001" level="12">
    <if_sid>xxx</if_sid>
    <match>xmrig</match>
    <description>Cryptojacking activity detected (xmrig).</description>
  </rule>
</group>
```

## Conclusion
*Summarize the impact of the newly implemented rules on the organization's security posture.*
