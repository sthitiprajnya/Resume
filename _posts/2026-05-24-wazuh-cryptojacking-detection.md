---
title: "Cryptojacking Response with Wazuh SIEM"
date: 2026-05-24
categories:
  - Detection Engineering
  - Incident Response
tags:
  - Wazuh
  - SIEM
  - Cryptojacking
  - Linux
---

## Threat Scenario
During routine monitoring, anomalous CPU spikes were detected on several non-critical Linux instances within the internal network. Initial investigation revealed unauthorized processes consuming near 100% of CPU resources.

## Analysis and Methodology
The incident was treated as an active compromise. Memory analysis and process inspection confirmed a cryptojacking payload (XMRig variant) executing in memory.

### Persistence Mechanisms Identified
1.  **Malicious Cron Jobs:** The attacker added entries to `crontab` to ensure the miner restarted upon termination or system reboot.
2.  **Systemd Services:** A hidden systemd service was created to execute the dropper script disguised as a legitimate background process.

## Detection Engineering with Wazuh
To ensure rapid detection of similar attacks across the fleet, custom Wazuh rules were developed.

### Custom Wazuh XML Rule

```xml
<group name="linux, cryptojacking, custom">
  <!-- Detect known cryptominer pool domains or IPs in syscheck or network logs -->
  <rule id="100050" level="10">
    <if_group>syslog</if_group>
    <match>pool.minexmr.com|xmr-eu1.nanopool.org</match>
    <description>Custom: Potential Cryptominer network connection detected.</description>
    <mitre>
      <id>T1496</id>
    </mitre>
  </rule>

  <!-- Detect suspicious crontab modifications -->
  <rule id="100051" level="8">
    <if_sid>510</if_sid> <!-- File modification -->
    <match>/var/spool/cron/crontabs/</match>
    <description>Custom: Suspicious crontab modification detected.</description>
    <mitre>
      <id>T1053.003</id>
    </mitre>
  </rule>
</group>
```

## Results and Mitigation
The custom rules were deployed to the Wazuh manager and distributed to all agents. This detection logic, combined with immediate remediation (terminating processes, removing persistence, and patching the initial vector), successfully eradicated the threat.

**Key Metric:** Implementation of these rules cut the Mean Time To Detect (MTTD) for subsequent cryptojacking attempts by ~80%.
