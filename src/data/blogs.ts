import amitUrl from "../imports/amitkumar-clean.jpg"
import dipikaUrl from "../imports/dipika-bisawa.png"
import yashodhanUrl from "../imports/yashodhan_headshot.jpg"
import prajhotUrl from "../imports/prajhot-naik.png"

export interface Author {
  name: string
  role: string
  avatar?: string
  initials: string
  linkedin?: string
}

export interface BlogCallout {
  type: "takeaway" | "warning" | "note"
  title: string
  text: string
}

export interface BlogSection {
  heading?: string
  paragraphs: string[]
  bulletPoints?: string[]
  callout?: BlogCallout
  quote?: {
    text: string
    author?: string
  }
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  subtitle?: string
  excerpt: string
  category: string
  tags: string[]
  author: Author
  publishedAt: string
  isoDate: string
  readTime: string
  featured?: boolean
  published: boolean
  sections: BlogSection[]
  seo: {
    metaTitle: string
    metaDescription: string
    keywords: string[]
  }
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "dpdp-readiness-blueprint",
    slug: "navigating-dpdp-act-readiness-india",
    title:
      "Navigating DPDP Act Readiness: An Architectural Blueprint for Indian Enterprises",
    subtitle:
      "Moving beyond checklist compliance to verifiable consent architectures and proactive breach mitigation.",
    excerpt:
      "A structured architectural guide for CISOs and compliance leaders on data flow mapping, purpose limitation controls, and board-level assurance under India's Digital Personal Data Protection Act.",
    category: "DPDP & Compliance",
    tags: [
      "DPDP Act",
      "Privacy Governance",
      "Data Mapping",
      "Regulatory Assurance",
    ],
    author: {
      name: "DIPIKA BISAWA",
      role: "Executive Director, CHRO & Advisory Board Member",
      avatar: dipikaUrl,
      initials: "DB",
      linkedin: "https://www.linkedin.com/in/dipika-bisawa-0a9a211a/",
    },
    publishedAt: "Oct 24, 2026",
    isoDate: "2026-10-24",
    readTime: "7 min read",
    featured: true,
    published: true,
    sections: [
      {
        heading: "The Shift from Checkbox Compliance to Verifiable Posture",
        paragraphs: [
          "India's Digital Personal Data Protection (DPDP) Act marks a fundamental inflection point in how enterprises handle personal information. For years, organizational privacy was managed as a paper exercise—annual audits, signed policy acknowledgments, and templated privacy disclaimers buried at the foot of digital properties.",
          "Under the DPDP regime, compliance is measured not by written policies, but by architectural reality. If a Data Principal withdraws consent or asks what digital identifiers are stored across downstream microservices, the organization must provide evidenced answers, not assurances.",
        ],
        callout: {
          type: "takeaway",
          title: "Core Architectural Principle",
          text: "True DPDP readiness requires synchronizing your Data Inventory, Consent Management Engine, and Third-Party Risk Assessment into a continuous feedback loop rather than a static document registry.",
        },
      },
      {
        heading: "1. Data Inventory & Automated Lineage Mapping",
        paragraphs: [
          "Most enterprise data sprawl begins in legacy data lakes, staging databases, and unmonitored third-party SaaS integrations. Before an organization can fulfill rights or execute erasure requests, it must catalog every ingestion point.",
          "At Envista Cyber Defence, our DPDP readiness framework begins by tracing data flows from the perimeter (APIs, web applications, mobile SDKs) down to relational stores, log aggregators, and vendor pipelines. Discovering shadow stores is often where 70% of unidentified compliance liabilities reside.",
        ],
        bulletPoints: [
          "Classify all structured and unstructured datasets containing Personal Identifiable Information (PII).",
          "Map cross-border data transfer corridors against evolving regulatory white-lists.",
          "Identify orphaned test/QA environments retaining sanitized or unsanitized production customer data.",
          "Establish automated schema listeners to flag unexpected schema additions containing citizen identifiers.",
        ],
      },
      {
        heading:
          "2. Consent Architecture: Itemized, Notice-Driven, and Revocable",
        paragraphs: [
          "The DPDP framework mandates unambiguous, affirmative consent provided in plain language, with multilingual support where required. Bundled terms and pre-ticked opt-in boxes are obsolete.",
          "Engineering a modern consent layer requires decoupling identity authentication from consent telemetry. When a user withdraws consent for marketing analytics while maintaining active transactional accounts, event buses must propagate the withdrawal signal across your telemetry and CDP platforms within hours.",
        ],
      },
      {
        heading: "3. Breach Notification within Stringent Incident Timelines",
        paragraphs: [
          "Unlike legacy reporting norms that permitted days of forensic contemplation before regulatory engagement, DPDP mandates rapid, structured disclosure to both the Data Protection Board of India and affected principals.",
          "This requirement exposes an acute dependency: your Security Operations Center (SOC) playbooks must integrate directly with legal and privacy response workflows. An incident classification made at 02:00 AM by a tier-1 SOC analyst must seamlessly trigger regulatory assessment triage without manual friction.",
        ],
        quote: {
          text: "When a breach occurs, the regulatory penalty is determined not only by the intrusion itself, but by whether the enterprise demonstrated defensible due care and proactive containment controls.",
          author: "Amitkumar More, CEO & Founder, Envista Cyber Defence",
        },
      },
      {
        heading: "Strategic Next Steps for Leadership",
        paragraphs: [
          "Enterprise leaders should avoid treating DPDP readiness as an isolated IT project. It demands direct collaboration across cybersecurity, engineering, human resources, and board-level risk committees. Establishing a fractional Data Protection Officer (DPO) or retaining an adversary-grade advisory partner provides the continuous oversight needed to withstand regulatory scrutiny.",
        ],
      },
    ],
    seo: {
      metaTitle: "Navigating DPDP Act Readiness for Indian Enterprises",
      metaDescription:
        "An architectural roadmap for CISOs and compliance leaders to build verifiable consent, data lineage mapping, and DPDP readiness in India.",
      keywords: [
        "DPDP Act",
        "Data Protection India",
        "Privacy Compliance",
        "CISO Strategy",
        "Consent Architecture",
      ],
    },
  },
  {
    id: "adversary-emulation-vs-pentesting",
    slug: "adversary-emulation-vs-penetration-testing",
    title:
      "Adversary Emulation vs Traditional Pen Testing: Why Crown-Jewel Attacks Need Living-off-the-Land Simulation",
    subtitle:
      "Why automated vulnerability scans miss lateral movement, and how full-chain emulation uncovers real risk.",
    excerpt:
      "Automated vulnerability scans report hundreds of CVEs, but attackers don't care about CVE tallies—they care about paths to crown jewels. Here is how goal-based adversary emulation transforms enterprise defense.",
    category: "Offensive Security",
    tags: [
      "Red Teaming",
      "Adversary Emulation",
      "Penetration Testing",
      "MITRE ATT&CK",
    ],
    author: {
      name: "YASHODHAN RAJAPKAR",
      role: "Offensive Security Intern",
      avatar: yashodhanUrl,
      initials: "YR",
      linkedin: "https://www.linkedin.com/in/yashodhan-rajapkar-807014284/",
    },
    publishedAt: "Oct 18, 2026",
    isoDate: "2026-10-18",
    readTime: "6 min read",
    featured: false,
    published: true,
    sections: [
      {
        heading: "The Flaw in Point-in-Time Vulnerability Scanning",
        paragraphs: [
          "Many enterprise security programs celebrate clean quarterly vulnerability reports: zero critical CVEs on perimeter bastion hosts, green checkboxes across patched web servers, and an automated Nessus report cleanly filed away for compliance.",
          "Yet, when actual ransomware syndicates or state-sponsored advanced persistent threats (APTs) target an organization, they rarely rely on loud, unpatched CVSS 9.8 remote code execution exploits on external gateways. Instead, they exploit legitimate administrative tooling, weak service account privileges, and stolen session tokens—a technique known as Living off the Land (LotL).",
        ],
        callout: {
          type: "warning",
          title: "The Vulnerability Illusion",
          text: "A system with zero unpatched vulnerabilities can still be completely compromised in minutes if trust relationships and identity federation permit lateral privilege escalation.",
        },
      },
      {
        heading: "Deconstructing the Differences",
        paragraphs: [
          "Traditional penetration testing answers the question: 'What vulnerabilities exist in this specific application or network segment?' It is bounded by a strict scope and aims for breadth over depth.",
          "Adversary emulation, conversely, answers the question: 'Can a motivated adversary reach our core database, SWIFT financial transaction pipeline, or proprietary source code repository from an arbitrary initial access point?' It tests human detection capabilities, SIEM correlation rules, and the operational friction an attacker encounters.",
        ],
        bulletPoints: [
          "Scope: Pen testing tests an asset; adversary emulation tests an entire organization's defensive posture.",
          "Techniques: Pen tests flag misconfigurations; emulation chains multi-stage LotL techniques, AMSI bypasses, and credential harvesting.",
          "Detection Validation: Emulation actively evaluates whether your SOC detected the staging phase or was blindsided until exfiltration.",
        ],
      },
      {
        heading:
          "Adversary TTPs in the Modern Cloud and Active Directory Estate",
        paragraphs: [
          "During Envista offensive engagements, our red teams frequently chain identity misconfigurations that look entirely benign on paper: an internal developer account with read permissions over an S3 backup bucket, containing an exposed service principal secret with permission to impersonate an Entra ID Application Administrator.",
          "No commercial vulnerability scanner flags this as a critical bug, because each individual component works exactly as configured. Only contextual, multi-stage adversary emulation exposes the path that leads straight to full cloud tenant takeover.",
        ],
        quote: {
          text: "Attackers think in graphs; defenders think in lists. Until defenders model their posture as interconnected paths, attackers will always win.",
          author: "Envista Offensive Security Operations",
        },
      },
      {
        heading: "Building Resilience: The Purple Teaming Bridge",
        paragraphs: [
          "The true value of adversary emulation is not in handing over a 200-page exploit report. It lies in Purple Teaming: sitting side-by-side with the client's internal Blue Team to craft custom behavioral detections for every technique executed. When offensive engineers demonstrate the exact telemetry generated by an evasion tactic, blue teams can tune EDR sensors in real time.",
        ],
      },
    ],
    seo: {
      metaTitle: "Adversary Emulation vs Pen Testing | Envista Cyber Defence",
      metaDescription:
        "Understand the critical difference between automated penetration testing and goal-based adversary emulation across cloud and enterprise estates.",
      keywords: [
        "Adversary Emulation",
        "Penetration Testing",
        "Red Team",
        "Offensive Security",
        "Cybersecurity",
      ],
    },
  },
  {
    id: "ai-threat-vectors-enterprise-llm",
    slug: "ai-threat-vectors-in-enterprise-infrastructure",
    title:
      "Securing the Cognitive Attack Surface: Threat Vectors in Enterprise LLM Deployments",
    subtitle:
      "From indirect prompt injections to RAG data poisoning: auditing model safety in production workflows.",
    excerpt:
      "As generative AI and autonomous agent frameworks enter core enterprise workflows, traditional perimeter security falls short. Here is our audit framework for securing enterprise LLM pipelines.",
    category: "AI Security",
    tags: [
      "AI Security",
      "LLM Safety",
      "Prompt Injection",
      "Model Governance",
      "RAG Security",
    ],
    author: {
      name: "AMITKUMAR MORE",
      role: "Founder & Chief Executive Officer",
      avatar: amitUrl,
      initials: "AM",
      linkedin: "https://www.linkedin.com/in/amitkumarmore/",
    },
    publishedAt: "Oct 12, 2026",
    isoDate: "2026-10-12",
    readTime: "8 min read",
    featured: false,
    published: true,
    sections: [
      {
        heading:
          "The New Frontier: Probabilistic Systems in Deterministic Environments",
        paragraphs: [
          "Enterprise cybersecurity has spent three decades hardening deterministic computing: if a packet matches rule X, drop it; if a user lacks role Y, deny access. The rapid adoption of Large Language Models (LLMs) and autonomous agents breaks this foundation.",
          "When you introduce natural language processing engines into customer support, internal document search, and ERP automation, your attack surface transitions from rigid syntax to malleable semantics. An attacker no longer needs an SQL injection vulnerability when they can persuade an agent with database privileges to execute queries on their behalf.",
        ],
        callout: {
          type: "takeaway",
          title: "The Inherent Semantic Vulnerability",
          text: "In LLM architectures, data and control instructions travel across the exact same channel. Without strict isolation, natural language inputs can hijack system-level execution contexts.",
        },
      },
      {
        heading: "Critical Threat Vectors in Enterprise Deployments",
        paragraphs: [
          "Through Envista's AI Security Audits and adversarial red teaming engagements, we have categorized the primary exploitation pathways organizations face today:",
        ],
        bulletPoints: [
          "Indirect Prompt Injection: Malicious instructions embedded inside external emails, PDF attachments, or web crawls that force the model to exfiltrate private context.",
          "Retrieval-Augmented Generation (RAG) Poisoning: Injecting falsified advisory notes into vector databases, skewing legal or financial model outputs.",
          "Insecure Plugin and Function Execution: Providing models with broad database write privileges without requiring deterministic human-in-the-loop validation.",
          "Training & Fine-Tuning Data Leakage: Extraction of proprietary trade secrets, customer PII, or internal credentials embedded in fine-tuning weights.",
        ],
      },
      {
        heading: "Engineering a Defense-in-Depth AI Architecture",
        paragraphs: [
          "Securing cognitive infrastructure cannot be solved with a simple regex filter or prompt disclaimer. It demands defense-in-depth engineering spanning input guardrails, output sanitizer proxies, and least-privilege token permissions.",
          "For example, any agentic system with authority to make external API calls or initiate database transactions must operate under cryptographic authorization constraints. The model's natural language intent must be validated by a separate deterministic policy engine before any transaction commit occurs.",
        ],
        quote: {
          text: "You wouldn't grant an untrusted contractor unvetted root access to your core ERP. Never grant an autonomous AI agent unchecked administrative tools without boundary isolation.",
          author: "Amitkumar More, CEO, Envista Cyber Defence",
        },
      },
      {
        heading: "The Road to AI Regulatory Assurance",
        paragraphs: [
          "With emerging global AI governance standards and India's evolving technological safeguards, enterprises must build defensible audit trails for every algorithmic decision. Model cards, red-teaming benchmarks, and continuous adversarial telemetry are fast becoming mandatory board-level disclosures.",
        ],
      },
    ],
    seo: {
      metaTitle: "Securing Enterprise AI & LLMs: Threat Vectors & Auditing",
      metaDescription:
        "Comprehensive guide to securing enterprise LLM deployments against prompt injection, RAG poisoning, and agent privilege escalation.",
      keywords: [
        "AI Security",
        "LLM Security",
        "Prompt Injection",
        "RAG Poisoning",
        "AI Audit",
      ],
    },
  },
  {
    id: "brand-risk-dark-web-monitoring",
    slug: "brand-risk-and-dark-web-monitoring-defence",
    title:
      "Beyond Perimeter Defences: Operationalizing Brand Risk & Dark Web Telemetry",
    subtitle:
      "Combating credential harvesting, lookalike domains, and infostealer malware logs before breach execution.",
    excerpt:
      "Modern cybercriminals weaponize corporate credentials weeks before attempting breach access. Discover how continuous dark web intelligence and automated domain takedowns protect enterprise capital.",
    category: "Defensive Operations",
    tags: [
      "Dark Web Monitoring",
      "Brand Protection",
      "Threat Intelligence",
      "Infostealer Malware",
    ],
    author: {
      name: "PRAJHOT P NAIK",
      role: "Senior Manager, Threat Operations",
      avatar: prajhotUrl,
      initials: "PN",
      linkedin: "https://www.linkedin.com/in/prajhot-pnaik/",
    },
    publishedAt: "Sep 29, 2026",
    isoDate: "2026-09-29",
    readTime: "5 min read",
    featured: false,
    published: true,
    sections: [
      {
        heading: "The Explosion of the Infostealer Ecosystem",
        paragraphs: [
          "Over the past eighteen months, the primary vector for corporate initial access has shifted dramatically away from complex phishing kits toward commodity infostealer malware: RedLine, Lumma, Vidar, and Racoon.",
          "These stealers infect employee personal devices, third-party contractor machines, and home workstations. When an infostealer executes, it extracts active browser session cookies, VPN credentials, cloud console sessions, and single sign-on (SSO) tokens, packaging them into 'logs' sold in bulk across underground Telegram channels and dark web bazaars.",
        ],
        callout: {
          type: "warning",
          title: "Session Token Hijacking Bypass MFA",
          text: "Attackers who purchase active session cookie archives do not need your employee's password or their multi-factor authentication (MFA) prompt. They simply inject the cookie and walk past authentication gates.",
        },
      },
      {
        heading: "Automating Early-Warning Brand Risk Detection",
        paragraphs: [
          "Waiting for an intruder to trigger an internal network alert is a losing strategy. By the time an unauthorized IP logs into an enterprise SaaS application using valid credentials, the blast radius is already expanding.",
          "Envista's Brand Risk & Dark Web Monitoring service (BRM/DWM) continuously indexes illicit forums, private hacker channels, and leaked paste sites. When an enterprise domain identifier appears in newly dumped log archives, the system triggers automated invalidation alerts:",
        ],
        bulletPoints: [
          "Real-time session cookie invalidation for compromised corporate identities.",
          "Continuous scanning for deceptive lookalike typosquat domains targeting clients and staff.",
          "Rapid evidence compilation and legal takedown notices executed across international registrars.",
          "Monitoring illicit credit card dumps and executive personal data exposure.",
        ],
      },
      {
        heading: "From Reactive Notification to Active Takedown",
        paragraphs: [
          "Information without action is noise. The key differentiator in modern dark web defense is the speed of operational remediation. Detecting a fraudulent phishing clone of your customer banking portal is only half the battle; issuing an authoritative takedown that severs DNS resolution within hours is what saves your brand reputation.",
        ],
      },
    ],
    seo: {
      metaTitle: "Brand Risk & Dark Web Monitoring Defence | Envista",
      metaDescription:
        "Learn how continuous dark web intelligence, infostealer log monitoring, and swift domain takedowns protect modern organizations from credential attacks.",
      keywords: [
        "Dark Web Monitoring",
        "Brand Protection",
        "Infostealer",
        "Threat Intelligence",
        "Cyber Defense",
      ],
    },
  },
  {
    id: "fractional-vciso-governance-playbook",
    slug: "fractional-virtual-ciso-governance",
    title:
      "The Fractional vCISO Model: Establishing Board-Level Governance Without Full-Time Headcount",
    subtitle:
      "How scaling enterprises access executive cybersecurity leadership and audit assurance on demand.",
    excerpt:
      "Full-time CISO talent is scarce and expensive, but regulatory pressure doesn't pause for talent gaps. How a fractional Virtual CISO delivers strategic direction, ISO 27001 readiness, and executive peace of mind.",
    category: "Governance & Risk",
    tags: [
      "Virtual CISO",
      "vCISO",
      "Cyber Governance",
      "ISO 27001",
      "Board Advisory",
    ],
    author: {
      name: "AMITKUMAR MORE",
      role: "Founder & Chief Executive Officer",
      avatar: amitUrl,
      initials: "AM",
      linkedin: "https://www.linkedin.com/in/amitkumarmore/",
    },
    publishedAt: "Sep 15, 2026",
    isoDate: "2026-09-15",
    readTime: "6 min read",
    featured: false,
    published: true,
    sections: [
      {
        heading: "The Executive Cybersecurity Talent Dilemma",
        paragraphs: [
          "In today's regulatory climate, mid-market enterprises, fintech innovators, and healthcare organizations face the same compliance burdens as multi-billion dollar conglomerates. Regulators, enterprise clients, and cyber insurance underwriters demand structured oversight led by a qualified Chief Information Security Officer (CISO).",
          "However, retaining a full-time, seasoned executive CISO demands significant compensation, equity allocation, and protracted search cycles. For many organizations between 100 and 5,000 employees, what is needed is not a 40-hour-per-week administrator, but authoritative strategic direction, board advisory, and audit-proven control design.",
        ],
        callout: {
          type: "note",
          title: "The vCISO Advantage",
          text: "A Virtual CISO provides seasoned leadership who has overseen dozens of audits, incidents, and transformations—delivering enterprise maturity at a fraction of full-time executive cost.",
        },
      },
      {
        heading: "What a Virtual CISO Actually Delivers",
        paragraphs: [
          "An effective vCISO engagement is structured around strategic milestones and operational governance:",
        ],
        bulletPoints: [
          "Security Roadmap & Risk Quantification: Translating technical vulnerabilities into quantifiable business impact for board presentations.",
          "Regulatory & Audit Assurance: Leading ISO 27001:2022, SOC 2 Type II, and SEBI CSCRF certification workflows from readiness through final defense.",
          "Vendor & Third-Party Risk Management: Evaluating external software partners and cloud providers to prevent supply-chain compromise.",
          "Incident Response Command: Acting as the designated incident commander in the event of an operational crisis, coordinating legal, forensics, and communications.",
        ],
      },
      {
        heading: "Bridging the Gap Between Engineering and the Boardroom",
        paragraphs: [
          "The greatest challenge technical teams face is communicating risk to non-technical directors. When engineers request budget for EDR upgrades or cloud posture tooling, executive committees often see an IT expense rather than business continuity.",
          "A seasoned vCISO translates technical telemetry into fiduciary language: risk reduction metrics, compliance liability avoidance, and client deal enablement. With Envista's vCISO advisory, organizations transform security from a cost center into a competitive differentiator that accelerates enterprise sales.",
        ],
      },
    ],
    seo: {
      metaTitle:
        "The Fractional vCISO Model for Enterprise Governance | Envista",
      metaDescription:
        "How mid-market and scaling enterprises establish board-level cybersecurity governance, ISO 27001 readiness, and audit resilience with a Virtual CISO.",
      keywords: [
        "Virtual CISO",
        "vCISO",
        "Cybersecurity Governance",
        "ISO 27001",
        "Compliance",
      ],
    },
  },
]

// Helper functions for easy querying and dynamic page rendering

export function getPublishedBlogPosts(): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.published !== false).sort(
    (a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime(),
  )
}

export function getFeaturedBlogPost(): BlogPost | undefined {
  const published = getPublishedBlogPosts()
  return published.find((p) => p.featured) || published[0]
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  if (!slug) return undefined
  const cleanSlug = slug.trim().toLowerCase()
  return BLOG_POSTS.find(
    (post) => post.slug.toLowerCase() === cleanSlug && post.published !== false,
  )
}

export function getRelatedBlogPosts(
  currentSlug: string,
  count = 3,
): BlogPost[] {
  const published = getPublishedBlogPosts()
  const current = getBlogPostBySlug(currentSlug)
  if (!current) return published.slice(0, count)

  // Match same category first, excluding the current post
  const sameCategory = published.filter(
    (p) => p.slug !== current.slug && p.category === current.category,
  )
  const others = published.filter(
    (p) => p.slug !== current.slug && p.category !== current.category,
  )

  return [...sameCategory, ...others].slice(0, count)
}

export function getAllBlogCategories(): string[] {
  const published = getPublishedBlogPosts()
  const categories = Array.from(new Set(published.map((p) => p.category)))
  return ["All", ...categories]
}
