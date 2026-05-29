export const PORTFOLIO_CONFIG = {
  heroMetrics: [
    { label: "Vulnerability Assessments", value: 50, suffix: "+" },
    { label: "Vulnerabilities Identified", value: 230, suffix: "+" },
    { label: "Compliance Audits", value: 100, suffix: "%" },
  ],
  experienceTimeline: [
    {
      id: 'iserveu-fulltime',
      role: 'Cybersecurity Engineer',
      company: 'iServeU Technology',
      period: 'Jul 2024 – Present',
      impactPoints: [
        'Conducted 50+ VAPT engagements for FinTech microservices.',
        'Executed 8+ comprehensive PCI-DSS and ISO 27001 compliance audits.',
        'Developed custom Python/Bash detection pipelines, reducing false positives by 45%.'
      ]
    },
    {
      id: 'iserveu-intern',
      role: 'Cybersecurity Intern',
      company: 'iServeU Technology',
      period: 'Feb 2024 – Jul 2024',
      impactPoints: [
        'Discovered and validated 230+ distinct vulnerabilities across 12+ critical infrastructure environments.',
        'Assisted in integrating DAST scanners into CI/CD pipelines.'
      ]
    }
  ],
  featuredProjects: [
    {
      id: 'gcp-hardening',
      title: 'Cloud Infrastructure Hardening',
      description: 'Led end-to-end hardening of 92+ GCP Cloud Storage buckets. Enforced private access, IAM least-privilege, and CMEK encryption, eliminating 100% of public exposure paths.',
      impact: 'Zero production outages during migration.',
      tags: ['GCP', 'IAM', 'Python', 'CIS Benchmarks'],
      type: 'cloud'
    },
    {
      id: 'wazuh-siem',
      title: 'Custom SIEM Detection Engine',
      description: 'Designed and deployed a custom Wazuh SIEM architecture with 20+ fine-tuned detection rules, drastically reducing alert fatigue and accelerating incident response times.',
      impact: '45% reduction in false-positives.',
      tags: ['Wazuh', 'Python', 'Detection Engineering'],
      type: 'automation'
    },
    {
      id: 'dlp-pipeline',
      title: 'Google DLP API Data Masking',
      description: 'Built a scalable Python pipeline classifying and masking PAN/Aadhaar data across 500+ daily FinTech transactions using the Google DLP API.',
      impact: '100% PII masking compliance achieved.',
      tags: ['Python', 'Google DLP', 'PCI-DSS'],
      type: 'automation'
    }
  ],
  skillsCerts: {
    coreCapabilities: [
      'Penetration Testing (Web/API/Network)',
      'Cloud Security Architecture (GCP/AWS)',
      'Detection Engineering & SIEM (Wazuh)',
      'Compliance Auditing (PCI-DSS, ISO 27001)',
      'Vulnerability Management & CI/CD Integration',
      'Python/Bash Security Automation'
    ],
    premiumBadges: [
      { name: 'Practical Ethical Hacker', issuer: 'TCM Security', color: 'accent-cyan' },
      { name: 'eJPT v2', issuer: 'eLearnSecurity', color: 'accent-indigo' },
      { name: 'INE Certified Cloud Associate', issuer: 'INE Security', color: 'accent-cyan' }
    ]
  }
};
