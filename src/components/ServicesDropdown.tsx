import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  CaretDown,
  CaretRight,
  Cpu,
  Crosshair,
  GraduationCap,
  LockKey,
  Scales,
  ShieldCheck,
} from "@phosphor-icons/react";
import { CAPABILITIES } from "../data";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  offensive: <Crosshair size={17} weight="duotone" />,
  defensive: <ShieldCheck size={17} weight="duotone" />,
  grc: <Scales size={17} weight="duotone" />,
  dpdp: <LockKey size={17} weight="duotone" />,
  training: <GraduationCap size={17} weight="duotone" />,
  ai: <Cpu size={17} weight="duotone" />,
};

const ALL_SUB_SLUGS: Record<string, Record<string, string>> = {
  offensive: {
    "Red Teaming Services": "red-teaming-services",
    "Vulnerability Assessment": "vulnerability-assessment",
    "Penetration Testing Services": "penetration-testing-services",
    "Phishing Simulation Services": "phishing-simulation-services",
    "Secure Code Review Services": "secure-code-review-services",
    "Cloud Security Assessment": "cloud-security-assessment",
    "Breach & Attack Simulation": "breach-attack-simulation",
  },
  defensive: {
    "Managed Detection & Response": "managed-detection-and-response",
    "Threat Hunting Services": "threat-hunting-services",
    "Threat Intelligence Services": "threat-intelligence-services",
    "Disaster Recovery Consulting": "disaster-recovery-consulting",
    "Brand Risk & Dark Web Monitoring": "brand-risk-and-dark-web-monitoring",
  },
  grc: {
    "Cybersecurity Audit Services": "cybersecurity-audit-services",
    "Virtual CISO Services": "virtual-ciso-services",
    "ISO 27001 Consulting": "iso-27001-consulting",
    "SOC Certification Services (SOC 1 2 & 3)": "soc-certification-services",
    "SEBI CSCRF Consulting": "sebi-cscrf-consulting",
    "TPRA & TPRM Services": "tpra-and-tprm-services",
  },
  dpdp: {
    "Data Protection Impact Assessment": "data-protection-impact-assessment",
    "Virtual DPO": "virtual-dpo",
    "Consent Management Tool": "consent-management-tool",
    "Contract Review & Data Processing Agreements": "contract-review-dpa",
    Consulting: "dpdp-consulting",
    "Advisory & Audit": "dpdp-advisory-audit",
    "Training Programs for DPDPA Compliance": "dpdpa-training-programs",
  },
  training: {
    "Expert-led training in Data Analytics": "data-analytics-training",
    "Data Privacy and Cybersecurity awareness.": "data-privacy-cybersecurity-awareness",
  },
  ai: {
    "AI system audits and risk assessments ensuring ethical": "ai-system-audits-risk-assessment",
    "secure AI deployment.": "secure-ai-deployment",
  },
};

const CATEGORY_HOVER_STYLES: Record<string, { dot: string; hoverText: string; hoverBg: string }> = {
  offensive: {
    dot: "bg-[#B4FF00]",
    hoverText: "hover:text-slate-950 dark:hover:text-[#B4FF00]",
    hoverBg: "hover:bg-lime-500/15",
  },
  defensive: {
    dot: "bg-sky-400",
    hoverText: "hover:text-slate-950 dark:hover:text-sky-300",
    hoverBg: "hover:bg-sky-500/15",
  },
  grc: {
    dot: "bg-purple-400",
    hoverText: "hover:text-slate-950 dark:hover:text-purple-300",
    hoverBg: "hover:bg-purple-500/15",
  },
  dpdp: {
    dot: "bg-emerald-400",
    hoverText: "hover:text-slate-950 dark:hover:text-emerald-300",
    hoverBg: "hover:bg-emerald-500/15",
  },
  training: {
    dot: "bg-amber-400",
    hoverText: "hover:text-slate-950 dark:hover:text-amber-300",
    hoverBg: "hover:bg-amber-500/15",
  },
  ai: {
    dot: "bg-rose-400",
    hoverText: "hover:text-slate-950 dark:hover:text-rose-300",
    hoverBg: "hover:bg-rose-500/15",
  },
};

export function getSubserviceUrl(serviceId: string, itemTitle: string): string {
  const catMap = ALL_SUB_SLUGS[serviceId];
  if (catMap && catMap[itemTitle]) {
    return `/services/${serviceId}/${catMap[itemTitle]}`;
  }
  const clean = itemTitle
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `/services/${serviceId}/${clean}`;
}

export function ServicesDropdownTrigger({
  isOpen,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: {
  isOpen: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-expanded={isOpen}
      aria-haspopup="true"
      className={`group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13.5px] font-medium transition-all duration-200 cursor-pointer ${
        isOpen
          ? "bg-violet-600/10 text-violet-700 font-semibold ring-1 ring-violet-500/25 dark:bg-violet-500/20 dark:text-[#c4b5fd] dark:ring-violet-400/30"
          : "text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
      }`}
    >
      <span>Services</span>
      <CaretDown
        size={13}
        weight="bold"
        className={`transition-transform duration-200 ${
          isOpen ? "rotate-180 text-violet-600 dark:text-[#a78bfa]" : "opacity-60 group-hover:translate-y-0.5 group-hover:opacity-100"
        }`}
        aria-hidden="true"
      />
    </button>
  );
}

export default function ServicesDropdown({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      role="menu"
      aria-label="Services Navigation"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="pointer-events-auto absolute inset-x-0 top-[calc(100%+0.5rem)] z-50 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-2xl transition-all duration-200 dark:border-slate-800 dark:bg-[#0c0e1c] animate-in fade-in slide-in-from-top-2 before:absolute before:-top-4 before:inset-x-0 before:h-4 before:content-[''] max-h-[calc(100vh-5.5rem)] overflow-y-auto"
    >
      {/* Subtle top indicator bar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#6d28d9] to-transparent opacity-80 dark:via-[#a78bfa]" />

      <div className="mx-auto max-w-[1360px] px-4 py-3.5 sm:px-6 sm:py-4">
        {/* Header Eyebrow */}
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5 mb-3.5 dark:border-white/10">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-violet-600 dark:bg-violet-400 animate-pulse shrink-0" />
            <span className="font-mono text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#6d28d9] dark:text-[#a78bfa]">
              CYBER SECURITY SERVICES FOR FUTURE-DRIVEN BUSINESSES
            </span>
          </div>
          <Link
            to="/capabilities"
            onClick={onClose}
            className="font-mono text-[11px] sm:text-xs font-bold text-violet-700 hover:text-violet-900 dark:text-violet-300 dark:hover:text-white inline-flex items-center gap-1 shrink-0 group"
          >
            <span>View All Services</span>
            <ArrowRight size={11} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* 6 Core Services Grid: 6 columns on desktop so all 6 are visible in ONE row without cutting off */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {CAPABILITIES.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 transition-all duration-200 hover:border-[#B4FF00] hover:shadow-[0_8px_24px_rgba(180,255,0,0.2)] dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-[#B4FF00] dark:hover:bg-lime-500/10"
            >
              {/* Top Glowing Hairline */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#B4FF00] to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

              <div>
                {/* Header Link */}
                <Link
                  to={`/capabilities#${service.id}`}
                  onClick={onClose}
                  className="block group/hdr"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-lime-500/10 text-lime-700 dark:bg-lime-500/20 dark:text-[#B4FF00] transition-colors group-hover/hdr:bg-[#B4FF00] group-hover/hdr:text-slate-950">
                      {SERVICE_ICONS[service.id] || <ShieldCheck size={16} weight="duotone" />}
                    </div>
                  </div>

                  <h3 className="mt-2 font-display text-[13px] font-bold text-slate-900 group-hover/hdr:text-lime-800 dark:text-white dark:group-hover/hdr:text-[#B4FF00] transition-colors leading-tight">
                    {service.title}
                  </h3>

                  <p className="mt-0.5 font-mono text-[9.5px] font-semibold text-lime-700 dark:text-[#B4FF00] uppercase tracking-wide">
                    {service.promise}
                  </p>
                </Link>

                {/* Sub-services list: all items are dedicated interactive Links! */}
                <div className="mt-2 border-t border-slate-200/70 pt-2 dark:border-white/10">
                  <ul className="space-y-0.5 text-[10.5px] text-slate-700 dark:text-slate-300">
                    {service.items.map((item) => {
                      const itemUrl = getSubserviceUrl(service.id, item);
                      const style = CATEGORY_HOVER_STYLES[service.id] || CATEGORY_HOVER_STYLES.offensive;
                      return (
                        <li key={item}>
                          <Link
                            to={itemUrl}
                            onClick={onClose}
                            className={`group/sub block rounded px-1.5 py-1 -mx-1.5 transition-all duration-150 ${style.hoverBg}`}
                          >
                            <div className="flex items-start gap-1.5 leading-snug">
                              <span
                                className={`mt-1.5 h-1 w-1 shrink-0 rounded-full transition-transform group-hover/sub:scale-150 ${style.dot}`}
                              />
                              <span className={`group-hover/sub:translate-x-0.5 transition-transform ${style.hoverText}`}>
                                {item}
                              </span>
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-slate-200/60 pt-2 dark:border-white/10">
                <span className="font-mono text-[9px] font-semibold text-slate-400 dark:text-slate-500 uppercase">
                  {service.items.length} Offerings
                </span>
                <Link
                  to={`/capabilities#${service.id}`}
                  onClick={onClose}
                  className="inline-flex items-center gap-1 text-[10.5px] font-bold text-lime-700 dark:text-[#B4FF00] group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Explore</span>
                  <ArrowRight size={10} weight="bold" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MobileServicesAccordion({ onItemClick }: { onItemClick: () => void }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-slate-200/60 pb-2 dark:border-white/10">
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        className="flex w-full items-center justify-between py-2.5 text-sm font-semibold text-[#0d1020] dark:text-white cursor-pointer"
      >
        <span>Services</span>
        <CaretDown
          size={14}
          className={`transition-transform duration-200 ${expanded ? "rotate-180 text-violet-600 dark:text-[#a78bfa]" : ""}`}
        />
      </button>

      {expanded && (
        <div className="space-y-2 pl-1 pt-1 pb-3">
          {CAPABILITIES.map((service) => (
            <div
              key={service.id}
              className="rounded-xl border border-slate-200/70 bg-slate-50/70 p-3 dark:border-white/10 dark:bg-white/[0.02]"
            >
              <Link
                to={`/capabilities#${service.id}`}
                onClick={onItemClick}
                className="flex items-center justify-between font-semibold text-slate-900 dark:text-white"
              >
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">{service.title}</span>
                  <span className="font-mono text-[10px] font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wide">
                    {service.promise}
                  </span>
                </div>
                <CaretRight size={13} className="text-slate-400 shrink-0" />
              </Link>
              <ul className="mt-2 space-y-1 border-t border-slate-200/60 pt-2 text-[11px] text-slate-600 dark:text-slate-300">
                {service.items.map((item) => {
                  const itemUrl = getSubserviceUrl(service.id, item);
                  const style = CATEGORY_HOVER_STYLES[service.id] || CATEGORY_HOVER_STYLES.offensive;
                  return (
                    <li key={item}>
                      <Link
                        to={itemUrl}
                        onClick={onItemClick}
                        className={`flex items-start gap-1.5 py-1 px-1 rounded ${style.hoverBg} text-slate-700 dark:text-slate-200 ${style.hoverText}`}
                      >
                        <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${style.dot}`} />
                        <span>{item}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
