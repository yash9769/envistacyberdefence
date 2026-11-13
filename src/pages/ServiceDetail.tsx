import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  CaretDown,
  CaretRight,
  CheckCircle,
  Cpu,
  Crosshair,
  FileText,
  GraduationCap,
  LockKey,
  Scales,
  ShieldCheck,
  ShieldWarning,
  Sparkle,
  TerminalWindow,
  WarningCircle,
} from "@phosphor-icons/react";
import {
  getSubserviceData,
  getSubservicesByCategory,
  getAllSubservices,
  type SubServiceDetail,
} from "../data/allServicesData";
import { Btn, Eyebrow } from "../components/ui";

const WRAP = "mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  offensive: <Crosshair size={15} weight="bold" />,
  defensive: <ShieldCheck size={15} weight="bold" />,
  grc: <Scales size={15} weight="bold" />,
  dpdp: <LockKey size={15} weight="bold" />,
  training: <GraduationCap size={15} weight="bold" />,
  ai: <Cpu size={15} weight="bold" />,
};

const CATEGORY_ACCENT: Record<
  string,
  {
    themeColor: string;
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    glowColor: string;
    heroGlow: string;
  }
> = {
  offensive: {
    themeColor: "#B4FF00",
    badgeBg: "bg-lime-500/10",
    badgeText: "text-[#B4FF00]",
    badgeBorder: "border-lime-500/30",
    glowColor: "rgba(180,255,0,0.35)",
    heroGlow: "rgba(180,255,0,0.25)",
  },
  defensive: {
    themeColor: "#38bdf8",
    badgeBg: "bg-sky-500/10",
    badgeText: "text-sky-300",
    badgeBorder: "border-sky-500/30",
    glowColor: "rgba(56,189,248,0.35)",
    heroGlow: "rgba(56,189,248,0.25)",
  },
  grc: {
    themeColor: "#c084fc",
    badgeBg: "bg-purple-500/10",
    badgeText: "text-purple-300",
    badgeBorder: "border-purple-500/30",
    glowColor: "rgba(192,132,252,0.35)",
    heroGlow: "rgba(192,132,252,0.25)",
  },
  dpdp: {
    themeColor: "#34d399",
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-300",
    badgeBorder: "border-emerald-500/30",
    glowColor: "rgba(52,211,153,0.35)",
    heroGlow: "rgba(52,211,153,0.25)",
  },
  training: {
    themeColor: "#fbbf24",
    badgeBg: "bg-amber-500/10",
    badgeText: "text-amber-300",
    badgeBorder: "border-amber-500/30",
    glowColor: "rgba(251,191,36,0.35)",
    heroGlow: "rgba(251,191,36,0.25)",
  },
  ai: {
    themeColor: "#f43f5e",
    badgeBg: "bg-rose-500/10",
    badgeText: "text-rose-300",
    badgeBorder: "border-rose-500/30",
    glowColor: "rgba(244,63,94,0.35)",
    heroGlow: "rgba(244,63,94,0.25)",
  },
};

export default function ServiceDetail() {
  const { category = "offensive", slug = "" } = useParams<{
    category?: string;
    slug?: string;
  }>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const service = getSubserviceData(category, slug);
  const accent = CATEGORY_ACCENT[service?.category || category] || CATEGORY_ACCENT.offensive;
  const siblingSubservices = service ? getSubservicesByCategory(service.category) : [];

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | ${service.categoryTitle} | Envista Cyber Defence`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", service.heroSummary);
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [service, category, slug]);

  if (!service) {
    return (
      <section className="mx-auto flex min-h-[75vh] max-w-[1320px] flex-col items-center justify-center px-6 py-24 text-center text-white">
        <Eyebrow tone="accent">Practice Directory</Eyebrow>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Service Not Found
        </h1>
        <p className="mt-4 max-w-md text-sm text-slate-400">
          The requested service subpage could not be located. Explore our primary cybersecurity practices below.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 max-w-2xl">
          {getAllSubservices()
            .slice(0, 12)
            .map((s) => (
              <Link
                key={s.id}
                to={`/services/${s.category}/${s.slug}`}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-[#B4FF00] hover:text-[#B4FF00]"
              >
                {s.navTitle}
              </Link>
            ))}
        </div>
        <div className="mt-10">
          <Btn to="/capabilities">Browse All Capabilities</Btn>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-[#B4FF00] selection:text-slate-950">
      {/* ---------------------------------------------------------------- */}
      {/* 1. Breadcrumbs & Micro-Nav */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-b border-white/10 bg-[#0a0d18] py-3 text-xs">
        <div className={WRAP}>
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 font-mono text-[11px] text-slate-400 overflow-x-auto whitespace-nowrap"
          >
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <CaretRight size={10} className="text-slate-600" />
            <Link to="/capabilities" className="hover:text-white transition-colors">
              Services
            </Link>
            <CaretRight size={10} className="text-slate-600" />
            <Link
              to={`/capabilities#${service.category}`}
              className="text-violet-300 hover:text-white transition-colors"
            >
              {service.categoryTitle}
            </Link>
            <CaretRight size={10} className="text-slate-600" />
            <span style={{ color: accent.themeColor }} className="font-semibold">
              {service.navTitle}
            </span>
          </nav>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 2. Hero Section */}
      {/* ---------------------------------------------------------------- */}
      <header className="relative overflow-hidden border-b border-violet-500/20 bg-gradient-to-b from-[#0e0826] via-[#110a2f] to-[#07090e] py-14 sm:py-20 lg:py-24">
        {/* Ambient radial glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full blur-[120px] opacity-25"
          style={{
            background: `radial-gradient(circle, ${accent.heroGlow} 0%, rgba(139,92,246,0.3) 40%, transparent 70%)`,
          }}
        />

        {/* Cyber contour hairline grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className={`${WRAP} relative z-10`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Headings & Value Prop */}
            <div className="lg:col-span-7">
              <div
                className={`inline-flex items-center gap-2 rounded-full border ${accent.badgeBorder} ${accent.badgeBg} px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider ${accent.badgeText}`}
              >
                <span>{CATEGORY_ICONS[service.category]}</span>
                <span>
                  {service.categoryTitle.toUpperCase()} // {service.badge}
                </span>
              </div>

              <h1 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
                {service.title}
              </h1>

              <p className="mt-4 text-base sm:text-lg font-medium text-[#c4b5fd] leading-snug">
                {service.tagline}
              </p>

              <p className="mt-4 text-sm sm:text-[15px] text-slate-300 leading-relaxed max-w-2xl">
                {service.heroSummary}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  style={{
                    backgroundColor: accent.themeColor,
                    boxShadow: `0 0 24px ${accent.glowColor}`,
                  }}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-xs font-bold text-slate-950 uppercase tracking-wider transition-all duration-200 hover:scale-[1.03] cursor-pointer"
                >
                  <span>Schedule Scoping Call</span>
                  <ArrowRight size={14} weight="bold" />
                </Link>

                <Link
                  to={`/capabilities#${service.category}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 font-mono text-xs font-semibold text-white tracking-wider transition-all duration-200 hover:border-violet-400 hover:bg-white/10"
                >
                  <span>Practice Overview</span>
                  <ArrowRight size={13} weight="bold" />
                </Link>
              </div>

              {/* Supported Frameworks Tagline */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs">
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-slate-400">
                  Compliance &amp; Standards:
                </span>
                {service.frameworks.map((fw) => (
                  <span
                    key={fw}
                    className="rounded-md border border-white/15 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-slate-200"
                  >
                    {fw}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Live Proof Telemetry Card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-violet-500/30 bg-[#0d0722] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(139,92,246,0.15)]">
                {/* Header hairline */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span
                      style={{ backgroundColor: accent.themeColor }}
                      className="h-2 w-2 rounded-full animate-pulse"
                    />
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-white">
                      Practice Performance SLA
                    </span>
                  </div>
                  <span className="font-mono text-[10.5px] text-violet-300">
                    ISO / CERT-IN / CREST
                  </span>
                </div>

                {/* 4 Metric Pods */}
                <div className="mt-5 grid grid-cols-2 gap-4">
                  {service.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-violet-400/40 hover:bg-white/[0.05]"
                    >
                      <div
                        style={{ color: accent.themeColor }}
                        className="font-display text-2xl sm:text-3xl font-extrabold leading-none"
                      >
                        {m.value}
                      </div>
                      <div className="mt-2 text-xs font-bold text-white leading-tight">
                        {m.label}
                      </div>
                      {m.sub && (
                        <div className="mt-1 font-mono text-[10px] text-slate-400 leading-tight">
                          {m.sub}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Assurance Note */}
                <div className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 flex items-start gap-3 text-xs text-emerald-200">
                  <ShieldCheck size={20} weight="fill" className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-emerald-300">Enterprise Assurance: </span>
                    All evaluations, audits, and operational support operate under strict confidentiality agreements, licensed tooling, and certified practitioners.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ---------------------------------------------------------------- */}
      {/* 3. Subservice Switcher Pill Bar */}
      {/* ---------------------------------------------------------------- */}
      {siblingSubservices.length > 1 && (
        <nav
          aria-label={`${service.categoryTitle} Subservices Navigation`}
          className="sticky top-16 z-30 border-b border-white/10 bg-[#07090e]/95 backdrop-blur-md py-3"
        >
          <div className={WRAP}>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-slate-400 shrink-0 mr-1 hidden sm:inline">
                {service.categoryTitle} Services:
              </span>
              {siblingSubservices.map((sub) => {
                const isActive = sub.slug === service.slug;
                return (
                  <Link
                    key={sub.id}
                    to={`/services/${sub.category}/${sub.slug}`}
                    style={
                      isActive
                        ? {
                            backgroundColor: accent.themeColor,
                            color: "#020617",
                            boxShadow: `0 0 14px ${accent.glowColor}`,
                          }
                        : undefined
                    }
                    className={`shrink-0 rounded-full px-3.5 py-1.5 font-mono text-[11px] font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "font-bold"
                        : "border border-white/10 bg-white/5 text-slate-300 hover:border-violet-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {sub.navTitle}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* 4. Why It Matters / Threat Landscape Context */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-16 sm:py-20 border-b border-white/10 bg-[#090b14]">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <Eyebrow tone="accent">Context &amp; Business Value</Eyebrow>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-white">
              {service.whyItMatters.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              {service.whyItMatters.description}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.whyItMatters.points.map((pt, idx) => (
              <div
                key={pt.headline}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition-all duration-300 hover:border-violet-400/40"
              >
                <div
                  style={{ color: accent.themeColor }}
                  className="font-mono text-xs font-bold"
                >
                  0{idx + 1} // CRITICAL OUTCOME
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-white">
                  {pt.headline}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pt.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 5. Technical Assessment Vectors & Domain Scopes */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 border-b border-white/10 bg-[#07090e]">
        <div className={WRAP}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <Eyebrow tone="accent">Scope &amp; Vectors</Eyebrow>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                Technical Assessment Domains
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-slate-400">
              Every engagement executes deep, surgical exploration across your operational and technical surface.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.vectors.map((vec) => (
              <div
                key={vec.category}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0f1d] p-6 sm:p-8 transition-all duration-300 hover:border-violet-400/50 hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)]"
              >
                {/* Accent line */}
                <div
                  style={{ backgroundColor: accent.themeColor }}
                  className="h-0.5 w-10 group-hover:w-16 transition-all duration-300 mb-4"
                />

                <h3 className="font-display text-xl font-bold text-white transition-colors">
                  {vec.category}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {vec.description}
                </p>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <span className="font-mono text-[10.5px] uppercase tracking-wider text-violet-300 font-semibold block mb-3">
                    Capabilities &amp; Methodologies:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-400">
                    {vec.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2">
                        <CheckCircle
                          size={15}
                          weight="fill"
                          style={{ color: accent.themeColor }}
                          className="shrink-0 mt-0.5"
                        />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 6. Phased Methodology & Execution Lifecycle */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 border-b border-white/10 bg-[#090b14]">
        <div className={WRAP}>
          <div>
            <Eyebrow tone="accent">Execution Roadmap</Eyebrow>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              Structured Engagement Lifecycle
            </h2>
            <p className="mt-3 text-sm text-slate-400 max-w-2xl">
              A phased, repeatable methodology delivering measurable milestone progression from discovery to final certification.
            </p>
          </div>

          <div
            className={`mt-12 grid grid-cols-1 ${
              service.lifecycle.length === 5
                ? "md:grid-cols-5"
                : service.lifecycle.length === 4
                ? "md:grid-cols-4"
                : "md:grid-cols-3"
            } gap-4`}
          >
            {service.lifecycle.map((step) => (
              <div
                key={step.step}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-200 hover:border-violet-400/50 hover:bg-white/[0.06]"
              >
                <div>
                  <div
                    style={{ color: accent.themeColor }}
                    className="font-mono text-2xl font-black"
                  >
                    {step.step}
                  </div>
                  <div className="mt-1 font-mono text-[10px] font-bold uppercase tracking-wider text-violet-300">
                    {step.phase}
                  </div>
                  <h3 className="mt-2 font-display text-sm font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10">
                  <ul className="space-y-1.5 text-[11px] text-slate-400">
                    {step.activities.map((act) => (
                      <li key={act} className="flex items-start gap-1.5">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 7. Key Enterprise Deliverables */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 border-b border-white/10 bg-[#07090e]">
        <div className={WRAP}>
          <div className="max-w-2xl">
            <Eyebrow tone="accent">Actionable Artifacts</Eyebrow>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              What You Receive Upon Completion
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Clear, sanitized documentation tailored for executive decision-makers, auditors, and hands-on engineering teams.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.deliverables.map((deliv) => (
              <div
                key={deliv.title}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0a0d1d] p-6 sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-violet-400/30 bg-violet-500/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-violet-300">
                      <FileText size={12} weight="bold" />
                      <span>{deliv.format}</span>
                    </span>
                    <span className="font-mono text-[10.5px] text-slate-400 font-semibold">
                      {deliv.audience}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-white">
                    {deliv.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {deliv.description}
                  </p>
                </div>

                <div
                  style={{ color: accent.themeColor }}
                  className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold"
                >
                  <CheckCircle size={14} weight="bold" />
                  <span>Verified &amp; Sanitized</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 8. Flexible Engagement Models */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 border-b border-white/10 bg-[#090b14]">
        <div className={WRAP}>
          <div>
            <Eyebrow tone="accent">Flexible Delivery</Eyebrow>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-white">
              Engagement Scoping Options
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.engagementModels.map((model) => (
              <div
                key={model.name}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-violet-400/40"
              >
                <h3 className="font-display text-lg font-bold text-white">
                  {model.name}
                </h3>
                <div
                  style={{ color: accent.themeColor }}
                  className="mt-1 font-mono text-[11px] font-semibold"
                >
                  Best For: {model.suitableFor}
                </div>
                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {model.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 9. Interactive FAQs */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 border-b border-white/10 bg-[#07090e]">
        <div className={`${WRAP} max-w-4xl`}>
          <div className="text-center">
            <Eyebrow tone="accent">Frequently Asked Questions</Eyebrow>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-white">
              Technical &amp; Operational Inquiries
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-white hover:text-violet-300 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <CaretDown
                      size={16}
                      className={`shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-violet-400" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-white/10 p-5 pt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 10. Bottom Scoping Call-to-Action */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#12092c] via-[#1a0e3d] to-[#0b051e] py-16 sm:py-24 text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${accent.heroGlow} 0%, transparent 60%)`,
          }}
        />

        <div className={`${WRAP} relative z-10 max-w-3xl`}>
          <div
            style={{ color: accent.themeColor }}
            className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest"
          >
            <Sparkle size={14} weight="fill" />
            <span>CONFIDENTIAL SCOPING CONSULTATION</span>
          </div>

          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Ready to Accelerate Your {service.categoryTitle} Posture?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Speak with an Envista Cyber Defence lead under strict NDA to scope your {service.navTitle} engagement and receive a customized assessment plan.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              style={{
                backgroundColor: accent.themeColor,
                boxShadow: `0 0 24px ${accent.glowColor}`,
              }}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-mono text-xs font-bold text-slate-950 uppercase tracking-wider transition hover:scale-105"
            >
              <span>Initiate Scoping Consultation</span>
              <ArrowRight size={14} weight="bold" />
            </Link>

            <Link
              to={`/capabilities#${service.category}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-mono text-xs font-semibold text-white tracking-wider transition hover:border-violet-400 hover:text-white"
            >
              <span>View All {service.categoryTitle} Practices</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

