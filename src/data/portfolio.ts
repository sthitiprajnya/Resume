import type {
  PersonalInfo, Stat, SkillCategory, ExperienceItem,
  Project, Certification, Education
} from '@/types';

export const PERSONAL: PersonalInfo = {
  name:          'Sthitaprajna Biswal',
  nameShort:     'STHITAPRAJNA',
  title:         'Information Security Engineer · Application VAPT Specialist',
  tagline:       'Securing FinTech. Hunting vulnerabilities. Automating defenses.',
  email:         'sthitabiswal2002@gmail.com',
  phone:         '+91-9078225080',
  github:        'https://github.com/sthitiprajnya',
  githubUser:    'sthitiprajnya',
  linkedin:      'https://linkedin.com/in/sthitaprajnabiswal',
  location:      'Bhubaneswar, Odisha, India',
  locationShort: 'Bhubaneswar, India',
  availability:  true,
  currentRole:   'Information Security Engineer',
  currentCompany:'iServeU Technology Pvt. Ltd.',
  resumeUrl:     '/resume/Sthitaprajna_Biswal_Resume.pdf',
};

export const HERO_ROLES: string[] = [
  'Application VAPT Specialist.',
  'Cloud Security Engineer.',
  'Red Team Practitioner.',
  'AppSec Professional.',
  'Security Automation Engineer.',
];

export const HERO_STATS: Stat[] = [
  { value: 50,  suffix: '+', label: 'Pen Tests' },
  { value: 230, suffix: '+', label: 'Vulnerabilities' },
  { value: 11,  suffix: '',  label: 'Certifications' },
  { value: 2,   suffix: '+', label: 'Years Experience' },
];

export const ABOUT_STATS: Stat[] = [
  { value: 50,  suffix: '+', label: 'Pen Tests Executed' },
  { value: 230, suffix: '+', label: 'Unique Vulnerabilities' },
  { value: 8,   suffix: '',  label: 'Compliance Audits' },
  { value: 11,  suffix: '',  label: 'Certifications' },
];

export const ABOUT_BIO = [
  "Information Security Engineer at iServeU Technology, where I've spent 2+ years breaking production FinTech systems before the bad actors can. I've executed 50+ full-scope penetration tests across web applications, REST/SOAP APIs, mobile apps, and cloud infrastructure — uncovering 230+ unique vulnerabilities for clients including NPCI, UIDAI, Axis Bank, Kotak Mahindra, and Bank of Baroda.",
  "My work lives at the intersection of offense and engineering — I don't just find the hole, I build the PoC, write the remediation playbook, and track closure to zero. Double award winner at iServeU: Best Intern 2024, Rising Performer 2025. Actively seeking roles in Cloud Security, AppSec, and Red Team operations.",
];

export const TERMINAL_LINES = [
  { prompt: '$', command: 'whoami' },
  { prompt: '>', output: 'sthitaprajna_biswal' },
  { prompt: '$', command: 'cat current_role.txt' },
  { prompt: '>', output: 'Information Security Engineer' },
  { prompt: '>', output: 'iServeU Technology · Bhubaneswar' },
  { prompt: '$', command: 'echo $SEEKING' },
  { prompt: '>', output: 'CLOUD_SECURITY | APPSEC | RED_TEAM', cursor: true },
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Security Tools',
    color: 'cyan',
    skills: [
      { name: 'Burp Suite Pro',  icon: 'burpsuite',  proficiency: 95 },
      { name: 'Nessus',          icon: 'nessus',     proficiency: 88 },
      { name: 'Kali Linux',      icon: 'kali',       proficiency: 92 },
      { name: 'Metasploit',      icon: 'metasploit', proficiency: 80 },
      { name: 'Nmap',            icon: 'nmap',       proficiency: 90 },
      { name: 'Nuclei',          icon: 'nuclei',     proficiency: 80 },
      { name: 'SQLMap',          icon: 'sqlmap',     proficiency: 82 },
      { name: 'Wireshark',       icon: 'wireshark',  proficiency: 85 },
      { name: 'Frida / MobSF',   icon: 'frida',      proficiency: 70 },
      { name: 'Aircrack-ng',     icon: 'aircrack',   proficiency: 72 },
      { name: 'SpiderFoot',      icon: 'spiderfoot', proficiency: 78 },
      { name: 'OWASP ZAP',       icon: 'zap',        proficiency: 75 },
    ],
  },
  {
    category: 'Cloud & Containers',
    color: 'amber',
    skills: [
      { name: 'GCP Security',    icon: 'gcp',        proficiency: 80 },
      { name: 'AWS Security Hub',icon: 'aws',        proficiency: 75 },
      { name: 'Kubernetes / GKE',icon: 'kubernetes', proficiency: 78 },
      { name: 'Docker Security', icon: 'docker',     proficiency: 82 },
      { name: 'CIS Benchmarks',  icon: 'cis',        proficiency: 80 },
    ],
  },
  {
    category: 'SIEM & Monitoring',
    color: 'green',
    skills: [
      { name: 'Wazuh',           icon: 'wazuh',      proficiency: 85 },
      { name: 'Zabbix',          icon: 'zabbix',     proficiency: 68 },
      { name: 'Log Analysis',    icon: 'logs',       proficiency: 82 },
    ],
  },
  {
    category: 'Scripting & Automation',
    color: 'violet',
    skills: [
      { name: 'Python 3.x',      icon: 'python',     proficiency: 88 },
      { name: 'Bash',            icon: 'bash',       proficiency: 85 },
      { name: 'PowerShell',      icon: 'powershell', proficiency: 72 },
      { name: 'Google Apps Script',icon:'appscript', proficiency: 70 },
    ],
  },
  {
    category: 'Frameworks & Standards',
    color: 'violet',
    skills: [
      { name: 'OWASP Top 10',    icon: 'owasp',      proficiency: 95 },
      { name: 'MITRE ATT&CK',    icon: 'mitre',      proficiency: 88 },
      { name: 'PCI DSS v4.0.1',  icon: 'pcidss',     proficiency: 85 },
      { name: 'ISO 27001:2022',   icon: 'iso27001',   proficiency: 82 },
      { name: 'PTES',             icon: 'ptes',       proficiency: 88 },
      { name: 'NIST CSF',         icon: 'nist',       proficiency: 78 },
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id:           'iserveU',
    company:      'iServeU Technology Pvt. Ltd.',
    role:         'Information Security Engineer / Penetration Tester',
    location:     'Bhubaneswar, India',
    period:       'Dec 2023 – Present',
    periodShort:  '2023 – Present',
    type:         'Full-time',
    tags:         ['Burp Suite Pro','Nessus','GCP','AWS','Kubernetes','Docker','Wazuh','Python','Bash','OWASP','MITRE ATT&CK','PCI DSS','ISO 27001'],
    awards:       ['Best Intern Award 2024', 'Rising Performer Award 2025'],
    subsections: [
      {
        id:    'vapt',
        label: 'Application VAPT',
        color: 'cyan',
        bullets: [
          'Led 50+ full-scope web application penetration tests against FinTech, BFSI, and payment platforms using Burp Suite Pro — uncovered 200+ vulnerabilities including IDOR, auth bypass, session fixation, XSS, SQL injection, XXE, SSRF, CSRF, and broken access controls; every engagement closed with exploit-backed PoC reports aligned to OWASP Top 10.',
          'Performed REST & SOAP API security assessments on BBPS, UPI, and payment gateway integrations — identified and closed 12 critical/high findings in IndusInd Bank API integrations within a 3-week window ahead of compliance deadline.',
          'Executed Android and iOS VAPT covering insecure data storage, certificate pinning bypass, and traffic interception via Burp Suite Pro across mobile payment apps deployed to millions of end-users.',
          'Delivered threat-aware architecture reviews and DFDs for 8 payment platforms; mapped 40+ design-level attack vectors — recommendations adopted by engineering teams reduced architecture-level findings in subsequent VAPT cycles by ~55%.',
          'Discovered PAN and Aadhaar exposure across 6 legacy banking endpoints and 3 misconfigured GCS buckets; constructed end-to-end exfiltration PoC chains; led Google DLP API implementation (Python 3.10) classifying and masking PCI/PII data across 500+ daily transactions.',
        ],
      },
      {
        id:    'cloud',
        label: 'Cloud, Infrastructure & Adversarial Ops',
        color: 'amber',
        bullets: [
          'Enumerated and exploited misconfigurations across 92+ GCP Cloud Storage buckets and over-privileged IAM roles exposing sensitive payment data; led end-to-end hardening (private bucket enforcement, IAM least-privilege, CMEK) — eliminated 100% of identified public exposure paths with zero production outages.',
          'Conducted internal VAPT of GCP compute instances, VMs, and Kubernetes nodes — uncovered 3 privilege escalation paths and 5 lateral movement vectors across production segments; proposed and implemented network segmentation across 200+ internal services.',
          'Led red-team-style investigation of a live cryptojacking incident on GCP; traced initial access, 2 persistence mechanisms (malicious cron/systemd), and crypto-mining payload; designed 6 new Wazuh detection rules cutting MTTD for similar attacks by ~80%.',
          'Identified unauthenticated MQTT broker in AWS-based payment services capable of manipulating live financial transactions; built working PoC demonstrating the full attack chain; drove broker hardening (mTLS, ACLs, auth) across 4 payment microservices before any regulatory review.',
          'Executed wireless security assessments identifying WEP/WPA weaknesses and 4 rogue APs across campus networks adjacent to payment infrastructure; validated WPA3 migration and VLAN segmentation.',
        ],
      },
      {
        id:    'compliance',
        label: 'Compliance, Automation & SIEM',
        color: 'violet',
        bullets: [
          'Owned 8 end-to-end security audits (PCI DSS v4.0.1, ISO 27001:2022, SOC 2 Type 2) for clients including NPCI, UIDAI, UCO Bank, Bank of Baroda, Axis Bank, Kotak Mahindra, BoM, BoI, NSDL, Slice — framed all findings from an attacker perspective with PoC narratives; achieved full closure with zero non-conformance carry-overs.',
          'Built Python, Bash, and Google Apps Script pipelines (JIRA REST API) to automate VAPT ticket tracking, risk dashboards, and SLA breach alerts — improved high-risk finding closure rates by 35% and reduced manual reporting effort by ~8 hours/week.',
          'Deployed Wazuh SIEM from scratch for centralised monitoring across endpoints, cloud services, and network devices; authored 20+ custom detection rules reducing false-positive volume by 45% while increasing true-positive detection rate.',
        ],
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id:          'dlp-pipeline',
    title:       'Google DLP Pipeline — PCI/PII Masking at Scale',
    description: 'Python pipeline classifying and masking PAN & Aadhaar data across 500+ daily FinTech transactions using the Google DLP API. Included discovery of PAN exposure across 6 legacy banking endpoints and 3 GCS buckets, with full exfiltration PoC chains.',
    category:    'automation',
    tags:        ['Python 3.10', 'Google DLP API', 'GCP', 'Data Classification', 'PCI/PII'],
    imageUrl:    '/images/projects/dlp-pipeline.webp',
    imageAlt:    'Google DLP Pipeline architecture diagram',
    githubUrl:   'https://github.com/sthitiprajnya',
    featured:    false,
    year:        2024,
    impact:      '500+ daily transactions protected',
  },
  {
    id:          'wazuh-siem',
    title:       'Wazuh SIEM — Custom Rule Engine',
    description: 'End-to-end Wazuh SIEM deployment for centralised monitoring across endpoints, cloud services, and network devices. Authored 20+ custom detection rules; reduced false-positive volume by 45% while increasing true-positive detection. Tuning insights fed directly into subsequent red-team engagements.',
    category:    'cloud',
    tags:        ['Wazuh', 'Python', 'Log Analysis', 'Detection Engineering', 'Linux'],
    imageUrl:    '/images/projects/wazuh-siem.webp',
    imageAlt:    'Wazuh SIEM dashboard with custom detection rules',
    githubUrl:   'https://github.com/sthitiprajnya',
    featured:    false,
    year:        2024,
    impact:      '45% false-positive reduction',
  },
  {
    id:          'gcp-hardening',
    title:       'GCP Cloud Storage Hardening — 92+ Buckets',
    description: 'Full attack surface enumeration and exploitation of misconfigurations across 92+ GCP Cloud Storage buckets and over-privileged IAM roles. Led end-to-end hardening: private bucket enforcement, IAM least-privilege, CMEK implementation. Eliminated 100% of public exposure paths with zero production outages.',
    category:    'cloud',
    tags:        ['GCP', 'IAM', 'CMEK', 'Cloud Storage', 'CIS Benchmarks', 'Python'],
    imageUrl:    '/images/projects/gcp-hardening.webp',
    imageAlt:    'GCP security hardening - IAM and storage configuration',
    githubUrl:   'https://github.com/sthitiprajnya',
    featured:    true,
    year:        2024,
    impact:      '100% public exposure eliminated',
  },
  {
    id:          'mqtt-poc',
    title:       'MQTT/IoT Attack Chain PoC — AWS Payment Services',
    description: 'Identified an unauthenticated MQTT broker in AWS-based payment microservices capable of manipulating live financial transactions. Built a complete working proof-of-concept demonstrating the full attack chain. Drove broker hardening (mTLS, ACLs, auth enforcement) across 4 payment microservices before any regulatory review.',
    category:    'security',
    tags:        ['MQTT', 'AWS', 'Python', 'IoT Security', 'Protocol Abuse', 'PoC Development'],
    imageUrl:    '/images/projects/mqtt-poc.webp',
    imageAlt:    'MQTT attack chain proof of concept architecture',
    githubUrl:   'https://github.com/sthitiprajnya',
    featured:    true,
    year:        2024,
    impact:      '4 payment microservices hardened',
  },
  {
    id:          'vapt-automation',
    title:       'VAPT Automation Pipeline — JIRA + Python',
    description: 'Python, Bash, and Google Apps Script automation for VAPT ticket tracking, risk dashboards, and SLA breach alerts via JIRA REST API. Improved high-risk finding closure rates by 35% and reduced manual reporting effort by ~8 hours/week across the security team.',
    category:    'automation',
    tags:        ['Python', 'Bash', 'Google Apps Script', 'JIRA REST API', 'Automation'],
    imageUrl:    '/images/projects/vapt-automation.webp',
    imageAlt:    'VAPT automation pipeline dashboard',
    githubUrl:   'https://github.com/sthitiprajnya',
    featured:    false,
    year:        2024,
    impact:      '35% faster finding closure',
  },
  {
    id:          'crypto-incident',
    title:       'Cryptojacking Incident — Detection & Response',
    description: 'Red-team-style investigation of a live cryptojacking incident on GCP infrastructure. Traced initial access vector, 2 persistence mechanisms (malicious cron/systemd jobs), and the crypto-mining payload. Designed post-engagement hardening and 6 new Wazuh detection rules cutting MTTD for similar attacks by ~80%.',
    category:    'security',
    tags:        ['GCP', 'Wazuh', 'Incident Response', 'Forensics', 'Linux', 'Detection Engineering'],
    imageUrl:    '/images/projects/crypto-incident.webp',
    imageAlt:    'Cryptojacking incident investigation timeline',
    githubUrl:   'https://github.com/sthitiprajnya',
    featured:    true,
    year:        2024,
    impact:      '80% faster future detection',
  },
];

export const CERTIFICATIONS: Certification[] = [
  { id: 'ejpt',         name: 'eJPT v2',                            issuer: 'eLearnSecurity',       year: 2024, color: 'cyan',   status: 'active',      verifyUrl: 'https://credentials.elearnsecurity.com' },
  { id: 'peh',          name: 'Practical Ethical Hacker (PEH)',     issuer: 'TCM Security',          year: 2024, color: 'green',  status: 'active',      verifyUrl: 'https://tcm-sec.com' },
  { id: 'icca',         name: 'INE Certified Cloud Associate',      issuer: 'INE Security',          year: 2024, color: 'amber',  status: 'active',      verifyUrl: 'https://ine.com' },
  { id: 'cyberops',     name: 'CyberOps Associate',                 issuer: 'Cisco Systems',         year: 2023, color: 'cyan',   status: 'active',      verifyUrl: 'https://cisco.com' },
  { id: 'ccna',         name: 'CCNA v1.7',                          issuer: 'Cisco Systems',         year: 2023, color: 'cyan',   status: 'active',      verifyUrl: 'https://cisco.com' },
  { id: 'ehe',          name: 'Ethical Hacking Essentials (EHE)',   issuer: 'EC-Council',            year: 2023, color: 'violet', status: 'active',      verifyUrl: 'https://eccouncil.org' },
  { id: 'nde',          name: 'Network Defence Essentials (NDE)',   issuer: 'EC-Council',            year: 2023, color: 'violet', status: 'active',      verifyUrl: 'https://eccouncil.org' },
  { id: 'dfe',          name: 'Digital Forensics Essentials (DFE)', issuer: 'EC-Council',            year: 2023, color: 'violet', status: 'active',      verifyUrl: 'https://eccouncil.org' },
  { id: 'cybersec',     name: 'Cybersecurity Essentials',           issuer: 'Cisco',                 year: 2022, color: 'cyan',   status: 'active',      verifyUrl: 'https://cisco.com' },
  { id: 'pcap',         name: 'PCAP — Python Certified',            issuer: 'OpenEDG Python Institute', year: 2023, color: 'green', status: 'active',   verifyUrl: 'https://pythoninstitute.org' },
  { id: 'kali',         name: 'Basic to Advanced Kali Linux',       issuer: 'CRAW Security',         year: 2023, color: 'green',  status: 'active',      verifyUrl: 'https://craw.in' },
];

export const EDUCATION: Education[] = [
  {
    degree:      'Bachelor of Technology — Computer Science & Engineering',
    institution: 'Veer Surendra Sai University of Technology (VSSUT)',
    location:    'Bhubaneswar, India',
    period:      '2020 – 2024',
    grade:       '',
  },
];