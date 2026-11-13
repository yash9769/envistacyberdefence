export interface OffensiveSubService {
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

export const OFFENSIVE_SERVICES: OffensiveSubService[] = [
  {
    id: "red-teaming",
    slug: "red-teaming-services",
    title: "Red Teaming & Adversary Emulation",
    navTitle: "Red Teaming Services",
    badge: "Advanced APT Simulation",
    tagline: "Test Your Defenses Against Nation-State and Syndicate Playbooks.",
    heroSummary:
      "Full-scope, objective-driven cyber attack simulations that test your organization's real-time detection, escalation, and incident response readiness across digital infrastructure, physical perimeters, and employee vigilance under realistic adversary constraints.",
    promise: "Zero-Knowledge Goal-Based Adversary Emulation",
    metrics: [
      { value: "0-Day", label: "Custom Exploit Chains", sub: "Adversary playbooks" },
      { value: "< 24h", label: "Initial Foothold", sub: "Realistic attack vectors" },
      { value: "100%", label: "MITRE ATT&CK Mapped", sub: "End-to-end telemetry" },
      { value: "0", label: "Production Outages", sub: "Safely coordinated rules" },
    ],
    frameworks: [
      "MITRE ATT&CK (Enterprise)",
      "NIST SP 800-115",
      "CBEST / TIBER-EU",
      "PTES (Penetration Testing Execution Standard)",
    ],
    whyItMatters: {
      title: "Why Point-in-Time Scans Are Not Enough",
      description:
        "Modern ransomware cartels and advanced persistent threats (APTs) don't stop at single vulnerabilities; they chain social engineering, Active Directory misconfigurations, and custom command-and-control (C2) evasion to achieve domain compromise.",
      points: [
        {
          headline: "Validate Security Operations Center (SOC) Telemetry",
          detail: "Find out if your EDR, SIEM, and SOC analysts actually detect adversary behavior before critical crown-jewel exfiltration occurs.",
        },
        {
          headline: "Uncover Multi-Stage Kill Chains",
          detail: "Demonstrate how a low-severity initial access vector can be pivoted into full cloud tenant takeover or core financial transaction interception.",
        },
        {
          headline: "Executive & Board Assurance",
          detail: "Provide board members and regulators with clear proof of organizational resilience backed by empirical timeline telemetry.",
        },
      ],
    },
    vectors: [
      {
        category: "External Reconnaissance & OSINT",
        description: "Footprinting internet-facing digital assets, exposed credentials, leaked source code, and employee digital footprints.",
        capabilities: [
          "Dark web credential leak correlation",
          "Shadow IT & unmapped cloud asset discovery",
          "Corporate domain typosquatting profiling",
          "Public API exposure and metadata harvesting",
        ],
      },
      {
        category: "Initial Access & Social Engineering",
        description: "Sophisticated entry vectors designed to bypass secure email gateways and endpoint heuristics without triggering immediate alerts.",
        capabilities: [
          "Targeted spear-phishing with weaponized payloads",
          "OAuth app consent grant phishing & AitM token interception",
          "Pretexting and executive voice/identity impersonation",
          "Physical security bypass & rogue network implants (optional)",
        ],
      },
      {
        category: "Internal Pivoting & Domain Dominance",
        description: "Lateral movement through Active Directory, hybrid Azure AD / Entra ID, and containerized cloud networks.",
        capabilities: [
          "Kerberoasting, AS-REP roasting & DCSync attacks",
          "Living-off-the-Land (LotL) binary exploitation",
          "Privilege escalation via misconfigured GPOs & PKI certificates",
          "Cross-segmentation bridging from IT to OT / ICS networks",
        ],
      },
      {
        category: "Adversary C2 & Simulated Exfiltration",
        description: "Custom covert command-and-control channels designed to test outbound network egress filtering and DLP controls.",
        capabilities: [
          "DNS tunneling and domain fronting egress channels",
          "Encrypted HTTPS traffic blended with legitimate enterprise APIs",
          "Crown-jewel database staging and proof-of-concept exfiltration",
          "Zero impact on live business transaction availability",
        ],
      },
    ],
    lifecycle: [
      {
        step: "01",
        phase: "Threat Intelligence & Scoping",
        title: "Adversary Profiling",
        description: "Defining engagement crowns, white-cell rules of engagement, and selecting threat actor profiles (e.g. FIN7, Volt Typhoon, BlackCat) relevant to your industry.",
        activities: ["Threat model calibration", "Emergency halt protocols", "Target crown-jewel designation"],
      },
      {
        step: "02",
        phase: "Recon & Weaponization",
        title: "Perimeter Footprinting & Payload Crafting",
        description: "Passive and active reconnaissance across all corporate perimeters and custom crafting of evasion payloads avoiding signature detections.",
        activities: ["OSINT asset enumeration", "EDR bypass testing in isolated labs", "Infrastructure setup with disposable redirectors"],
      },
      {
        step: "03",
        phase: "Initial Breach & Execution",
        title: "Gaining the Foothold",
        description: "Executing initial compromise via spear-phishing, exposed perimeter vulnerabilities, or trusted partner compromise scenarios.",
        activities: ["Payload execution", "C2 beacon establishment", "Anti-forensic log footprint minimization"],
      },
      {
        step: "04",
        phase: "Lateral Expansion & Objective Reach",
        title: "Privilege Escalation & Objective Fulfillment",
        description: "Pivoting through domain controllers, cloud tenants, and financial core engines to demonstrate incontrovertible access to designated crown jewels.",
        activities: ["Domain privilege elevation", "Data staging simulation", "Detection avoidance telemetry logging"],
      },
      {
        step: "05",
        phase: "Purple Team Debrief & Hardening",
        title: "Timeline Reconstruction & SOC Alignment",
        description: "Walking your defensive SOC and threat hunting teams through the entire timestamped timeline to identify blind spots and deploy immediate detections.",
        activities: ["Side-by-side Blue Team alignment", "SIEM correlation rule creation", "Board-ready strategic briefing"],
      },
    ],
    deliverables: [
      {
        title: "Executive Strategic Assessment",
        format: "PDF Presentation + In-Person Briefing",
        audience: "Board of Directors, CEO, CISO",
        description: "High-level summary of organizational resilience, business impact analysis, and strategic risk remediation priorities.",
      },
      {
        title: "Comprehensive Attack Narrative Dossier",
        format: "Technical Document (PDF / Portal)",
        audience: "Security Engineering, SOC Managers, IT Leadership",
        description: "Timestamp-by-timestamp breakdown of every executed command, artifact, payload, and lateral hop mapped to MITRE ATT&CK.",
      },
      {
        title: "Blue Team Telemetry & Detection Gap Matrix",
        format: "Spreadsheet / Interactive Dashboard",
        audience: "SOC Analysts, Detection Engineers",
        description: "Detailed matrix showing which actions were detected, which were logged but unalerted, and which went entirely unmonitored.",
      },
    ],
    engagementModels: [
      {
        name: "Full-Scope Black Box Red Team",
        suitableFor: "Mature enterprises with established SOC, 24/7 MDR, and hardened perimeters",
        description: "Zero prior knowledge granted; simulates an unconstrained nation-state adversary seeking crown-jewel compromise.",
      },
      {
        name: "Collaborative Purple Team Exercise",
        suitableFor: "Security teams seeking rapid, transparent validation of detection engineering pipelines",
        description: "Transparent, real-time engagement where Red and Blue work side-by-side to test and verify SIEM alert triggers.",
      },
      {
        name: "Assumed Breach Assessment",
        suitableFor: "Organizations looking to audit internal lateral defenses and insider threat resilience",
        description: "Starting from an internal workstation with standard employee privileges to evaluate defense-in-depth and segmentation.",
      },
    ],
    faqs: [
      {
        question: "Could a Red Team exercise cause downtime to our production systems?",
        answer: "No. Envista adheres to strict Rules of Engagement (RoE) overseen by an appointed White Cell. Destructive exploits (such as real ransomware payload execution or denial-of-service) are strictly replaced with proof-of-concept indicators (such as benign canary file drops and safe API queries).",
      },
      {
        question: "How does Red Teaming differ from a traditional Penetration Test?",
        answer: "Penetration testing aims to discover as many vulnerabilities as possible within a defined asset scope. Red Teaming is objective-driven (e.g., 'gain administrative access to SWIFT financial transfer infrastructure') and tests people, processes, and detection response capabilities rather than cataloging individual CVEs.",
      },
      {
        question: "Who should know about an active Red Team engagement inside our company?",
        answer: "To ensure an accurate evaluation of your SOC and defensive teams, knowledge is restricted to a small 'White Cell' (typically the CISO, Head of Legal, and Lead Infrastructure Director). The operational SOC and incident response teams operate under normal conditions without advance warning.",
      },
      {
        question: "How long does a typical Red Team engagement take?",
        answer: "Most full-scope engagements run over a period of 4 to 8 weeks, giving operators realistic time to perform passive intelligence gathering, craft customized evasive tooling, and conduct stealthy lateral pivots.",
      },
    ],
  },
  {
    id: "vulnerability-assessment",
    slug: "vulnerability-assessment",
    title: "Vulnerability Assessment & Surface Profiling",
    navTitle: "Vulnerability Assessment",
    badge: "Continuous Attack Surface Visibility",
    tagline: "Systematically Enumerate, Validate, and Prioritize Every Exposure Vector.",
    heroSummary:
      "Automated and expert-assisted vulnerability assessment that continuously inventories external attack surfaces, internal corporate networks, and cloud workloads to discover security flaws, configuration drifts, and unpatched assets before adversaries weaponize them.",
    promise: "Zero False-Positive Actionable Threat Discovery",
    metrics: [
      { value: "0", label: "False Positives Tolerated", sub: "Manual expert triage" },
      { value: "CVSS v4", label: "Risk-Weighted Scoring", sub: "Contextual prioritization" },
      { value: "100%", label: "Asset Surface Discovery", sub: "External & internal ranges" },
      { value: "SLA", label: "Remediation Verification", sub: "Post-patch re-audit" },
    ],
    frameworks: [
      "NIST Cybersecurity Framework (CSF)",
      "CIS Critical Security Controls v8",
      "ISO/IEC 27001",
      "CERT-In Guidelines",
    ],
    whyItMatters: {
      title: "Close Exposure Gaps Before Exploits Emerge",
      description:
        "With thousands of new CVEs disclosed annually and cloud assets spun up daily by distributed teams, organizations face unmanageable vulnerability backlogs without contextual risk prioritization.",
      points: [
        {
          headline: "Eliminate Vulnerability Fatigue",
          detail: "Move past noisy 500-page automated scan reports with manually triaged, prioritized remediation tickets based on real business exploitability.",
        },
        {
          headline: "Uncover Shadow IT & Unmanaged Endpoints",
          detail: "Detect forgotten staging servers, orphan subdomains, test database clusters, and legacy services exposed to the public internet.",
        },
        {
          headline: "Maintain Continuous Regulatory Compliance",
          detail: "Fulfill mandatory quarterly vulnerability assessment requirements across RBI, SEBI CSCRF, PCI DSS 4.0, and ISO 27001.",
        },
      ],
    },
    vectors: [
      {
        category: "External Perimeter & IP Range Scanning",
        description: "Mapping every publicly routable IP, open port, and internet-facing service across your corporate ASN and cloud providers.",
        capabilities: [
          "Full TCP/UDP port sweep & service banner grabbing",
          "SSL/TLS cryptographic cipher suite & certificate health validation",
          "DNS zone transfer testing & subdomain enumeration",
          "Exposed administrative interfaces (RDP, SSH, IPMI, VPN portals)",
        ],
      },
      {
        category: "Internal Infrastructure & Active Directory Audit",
        description: "Scanning internal subnetworks, employee VLANs, server farms, and virtualization clusters for unpatched flaws.",
        capabilities: [
          "Windows, Linux & Unix OS vulnerability identification",
          "Default credential & unauthenticated access checks",
          "Network switch, router, and firewall configuration review",
          "Database listener and storage system posture checks",
        ],
      },
      {
        category: "Web & API Layer Surface Profiling",
        description: "Automated vulnerability scanning of corporate web portals, customer apps, and microservice APIs.",
        capabilities: [
          "Known CVE matching on web frameworks & CMS platforms",
          "Cross-site scripting (XSS) and SQL injection vulnerability scanning",
          "CORS misconfigurations and security header inspection",
          "Third-party library version deprecation checks",
        ],
      },
      {
        category: "Cloud & Container Host Vulnerabilities",
        description: "Workload and container image scanning across AWS EC2, Azure VMs, GCP Compute, and Docker registries.",
        capabilities: [
          "Base image OS vulnerability scanning",
          "Known vulnerable packages in runtime environments",
          "Unencrypted data-at-rest storage volume identification",
          "Kernel patch compliance and hypervisor exposure testing",
        ],
      },
    ],
    lifecycle: [
      {
        step: "01",
        phase: "Asset Discovery & Scope Definition",
        title: "Perimeter Footprinting",
        description: "Establishing comprehensive IP manifests, domain registries, and cloud asset inventories to ensure zero unmonitored blind spots.",
        activities: ["Domain and IP asset cataloging", "Scan exclusion list agreement", "Scheduling low-impact scanning windows"],
      },
      {
        step: "02",
        phase: "Automated Deep-Scan Execution",
        title: "Multi-Engine Scanning",
        description: "Deploying enterprise-grade scanning engines backed by private zero-day signature databases across target perimeters.",
        activities: ["Port and service enumeration", "Version banner verification", "Configuration baseline assessment"],
      },
      {
        step: "03",
        phase: "Manual Triage & False-Positive Elimination",
        title: "Human Expert Validation",
        description: "Envista offensive security researchers manually verify every flagged vulnerability, filtering out scanner noise and hallucinated findings.",
        activities: ["Safe PoC verification", "Duplicate finding consolidation", "Environmental context weighting"],
      },
      {
        step: "04",
        phase: "Prioritized Remediation Roadmap",
        title: "Contextual Risk Scoring",
        description: "Categorizing findings by real-world exploitability (EPSS score, CISA KEV catalog) rather than generic vendor CVSS rankings.",
        activities: ["Executive summary production", "DevOps/IT remediation tickets", "Patch deployment prioritization guide"],
      },
      {
        step: "05",
        phase: "Verification Re-Scan & Attestation",
        title: "Closure Certification",
        description: "Re-scanning remediated assets and providing official compliance attestation letters confirming risk resolution.",
        activities: ["Re-test execution", "Residual risk attestation", "Certificate of completion issuance"],
      },
    ],
    deliverables: [
      {
        title: "Prioritized Vulnerability Action Plan",
        format: "Interactive Portal + Excel / CSV",
        audience: "IT Infrastructure, SysAdmins, DevOps Teams",
        description: "Granular inventory of vulnerabilities categorized by immediate, 30-day, and 60-day remediation SLAs with patch references.",
      },
      {
        title: "Executive Compliance Dashboard",
        format: "PDF Report",
        audience: "CISO, Head of Risk & Compliance, Auditors",
        description: "Strategic risk posture scoring, compliance alignment indices (PCI DSS, ISO 27001), and trend comparisons against previous quarters.",
      },
      {
        title: "Remediation Verification Certificate",
        format: "Official Signed PDF",
        audience: "Regulators, Enterprise Customers, Insurance Underwriters",
        description: "Formal certification confirming that identified critical and high vulnerabilities have been verified as remediated.",
      },
    ],
    engagementModels: [
      {
        name: "Quarterly Scheduled VAPT Retainer",
        suitableFor: "Regulated enterprises requiring continuous compliance certification",
        description: "Quarterly assessment cycles with on-demand rescans following major infrastructure overhauls.",
      },
      {
        name: "One-Time Point-in-Time Assessment",
        suitableFor: "M&A due diligence, pre-launch environments, or third-party vendor audits",
        description: "Comprehensive 2-week exhaustive vulnerability evaluation of target digital environments.",
      },
      {
        name: "Continuous Attack Surface Management (ASM)",
        suitableFor: "Dynamic cloud-native environments releasing changes weekly",
        description: "24/7 automated monitoring of new asset spin-ups with weekly expert triage reports.",
      },
    ],
    faqs: [
      {
        question: "How does a Vulnerability Assessment differ from Penetration Testing?",
        answer: "A Vulnerability Assessment focuses on identifying, enumerating, and categorizing as many potential vulnerabilities as possible across an environment without actively exploiting them. Penetration testing goes a step further by actively chaining and exploiting flaws to prove real-world business breach impacts.",
      },
      {
        question: "Will the vulnerability scan impact server performance or network bandwidth?",
        answer: "No. Envista calibrates scan concurrency, packet transmission rates, and timeout thresholds to ensure normal network operations and zero service degradation. Scans can also be scheduled during off-peak maintenance hours.",
      },
      {
        question: "Do you provide guidance on how to fix the vulnerabilities found?",
        answer: "Yes. Every finding in our deliverables includes step-by-step remediation guidance, specific vendor patch bulletin links, configuration code snippets, and compensating control recommendations.",
      },
    ],
  },
  {
    id: "penetration-testing",
    slug: "penetration-testing-services",
    title: "Penetration Testing Services (Web, API & Network)",
    navTitle: "Penetration Testing Services",
    badge: "Manual Expert Exploitation",
    tagline: "Uncover Business Logic Flaws, Zero-Days, and Deep Architectural Blindspots.",
    heroSummary:
      "Comprehensive, manual-led penetration testing across web applications, cloud backends, mobile apps, REST/GraphQL APIs, and corporate network infrastructure. We chain vulnerabilities to prove verified business exploitability and deliver developer-ready fixes.",
    promise: "Rigorous Manual Exploitation by Certified Offensive Researchers",
    metrics: [
      { value: "OWASP", label: "Top 10 & API Top 10", sub: "Complete coverage" },
      { value: "100%", label: "Manual Code & Logic Testing", sub: "Beyond automated scans" },
      { value: "Free", label: "Remediation Retest", sub: "Included in all scopes" },
      { value: "CREST / OSCP", label: "Certified Engineers", sub: "Elite practitioner team" },
    ],
    frameworks: [
      "OWASP Web Security Testing Guide (WSTG)",
      "OWASP API Security Top 10",
      "NIST SP 800-115",
      "PCI DSS 4.0 Pen Testing Requirements",
    ],
    whyItMatters: {
      title: "Automated Scanners Miss Complex Business Logic Flaws",
      description:
        "Over 80% of critical security breaches stem from business logic vulnerabilities—such as IDORs, privilege escalation, and multi-step transaction tampering—which automated vulnerability scanners are fundamentally blind to.",
      points: [
        {
          headline: "Prevent Catastrophic Data Breaches",
          detail: "Verify whether unauthenticated attackers can manipulate API endpoints to access other users' personal information or financial records.",
        },
        {
          headline: "Actionable Developer-Ready Remediation",
          detail: "Receive tailored code snippets, HTTP request/response payloads, and patch playbooks that engineers can implement immediately.",
        },
        {
          headline: "Satisfy Stringent Enterprise Vendor Audits",
          detail: "Provide enterprise prospects, banking partners, and insurance underwriters with an independent third-party VAPT report.",
        },
      ],
    },
    vectors: [
      {
        category: "Web Application Penetration Testing",
        description: "Deep manual security inspection of single-page apps, customer portals, administrative consoles, and e-commerce platforms.",
        capabilities: [
          "Broken Object Level Authorization (BOLA / IDOR)",
          "Authentication bypass & session fixation flaws",
          "Complex business logic transaction tampering",
          "Server-Side Request Forgery (SSRF) and Deserialization",
        ],
      },
      {
        category: "API & Microservice Security (REST, GraphQL, gRPC)",
        description: "Evaluating backend endpoints, microservice mesh security, rate limiting, and parameter validation.",
        capabilities: [
          "Mass assignment and excessive data exposure audits",
          "GraphQL query depth limits and introspection abuse",
          "API token validation and JWT signature tampering",
          "Lack of resource and rate-limiting brute force vectors",
        ],
      },
      {
        category: "Network Infrastructure (Internal & External)",
        description: "Testing perimeter firewalls, routers, Active Directory architectures, VPN gateways, and internal segmentation.",
        capabilities: [
          "External network perimeter penetration testing",
          "Internal network segmentation & VLAN hopping testing",
          "Active Directory privilege escalation & Kerberoasting",
          "SNMP, IPMI, and remote access service exploitation",
        ],
      },
      {
        category: "Mobile Application Penetration Testing",
        description: "Static and dynamic analysis of iOS and Android client binaries, secure local storage, and backend API interactions.",
        capabilities: [
          "Insecure data storage in SQLite, Keystore, and Keychain",
          "Runtime manipulation using Frida and SSL pinning bypass",
          "Reverse engineering of application binaries and secrets recovery",
          "Inter-Process Communication (IPC) component exploitation",
        ],
      },
    ],
    lifecycle: [
      {
        step: "01",
        phase: "Scoping & Threat Modeling",
        title: "Architecture Walkthrough & Goal Alignment",
        description: "Establishing test accounts, API documentation, environment access, and defining high-value transaction pathways.",
        activities: ["API schema ingestion (Swagger/OpenAPI)", "Test credential provisioning", "Safe testing window confirmation"],
      },
      {
        step: "02",
        phase: "Surface Enumeration & Mapping",
        title: "Endpoint & Role Discovery",
        description: "Crawling every application endpoint, role permission matrix, and data flow to construct an exhaustive attack surface tree.",
        activities: ["Role-based access mapping", "Hidden endpoint brute-forcing", "Input parameter enumeration"],
      },
      {
        step: "03",
        phase: "Deep Manual Exploitation",
        title: "Targeted Flaw Weaponization",
        description: "Our certified penetration testers craft tailored payloads, bypass WAF filters, and test authentication logic.",
        activities: ["IDOR and authorization testing", "Injection and SSRF payload crafting", "Zero-day vulnerability exploration"],
      },
      {
        step: "04",
        phase: "Impact Demonstration & Proof-of-Concept",
        title: "Safe Evidence Collection",
        description: "Documenting reproducible step-by-step reproduction steps with sanitized screenshots and cURL commands.",
        activities: ["Evidence sanitization", "Business impact calculation", "Developer fix formulation"],
      },
      {
        step: "05",
        phase: "Comprehensive Reporting & Free Retest",
        title: "Report Delivery & Remediation Retest",
        description: "Conducting executive walkthroughs and developer debriefs, followed by complimentary re-testing of all patched issues.",
        activities: ["Detailed findings presentation", "Developer Q&A session", "Clean re-test attestation issuance"],
      },
    ],
    deliverables: [
      {
        title: "VAPT Technical Audit Report",
        format: "Comprehensive PDF Dossier",
        audience: "Security Engineers, Software Developers",
        description: "Every finding documented with CVSS scores, affected URL/parameter, reproduction cURL commands, and code remediation snippets.",
      },
      {
        title: "Executive Cybersecurity Summary",
        format: "Slide Deck / High-Level PDF",
        audience: "CTO, CISO, Product VP, Board",
        description: "Non-technical executive summary visualizing risk exposure, systemic architectural trends, and tactical security investments.",
      },
      {
        title: "Attestation Letter of Clean Testing",
        format: "Signed Certificate of Security",
        audience: "Clients, Regulators, SOC 2 / ISO Auditors",
        description: "Official attestation from Envista Cyber Defence certifying the testing scope, methodology, and verified patch closure.",
      },
    ],
    engagementModels: [
      {
        name: "Grey Box Testing (Recommended)",
        suitableFor: "Maximum efficiency and realistic attack coverage",
        description: "Testers are provided standard user credentials and API documentation to audit privilege escalation and deep business logic.",
      },
      {
        name: "Black Box Testing",
        suitableFor: "Perimeter breach testing without prior insight",
        description: "Zero credentials or documentation provided; simulates an external adversary attempting unauthenticated compromise.",
      },
      {
        name: "White Box / Code-Assisted Testing",
        suitableFor: "Mission-critical applications, financial cores, and medical systems",
        description: "Full access to source code and architectural blueprints alongside live application testing for exhaustive coverage.",
      },
    ],
    faqs: [
      {
        question: "How long does a standard web application or API penetration test take?",
        answer: "A standard web application or API penetration test typically takes between 5 to 10 business days, depending on the number of roles, dynamic endpoints, and overall architectural complexity.",
      },
      {
        question: "Is remediation re-testing included in the engagement?",
        answer: "Yes. Every Envista penetration testing engagement includes one round of complimentary remediation re-testing within 30 to 60 days of the initial report delivery.",
      },
      {
        question: "Can penetration testing be performed directly in our production environment?",
        answer: "Yes. Our testers apply surgical, non-destructive methodologies to avoid downtime, data corruption, or denial-of-service. However, testing in a synchronized staging/UAT environment is also supported if preferred.",
      },
    ],
  },
  {
    id: "phishing-simulation",
    slug: "phishing-simulation-services",
    title: "Phishing Simulation & Social Engineering",
    navTitle: "Phishing Simulation Services",
    badge: "Human Perimeter Defense",
    tagline: "Transform Your Employees from Security Risks into an Active Defense Line.",
    heroSummary:
      "Controlled, highly realistic social engineering drills—including spear-phishing, AitM MFA token harvesting, executive vishing, and quishing (QR code phishing). We measure real baseline risk and provide targeted, just-in-time training.",
    promise: "Contextual, Non-Punitive Employee Security Resilience",
    metrics: [
      { value: "85%", label: "Click Rate Reduction", sub: "Within 6 months" },
      { value: "AitM", label: "MFA Bypass Scenarios", sub: "Modern adversary tactics" },
      { value: "0", label: "Punitive Shame Culture", sub: "Positive reinforcement" },
      { value: "1-Click", label: "Employee Reporting Drill", sub: "SOC threat button testing" },
    ],
    frameworks: [
      "NIST Special Publication 800-50",
      "ISO 27001 Annex A.7 (Human Resource Security)",
      "CISA Phishing Guidance",
      "SANS Security Awareness Framework",
    ],
    whyItMatters: {
      title: "Over 90% of Successful Breaches Begin with a Person",
      description:
        "Technical defenses cannot completely prevent targeted social engineering. Attackers use sophisticated pretexts, deepfake voice cloning, and adversary-in-the-middle phishing proxies to steal valid session cookies and bypass MFA.",
      points: [
        {
          headline: "Neutralize Adversary-in-the-Middle (AitM) Attacks",
          detail: "Educate employees on how modern phishing kits clone Microsoft 365, Google Workspace, and SSO logins to intercept session tokens in real time.",
        },
        {
          headline: "Cultivate an Active Human Sensor Network",
          detail: "Train your workforce not just to avoid clicking, but to actively report suspicious emails to the SOC within minutes of arrival.",
        },
        {
          headline: "Meet Regulatory Mandates for Security Awareness",
          detail: "Satisfy explicit employee awareness training and annual social engineering testing requirements under SEBI, RBI, and GDPR.",
        },
      ],
    },
    vectors: [
      {
        category: "Spear-Phishing & Credential Harvesting",
        description: "Tailored email campaigns mimicking authentic corporate notifications, vendor invoices, IT alerts, and HR communications.",
        capabilities: [
          "Brand-spoofed corporate intranet login lures",
          "Adversary-in-the-Middle (AitM) MFA bypass simulation",
          "File attachment macros and payload delivery simulations",
          "Compromised vendor invoice & wire transfer pretexts",
        ],
      },
      {
        category: "Quishing (QR Code Phishing) Drills",
        description: "Testing employee vulnerability to malicious QR codes in PDF attachments, physical office posters, and MFA reset requests.",
        capabilities: [
          "MFA re-enrollment QR code simulations",
          "Cafeteria and desk-drop physical flyer simulations",
          "Encrypted PDF invoice QR verification lures",
          "Mobile browser credential capture validation",
        ],
      },
      {
        category: "Vishing (Voice Pretexting) & Deepfake Scenarios",
        description: "Simulated telephone calls by professional social engineers mimicking IT helpdesk staff or executive personnel.",
        capabilities: [
          "Urgent password reset telephone pretexting",
          "One-Time Password (OTP) verbal extraction tests",
          "Executive emergency fund authorization simulations",
          "Third-party auditor remote desktop software installation lures",
        ],
      },
      {
        category: "Physical Security & Media Drops (Optional)",
        description: "Onsite social engineering drills to test access control barriers, reception vigilance, and employee challenge behavior.",
        capabilities: [
          "Tailgating through secure badge-access doors",
          "Weaponized USB flash drive drops in common areas",
          "Vendor impersonation (maintenance, deliveries, contractors)",
          "Clean desk policy audits & exposed document discovery",
        ],
      },
    ],
    lifecycle: [
      {
        step: "01",
        phase: "Threat Profiling & Scenario Customization",
        title: "Campaign Theme Engineering",
        description: "Designing realistic phishing scenarios matched to your company's actual software stack (Slack, Google Workspace, Office 365, Workday).",
        activities: ["Pretext selection", "Domain registration and email reputation priming", "Safe payload landing page creation"],
      },
      {
        step: "02",
        phase: "Controlled Campaign Execution",
        title: "Phased Email & Social Engineering Launch",
        description: "Distributing simulated attacks across departments at randomized intervals to prevent corridor warnings.",
        activities: ["Phased email delivery", "Live interaction tracking", "Payload interaction logging"],
      },
      {
        step: "03",
        phase: "Real-Time User Engagement",
        title: "Teachable Moment Feedback",
        description: "Employees who interact with the simulation are immediately redirected to interactive, micro-learning educational content.",
        activities: ["Immediate non-punitive feedback", "Identification of key red flags", "Reporting procedure guidance"],
      },
      {
        step: "04",
        phase: "Departmental Risk Telemetry",
        title: "Metric Aggregation & Behavioral Analysis",
        description: "Analyzing susceptibility rates across departments, seniority levels, and employee tenure.",
        activities: ["Click-rate calculation", "Credential submission rate analysis", "Reporting speed measurement"],
      },
      {
        step: "05",
        phase: "Continuous Resilience Program",
        title: "Adaptive Training Roadmap",
        description: "Providing security leadership with actionable recommendations for continuous quarterly simulations and policy reinforcement.",
        activities: ["Executive summary presentation", "High-risk employee training tracks", "Comparative benchmark indexing"],
      },
    ],
    deliverables: [
      {
        title: "Organizational Human Risk Index Report",
        format: "Executive Presentation + Analytics PDF",
        audience: "CISO, HR Leadership, Risk Committee",
        description: "Comprehensive breakdown of email opens, links clicked, credentials submitted, and time-to-report metrics across all departments.",
      },
      {
        title: "Departmental Risk Heatmap",
        format: "Interactive Dashboard / CSV Export",
        audience: "Security Awareness Managers, Business Unit Heads",
        description: "Anonymized departmental scoring highlighting business units requiring specialized micro-training interventions.",
      },
      {
        title: "Compliance Attestation Certificate",
        format: "Official Signed PDF",
        audience: "Internal Audit, External Regulators",
        description: "Formal certification validating that social engineering simulations and training compliance requirements have been executed.",
      },
    ],
    engagementModels: [
      {
        name: "Annual Managed Awareness Program (Quarterly)",
        suitableFor: "Continuous employee readiness and compliance maintenance",
        description: "Four distinct simulated campaigns per year with progressive difficulty and adaptive micro-training modules.",
      },
      {
        name: "Executive & VIP Spear-Phishing Drill",
        suitableFor: "C-suite executives, finance teams, and system administrators",
        description: "Deeply researched, bespoke pretexting targeting high-value individuals with advanced AitM and vishing scenarios.",
      },
      {
        name: "Baseline Point-in-Time Drill",
        suitableFor: "Establishing an initial risk baseline before launching internal security initiatives",
        description: "A single organization-wide campaign to measure true baseline vulnerability to modern phishing tactics.",
      },
    ],
    faqs: [
      {
        question: "Are employees penalized or disciplined if they fail a phishing simulation?",
        answer: "No. Envista strongly advocates for a positive, non-punitive security culture. Employees who click a simulated link receive immediate, supportive micro-training highlighting the exact indicators they missed, turning the encounter into a positive learning experience.",
      },
      {
        question: "How do you ensure simulated emails aren't blocked by our email filters?",
        answer: "Prior to launching the campaign, our operations team coordinates with your IT team to whitelist our testing IP addresses and simulation headers, ensuring accurate behavioral measurement of your workforce.",
      },
      {
        question: "Do you offer customized phishing scenarios tailored to our industry?",
        answer: "Yes. We customize every campaign to reflect current, authentic threats specific to your industry, including banking wire requests, healthcare HIPAA notices, IT system updates, and supplier invoice notifications.",
      },
    ],
  },
  {
    id: "secure-code-review",
    slug: "secure-code-review-services",
    title: "Secure Code Review (SAST & Manual)",
    navTitle: "Secure Code Review Services",
    badge: "Shift-Left DevSecOps",
    tagline: "Uncover Architectural Flaws and Cryptographic Weaknesses at the Source.",
    heroSummary:
      "Line-by-line manual code audit augmented by customized static analysis (SAST) tools. We identify hidden injection flaws, broken authorization logic, cryptographic errors, and hardcoded secrets directly in your source code repositories.",
    promise: "Deep Source-Level Vulnerability Elimination",
    metrics: [
      { value: "0", label: "Secret Leak Toleration", sub: "Automated & manual sweeps" },
      { value: "100%", label: "Source Code Privacy", sub: "Air-gapped & NDA secured" },
      { value: "SAST", label: "CI/CD Gate Integration", sub: "Automated rule handoff" },
      { value: "SCA", label: "Dependency & Supply Chain", sub: "CVE & license review" },
    ],
    frameworks: [
      "OWASP Secure Coding Practices",
      "CWE/SANS Top 25 Most Dangerous Software Errors",
      "NIST Secure Software Development Framework (SSDF)",
      "PCI DSS Requirement 6 (Secure Systems & Software)",
    ],
    whyItMatters: {
      title: "Fixing Flaws in Production Costs 30x More Than in Code",
      description:
        "Black-box testing can only inspect rendered application behaviors. Secure code review inspects underlying data flow paths, cryptographic implementations, and authorization decorators, eliminating flaws before code reaches staging.",
      points: [
        {
          headline: "Catch Architectural & Design Flaws Early",
          detail: "Locate deep design flaws such as unvalidated input serialization, race conditions, and insecure direct object access in backend controllers.",
        },
        {
          headline: "Eliminate Secrets & Credential Hardcoding",
          detail: "Discover embedded API keys, database connection strings, and private cryptographic keys buried in commit histories and configuration files.",
        },
        {
          headline: "Secure Third-Party Open Source Dependencies",
          detail: "Audit Software Bill of Materials (SBOM) to uncover transitive vulnerabilities in external npm, PyPI, Maven, and Go packages.",
        },
      ],
    },
    vectors: [
      {
        category: "Input Validation & Injection Analysis",
        description: "Tracing untrusted user inputs from entry points to backend sinks to detect injection risks.",
        capabilities: [
          "SQL, NoSQL, and ORM injection vulnerabilities",
          "Command injection & unsafe process execution calls",
          "Cross-Site Scripting (XSS) in modern frontend templates",
          "Server-Side Template Injection (SSTI) and XPath injection",
        ],
      },
      {
        category: "Authentication, Session & Authorization Logic",
        description: "Auditing user session lifecycle, token generation, and multi-tenant authorization decorators.",
        capabilities: [
          "JWT implementation flaws (weak signing keys, 'none' algorithm)",
          "Insecure session generation and predictable tokens",
          "Missing function-level and object-level access controls",
          "Password hashing algorithm safety (Argon2, bcrypt vs SHA1/MD5)",
        ],
      },
      {
        category: "Cryptography & Data Protection in Transit/Rest",
        description: "Validating cryptographic algorithms, initialization vectors, and key management schemes.",
        capabilities: [
          "Deprecated cryptographic algorithms (DES, 3DES, RC4)",
          "Hardcoded cryptographic seeds and predictable pseudo-randomness",
          "Insecure TLS client configurations and certificate validation bypasses",
          "Unencrypted sensitive data storage in local storage and logs",
        ],
      },
      {
        category: "Software Supply Chain & Dependency Security (SCA)",
        description: "Cataloging all third-party libraries, container Dockerfiles, and build pipeline dependencies.",
        capabilities: [
          "Known CVE matching in direct and transitive dependencies",
          "Dependency confusion and malicious package namespace attacks",
          "Insecure Dockerfile instructions (running as root, unpinned bases)",
          "CI/CD pipeline configuration audits (GitHub Actions, GitLab CI)",
        ],
      },
    ],
    lifecycle: [
      {
        step: "01",
        phase: "Scoping & Secure Repository Onboarding",
        title: "Code Access & Threat Model",
        description: "Onboarding source code under strict NDAs via secure client-provided repositories, air-gapped instances, or dedicated read-only tokens.",
        activities: ["Repository onboarding under strict NDA", "Architecture review with lead developers", "High-risk module identification"],
      },
      {
        step: "02",
        phase: "Automated Static Analysis Sweep",
        title: "Deep Semantic SAST Scanning",
        description: "Running multiple specialized static analysis tools calibrated to eliminate generic false alarms and highlight critical data flows.",
        activities: ["Rule tuning for specific frameworks", "Secret scanning across git commit history", "Dependency SBOM extraction"],
      },
      {
        step: "03",
        phase: "Manual Line-by-Line Code Inspection",
        title: "Expert Human Code Auditing",
        description: "Senior application security researchers manually trace complex business workflows, authorization logic, and cryptographic functions.",
        activities: ["Manual data flow tracing", "Business logic flaw verification", "Tainted sink confirmation"],
      },
      {
        step: "04",
        phase: "Remediation Snippet Engineering",
        title: "Developer Patch Crafting",
        description: "Crafting customized code patches and secure replacement patterns written specifically in your target language and framework.",
        activities: ["Code patch authoring", "Unit test recommendations", "Compensating architectural control design"],
      },
      {
        step: "05",
        phase: "Developer Walkthrough & CI/CD Guardrails",
        title: "Engineering Debrief & Guardrail Handoff",
        description: "Meeting with your engineering leads to review findings and configuring automated pre-commit hooks to prevent regression.",
        activities: ["Technical developer workshop", "Pre-commit rule configuration", "Final verified attestation report"],
      },
    ],
    deliverables: [
      {
        title: "Source Code Vulnerability Ledger",
        format: "Interactive Markdown / PDF Report",
        audience: "Lead Engineers, Application Architects",
        description: "Line-by-line vulnerability inventory with exact file paths, vulnerable code snippets, and replacement patch implementations.",
      },
      {
        title: "Software Bill of Materials (SBOM) Audit",
        format: "CycloneDX / SPDX JSON & Summary Report",
        audience: "DevOps, Compliance Officers, Security Leads",
        description: "Complete inventory of all open-source libraries, licenses, and known CVE exposures across the dependency tree.",
      },
      {
        title: "CI/CD Secure Coding Rule Pack",
        format: "Semgrep / SonarQube / GitHub Actions Rules",
        audience: "DevSecOps Engineers",
        description: "Custom detection rules that engineering teams can drop directly into their CI/CD pipelines to prevent reintroduction.",
      },
    ],
    engagementModels: [
      {
        name: "Comprehensive Pre-Release Code Audit",
        suitableFor: "Major product milestones, financial applications, and critical architectural refactors",
        description: "Full audit of the entire codebase prior to enterprise production deployment.",
      },
      {
        name: "Sprint-Based Delta Code Review",
        suitableFor: "Agile engineering teams with ongoing bi-weekly or monthly release cadences",
        description: "Focused review of pull requests, new microservices, and modified backend modules.",
      },
      {
        name: "Targeted Cryptographic & Auth Review",
        suitableFor: "Authentication services, payment gateways, and zero-knowledge architectures",
        description: "Specialized mathematical and implementation audit of security-critical subsystems.",
      },
    ],
    faqs: [
      {
        question: "How do you guarantee the confidentiality and security of our intellectual property?",
        answer: "We sign strict mutual NDAs and offer flexible access models: testing can occur on client-managed VMs, air-gapped development machines, or read-only tokens with zero local storage. Code is permanently destroyed upon engagement completion.",
      },
      {
        question: "Which programming languages and frameworks do you support?",
        answer: "We support all major languages including TypeScript/JavaScript (Node.js, React, Next.js), Python (Django, FastAPI), Java (Spring Boot), C#/.NET, Go, Rust, PHP (Laravel), C/C++, Swift, and Kotlin.",
      },
      {
        question: "How is this different from running an automated SAST tool like SonarQube or Snyk?",
        answer: "Automated SAST tools flag hundreds of false positives while completely missing complex business logic flaws, authorization bypasses (IDORs), and architectural vulnerabilities. Our senior researchers manually verify findings and construct context-specific fixes that compile cleanly.",
      },
    ],
  },
  {
    id: "cloud-security-assessment",
    slug: "cloud-security-assessment",
    title: "Cloud Security Assessment (AWS, Azure & GCP)",
    navTitle: "Cloud Security Assessment",
    badge: "Cloud-Native Infrastructure Security",
    tagline: "Prevent Account Takeovers, IAM Escalations, and Storage Bucket Exposures.",
    heroSummary:
      "Comprehensive architectural review and offensive penetration testing across Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and Kubernetes clusters. We identify privilege escalation paths, misconfigured storage, and container escape vectors.",
    promise: "Hardened Multi-Cloud Posture & Offensive Cloud Penetration Testing",
    metrics: [
      { value: "CIS", label: "Cloud Benchmarks Mapped", sub: "AWS, Azure & GCP" },
      { value: "IAM", label: "Privilege Escalation Paths", sub: "Deep graph analysis" },
      { value: "K8s", label: "Kubernetes Hardening", sub: "Pod & cluster security" },
      { value: "IaC", label: "Terraform & Pulumi Audits", sub: "Shift-left guardrails" },
    ],
    frameworks: [
      "CIS Cloud Foundations Benchmarks (AWS, Azure, GCP)",
      "NIST SP 800-145 (Cloud Computing)",
      "MITRE ATT&CK for Cloud Matrix",
      "Cloud Security Alliance (CSA) Cloud Controls Matrix",
    ],
    whyItMatters: {
      title: "Misconfigurations Cause 95% of Cloud Security Breaches",
      description:
        "Cloud breaches are rarely caused by hypervisor vulnerabilities; they stem from overly permissive IAM roles, publicly accessible storage buckets, exposed metadata services (IMDSv1), and unsegmented Kubernetes namespaces.",
      points: [
        {
          headline: "Eliminate Over-Privileged IAM Access",
          detail: "Uncover hidden permission chains that allow low-privilege service accounts to escalate themselves into full Organization Administrators.",
        },
        {
          headline: "Stop Sensitive Data Leakage from Storage",
          detail: "Audit S3 buckets, Azure Blobs, and Google Cloud Storage buckets for public read/write permissions, lack of encryption, and loose ACLs.",
        },
        {
          headline: "Secure Kubernetes & Container Workloads",
          detail: "Verify cluster RBAC, network policies, privileged container flags, and API server exposure to prevent node takeovers.",
        },
      ],
    },
    vectors: [
      {
        category: "Identity & Access Management (IAM) Attack Paths",
        description: "Mapping privilege escalation pathways across users, service accounts, IAM roles, and cross-account trust relationships.",
        capabilities: [
          "IAM privilege escalation path discovery (AssumeRole chaining)",
          "Overly permissive wildcard policies (`*` in actions/resources)",
          "Inactive credentials, unrotated access keys, and missing MFA",
          "Cross-account trust boundary audits and external access risks",
        ],
      },
      {
        category: "Storage, Database & Data Encryption Posture",
        description: "Auditing data repositories, object storage, serverless datastores, and cryptographic key management (KMS).",
        capabilities: [
          "S3 bucket / Blob storage public access configurations",
          "Database snapshot exposure & unencrypted backup volumes",
          "KMS key rotation policies and overly permissive key policies",
          "Secret management audits (AWS Secrets Manager, Azure Key Vault)",
        ],
      },
      {
        category: "Network Perimeter, VPCs & Cloud Perimeter",
        description: "Evaluating Virtual Private Clouds, Security Groups, egress filtering, and remote administration ports.",
        capabilities: [
          "Security group ingress rules open to `0.0.0.0/0` (SSH, RDP, DBs)",
          "VPC peering and transit gateway route table segmentation",
          "CloudFront / API Gateway WAF integration and DDoS resilience",
          "Instance Metadata Service v1 (IMDSv1) SSRF exploitation risk",
        ],
      },
      {
        category: "Kubernetes & Container Infrastructure (EKS, AKS, GKE)",
        description: "Inspecting cluster configurations, container runtime privileges, and network policy enforcement.",
        capabilities: [
          "Privileged container flags and hostPath volume mounts",
          "Kubernetes API server access and anonymous authentication",
          "Missing namespace network isolation policies",
          "ServiceAccount token auto-mounting and cluster-admin bindings",
        ],
      },
    ],
    lifecycle: [
      {
        step: "01",
        phase: "Multi-Cloud Scoping & Account Linking",
        title: "Read-Only Cloud Role Provisioning",
        description: "Setting up least-privilege, read-only audit roles in your cloud tenants to allow non-invasive architectural and telemetry inspection.",
        activities: ["Cross-account IAM audit role configuration", "Scope boundary sign-off", "Sensitive asset exclusion verification"],
      },
      {
        step: "02",
        phase: "Automated Posture & Benchmark Extraction",
        title: "CIS Benchmark & Inventory Sweep",
        description: "Extracting complete infrastructure state across compute, storage, networking, and identity subsystems against CIS Benchmarks.",
        activities: ["Automated configuration extraction", "IAM graph compilation", "Public storage asset inventory"],
      },
      {
        step: "03",
        phase: "Offensive Cloud Penetration Testing",
        title: "Active Cloud Privilege Escalation",
        description: "Simulating cloud adversary techniques: exploiting SSRF to query IMDS, stealing cloud credentials, and attempting IAM privilege escalation.",
        activities: ["IMDS credential exfiltration testing", "Role assume attack path exploitation", "Storage bucket ACL bypass attempts"],
      },
      {
        step: "04",
        phase: "Kubernetes & Workload Deep Dive",
        title: "Cluster Security Auditing",
        description: "Inspecting container orchestration, worker node security, secrets distribution, and ingress controller hardening.",
        activities: ["K8s RBAC audit", "Pod security admission testing", "Container image vulnerability correlation"],
      },
      {
        step: "05",
        phase: "Remediation Playbooks & IaC Fixes",
        title: "Hardening Playbooks & Terraform Templates",
        description: "Delivering ready-to-apply Terraform, CloudFormation, and CLI remediation scripts to permanently fix misconfigurations.",
        activities: ["Infrastructure-as-Code patch generation", "Architecture review with CloudOps", "Post-remediation re-audit letter"],
      },
    ],
    deliverables: [
      {
        title: "Cloud Infrastructure Security Blueprint",
        format: "Comprehensive PDF Report",
        audience: "CISO, Head of Cloud Engineering, DevOps Leads",
        description: "Detailed inventory of cloud misconfigurations categorized by risk, compliance status (CIS, NIST), and business impact.",
      },
      {
        title: "IAM Attack Path Graph & Remediation Playbook",
        format: "Visual Attack Graph + Terraform Code",
        audience: "Cloud Security Engineers, IAM Administrators",
        description: "Graph visualization of active privilege escalation vectors with drop-in least-privilege JSON/HCL policy replacements.",
      },
      {
        title: "Executive Cloud Risk Scorecard",
        format: "Executive Summary Presentation",
        audience: "CTO, VP of Infrastructure, Board",
        description: "High-level cloud security maturity scorecard with cross-cloud comparative risk benchmarks and tactical roadmaps.",
      },
    ],
    engagementModels: [
      {
        name: "Full Multi-Cloud Architectural Assessment",
        suitableFor: "Enterprises running hybrid AWS, Azure, and GCP workloads",
        description: "Comprehensive 360-degree audit of identity, storage, networking, and governance across all cloud accounts.",
      },
      {
        name: "Kubernetes & Container Hardening Review",
        suitableFor: "Microservice platforms running on EKS, AKS, GKE, or self-hosted OpenShift",
        description: "Specialized assessment focused on cluster security, pod policies, and service mesh isolation.",
      },
      {
        name: "Cloud Migration Readiness & Pre-Go-Live Audit",
        suitableFor: "Organizations migrating on-premise infrastructure into cloud environments",
        description: "Pre-production validation of cloud architecture before sensitive customer data is ingested.",
      },
    ],
    faqs: [
      {
        question: "Do we need to grant write or administrative access to our cloud environments?",
        answer: "No. The audit is conducted using strict read-only and SecurityAudit role policies provided through AWS IAM Roles, Azure Management Groups, or GCP Service Accounts, ensuring zero modification of your running workloads.",
      },
      {
        question: "Can you provide automated scripts (like Terraform) to fix identified issues?",
        answer: "Yes. Wherever applicable, our deliverables include Infrastructure-as-Code (Terraform/CloudFormation) snippets and AWS/Azure CLI commands that your DevOps team can apply to remediate misconfigurations immediately.",
      },
      {
        question: "Do you audit multi-cloud environments that use more than one provider?",
        answer: "Yes. Our team regularly audits complex multi-cloud ecosystems spanning AWS, Microsoft Azure, Google Cloud Platform, and hybrid on-premise Kubernetes environments.",
      },
    ],
  },
  {
    id: "breach-attack-simulation",
    slug: "breach-attack-simulation",
    title: "Breach & Attack Simulation (BAS)",
    navTitle: "Breach & Attack Simulation",
    badge: "Continuous Defense Validation",
    tagline: "Continuously Validate Whether Your Security Controls Stop Real Attacks.",
    heroSummary:
      "Automated and continuous validation of your entire defensive stack (EDR, SIEM, SOAR, Email Gateways, and Firewalls). We safely simulate thousands of adversary tactics in your live environment to uncover detection blind spots before adversaries do.",
    promise: "Objective, Continuous Validation of Defensive ROI",
    metrics: [
      { value: "1,000+", label: "ATT&CK Techniques Tested", sub: "Automated & controlled" },
      { value: "100%", label: "Safe Payload Execution", sub: "Zero operational downtime" },
      { value: "24/7", label: "Continuous Control Efficacy", sub: "Real-time posture tracking" },
      { value: "< 5min", label: "SOC Alert Verification", sub: "Detection pipeline latency" },
    ],
    frameworks: [
      "MITRE ATT&CK Framework",
      "NIST SP 800-53 (Security & Privacy Controls)",
      "MITRE D3FEND Matrix",
      "Cyber Kill Chain Methodology",
    ],
    whyItMatters: {
      title: "Security Tools Are Only as Good as Their Detections",
      description:
        "Enterprises spend millions on EDR, SIEM, and firewalls, yet over 70% of attacks go undetected because alert rules are misconfigured, disabled, or overwhelmed by noise.",
      points: [
        {
          headline: "Empirical Proof of Security Control Efficacy",
          detail: "Know with 100% certainty whether your endpoint protection actually detects credential dumping, memory injection, and shadow volume deletion.",
        },
        {
          headline: "Optimize SOC & SIEM Alert Fatigue",
          detail: "Tune out irrelevant alerts and focus engineering efforts on high-fidelity detection rules mapped to actual adversary techniques.",
        },
        {
          headline: "Demonstrate Continuous Cybersecurity Governance",
          detail: "Provide auditors and leadership with continuous, objective control performance graphs rather than once-a-year manual reports.",
        },
      ],
    },
    vectors: [
      {
        category: "Endpoint & EDR Telemetry Validation",
        description: "Safely executing adversary behaviors directly on enterprise endpoints to test agent response.",
        capabilities: [
          "LSASS process memory reading & credential harvesting",
          "Process hollowing and reflective DLL injection tests",
          "Registry persistence mechanism creation",
          "VSS (Volume Shadow Copy) deletion emulation",
        ],
      },
      {
        category: "Network Egress & Perimeter Exfiltration",
        description: "Testing perimeter firewall and proxy rules against covert outbound exfiltration channels.",
        capabilities: [
          "DNS tunneling and covert channel data exfiltration",
          "Encrypted egress over non-standard network ports",
          "Data exfiltration to unauthorized personal cloud storage",
          "Tor network protocol communication detection",
        ],
      },
      {
        category: "Email & Web Gateway Security Filtering",
        description: "Validating whether perimeter filtering stops weaponized attachments, malicious URLs, and zero-day lures.",
        capabilities: [
          "Inbound delivery of weaponized Office macros and PDFs",
          "Known ransomware extension attachment blocking tests",
          "Drive-by download and malicious URI filtering verification",
          "HTML smuggling and SVG payload smuggling bypass audits",
        ],
      },
      {
        category: "Lateral Movement & Identity Exploitation",
        description: "Testing whether internal segmentation and Active Directory controls prevent threat expansion.",
        capabilities: [
          "Internal SMB and WMI remote execution sweeps",
          "Pass-the-Hash and Pass-the-Ticket simulation",
          "Unconstrained Kerberos delegation exploitation checks",
          "RDP session hijacking and internal port scanning detection",
        ],
      },
    ],
    lifecycle: [
      {
        step: "01",
        phase: "Platform Deployment & Scope Integration",
        title: "Agent Deployment & Calibration",
        description: "Deploying lightweight simulation agents on representative workstations, servers, and cloud instances across network segments.",
        activities: ["Endpoint agent provisioning", "Network egress proxy integration", "Simulation schedule establishment"],
      },
      {
        step: "02",
        phase: "Automated Attack Scenario Orchestration",
        title: "Multi-Vector Attack Execution",
        description: "Continuously orchestrating hundreds of benign adversary actions mapped directly to the MITRE ATT&CK matrix.",
        activities: ["Automated kill-chain execution", "Endpoint behavior simulation", "Network traffic generation"],
      },
      {
        step: "03",
        phase: "SOC & SIEM Telemetry Correlation",
        title: "Alert Verification & Latency Tracking",
        description: "Cross-referencing executed attack timestamps with your SIEM/XDR alert logs to determine whether attacks were blocked, alerted, or missed.",
        activities: ["SIEM API log ingestion", "Detection latency analysis", "Unmonitored action classification"],
      },
      {
        step: "04",
        phase: "SIEM & EDR Rule Tuning Workshop",
        title: "Detection Engineering Optimization",
        description: "Envista detection engineers collaborate with your SOC to author and tune specific Sigma, YARA, and EDR detection rules.",
        activities: ["Sigma rule generation", "EDR behavioral policy adjustment", "False positive filtering"],
      },
      {
        step: "05",
        phase: "Executive Trend Dashboarding",
        title: "Continuous Posture Scoring",
        description: "Real-time executive dashboards illustrating resilience score trends, MITRE heatmap coverage, and return on security tool investment.",
        activities: ["Continuous score tracking", "Monthly executive summary review", "Quarterly defensive benchmark report"],
      },
    ],
    deliverables: [
      {
        title: "MITRE ATT&CK Detection Heatmap",
        format: "Interactive Navigator JSON + PDF Matrix",
        audience: "SOC Managers, Lead Detection Engineers",
        description: "Full visual coverage map showing exact detection coverage, blocked attacks, and blind spots across all MITRE tactics.",
      },
      {
        title: "Security Tool Efficacy Scorecard",
        format: "Executive Analytics Dashboard",
        audience: "CISO, Head of Infrastructure, CIO",
        description: "Quantitative scoring of individual security tool performance (e.g. CrowdStrike, Defender, Palo Alto, Splunk) demonstrating actual ROI.",
      },
      {
        title: "Custom SIEM/EDR Detection Rule Pack",
        format: "Sigma / KQL / Splunk SPL Rules",
        audience: "SOC Detection Engineers",
        description: "Production-ready query rules designed specifically to close identified telemetry gaps in your security monitoring stack.",
      },
    ],
    engagementModels: [
      {
        name: "Continuous Managed BAS (Yearly Retainer)",
        suitableFor: "Enterprises with active SOC/MDR seeking daily, continuous control validation",
        description: "Automated daily simulations with monthly detection tuning workshops led by Envista engineers.",
      },
      {
        name: "Periodic Control Efficacy Benchmark (Quarterly)",
        suitableFor: "Quarterly validation of security tools, vendor renewals, and audit compliance",
        description: "Quarterly testing cycles evaluating the resilience of endpoints, email, and network gateways.",
      },
      {
        name: "Pre-Deployment Tool Evaluation (PoC)",
        suitableFor: "Organizations evaluating competing EDR, XDR, or Next-Gen Firewall vendors",
        description: "Empirically benchmarking multiple vendors under identical adversary simulation scenarios.",
      },
    ],
    faqs: [
      {
        question: "Is Breach & Attack Simulation safe to run on production workstations and servers?",
        answer: "Yes. BAS simulations safely mimic the behavioral techniques of malware (such as process injection or credential reading) using controlled, synthetic payloads that contain zero harmful or destructive payloads. Operations run completely uninterrupted.",
      },
      {
        question: "How does BAS complement traditional Penetration Testing and Red Teaming?",
        answer: "Penetration testing and Red Teaming are point-in-time, human-led creative engagements. BAS operates 24/7/365 as an automated, programmatic baseline to ensure that defenses don't degrade between manual tests.",
      },
      {
        question: "Does BAS integrate with our existing SIEM and EDR platforms?",
        answer: "Yes. Our platform integrates seamlessly via native APIs with Microsoft Sentinel, Splunk, CrowdStrike Falcon, Defender for Endpoint, SentinelOne, Palo Alto Networks, and IBM QRadar.",
      },
    ],
  },
];

export function getOffensiveServiceBySlug(slug: string): OffensiveSubService | undefined {
  const clean = slug.toLowerCase().trim();
  return (
    OFFENSIVE_SERVICES.find((s) => s.slug === clean || s.id === clean) ||
    OFFENSIVE_SERVICES.find(
      (s) =>
        s.slug.replace(/-services$/, "") === clean.replace(/-services$/, "") ||
        s.id.replace(/-services$/, "") === clean.replace(/-services$/, "")
    )
  );
}

export function getAllOffensiveServices(): OffensiveSubService[] {
  return OFFENSIVE_SERVICES;
}

