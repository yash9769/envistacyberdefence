import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  CaretDown,
  CaretRight,
  CheckCircle,
  Crosshair,
  FileText,
  LockKey,
  ShieldCheck,
  ShieldWarning,
  Sparkle,
  TerminalWindow,
  WarningCircle,
} from "@phosphor-icons/react";
import {
  OFFENSIVE_SERVICES,
  getOffensiveServiceBySlug,
  type OffensiveSubService,
} from "../data/offensiveServices";
import { Btn, Eyebrow, Reveal, RevealText } from "../components/ui";

const WRAP = "mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8";

export default function OffensiveServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const service = slug ? getOffensiveServiceBySlug(slug) : undefined;

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Offensive Security | Envista Cyber Defence`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", service.heroSummary);
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [service, slug]);

  if (!service) {
    return (
      <section className="mx-auto flex min-h-[75vh] max-w-[1320px] flex-col items-center justify-center px-6 py-24 text-center text-white">
        <Eyebrow tone="accent">Offensive Security</Eyebrow>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Subservice Not Found
        </h1>
        <p className="mt-4 max-w-md text-sm text-slate-400">
          The requested offensive security subservice could not be located. Browse all available offensive practices below.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 max-w-2xl">
          {OFFENSIVE_SERVICES.map((s) => (
            <Link
              key={s.id}
              to={`/services/offensive/${s.slug}`}
              className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-[#B4FF00] hover:text-[#B4FF00]"
            >
              {s.navTitle}
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Btn to="/capabilities#offensive">Return to All Capabilities</Btn>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-[#B4FF00] selection:text-slate-950">
      {/* ---------------------------------------------------------------- */}
      {/* 1. Breadcrumbs & Top Micro-Bar */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-b border-white/10 bg-[#0a0d18] py-3 text-xs">
        <div className={WRAP}>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-[11px] text-slate-400 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <CaretRight size={10} className="text-slate-600" />
            <Link to="/capabilities" className="hover:text-white transition-colors">
              Services
            </Link>
            <CaretRight size={10} className="text-slate-600" />
            <Link to="/capabilities#offensive" className="text-violet-400 hover:text-violet-300 transition-colors">
              Offensive Security
            </Link>
            <CaretRight size={10} className="text-slate-600" />
            <span className="text-[#B4FF00] font-semibold">{service.navTitle}</span>
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
            background: "radial-gradient(circle, rgba(180,255,0,0.3) 0%, rgba(139,92,246,0.4) 40%, transparent 70%)",
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
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#d8cefa]">
                <Crosshair size={14} weight="bold" className="text-[#B4FF00] animate-pulse" />
                <span>OFFENSIVE PRACTICE // {service.badge}</span>
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
                  className="inline-flex items-center gap-2 rounded-full bg-[#B4FF00] px-6 py-3 font-mono text-xs font-bold text-slate-950 uppercase tracking-wider shadow-[0_0_24px_rgba(180,255,0,0.4)] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_32px_rgba(180,255,0,0.6)] cursor-pointer"
                >
                  <span>Schedule Scoping Call</span>
                  <ArrowRight size={14} weight="bold" />
                </Link>

                <Link
                  to="/methodology"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 font-mono text-xs font-semibold text-white tracking-wider transition-all duration-200 hover:border-violet-400 hover:bg-white/10"
                >
                  <span>Offensive Methodology</span>
                  <ArrowRight size={13} weight="bold" />
                </Link>
              </div>

              {/* Supported Frameworks Tagline */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs">
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-slate-400">
                  Compliance & Standards:
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
                    <span className="h-2 w-2 rounded-full bg-[#B4FF00] animate-pulse" />
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-white">
                      Practice Verification SLA
                    </span>
                  </div>
                  <span className="font-mono text-[10.5px] text-violet-300">
                    CERT-IN / CREST / OSCP
                  </span>
                </div>

                {/* 4 Metric Pods */}
                <div className="mt-5 grid grid-cols-2 gap-4">
                  {service.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-violet-400/40 hover:bg-white/[0.05]"
                    >
                      <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#B4FF00] leading-none">
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
                    <span className="font-bold text-emerald-300">Zero Production Disruption: </span>
                    All offensive evaluations are conducted under safe, non-destructive rules of engagement with real-time White Cell coordination.
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
      <nav aria-label="Offensive Security Subservices Navigation" className="sticky top-16 z-30 border-b border-white/10 bg-[#07090e]/95 backdrop-blur-md py-3">
        <div className={WRAP}>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            <span className="font-mono text-[10.5px] uppercase tracking-wider text-slate-400 shrink-0 mr-1 hidden sm:inline">
              Offensive Services:
            </span>
            {OFFENSIVE_SERVICES.map((sub) => {
              const isActive = sub.slug === service.slug;
              return (
                <Link
                  key={sub.id}
                  to={`/services/offensive/${sub.slug}`}
                  className={`shrink-0 rounded-full px-3.5 py-1.5 font-mono text-[11px] font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#B4FF00] text-slate-950 font-bold shadow-[0_0_14px_rgba(180,255,0,0.4)]"
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

      {/* ---------------------------------------------------------------- */}
      {/* 4. Why It Matters / Threat Landscape Context */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-16 sm:py-20 border-b border-white/10 bg-[#090b14]">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <Eyebrow tone="accent">Threat Context &amp; Business Risk</Eyebrow>
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
                <div className="font-mono text-xs font-bold text-[#B4FF00]">
                  0{idx + 1} // CRITICAL IMPACT
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
              Every engagement executes deep, surgical exploration across your multi-tier attack surface.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.vectors.map((vec, idx) => (
              <div
                key={vec.category}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0f1d] p-6 sm:p-8 transition-all duration-300 hover:border-[#B4FF00]/50 hover:shadow-[0_8px_30px_rgba(180,255,0,0.1)]"
              >
                {/* Accent line */}
                <div className="h-0.5 w-10 bg-violet-400/50 group-hover:bg-[#B4FF00] group-hover:w-16 transition-all duration-300 mb-4" />

                <h3 className="font-display text-xl font-bold text-white group-hover:text-[#B4FF00] transition-colors">
                  {vec.category}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {vec.description}
                </p>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <span className="font-mono text-[10.5px] uppercase tracking-wider text-violet-300 font-semibold block mb-3">
                    Tested Capabilities &amp; Tactics:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-400">
                    {vec.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2">
                        <CheckCircle size={15} weight="fill" className="text-[#B4FF00] shrink-0 mt-0.5" />
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
      {/* 6. Phased Methodology & Attack Lifecycle */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 border-b border-white/10 bg-[#090b14]">
        <div className={WRAP}>
          <div>
            <Eyebrow tone="accent">Execution Roadmap</Eyebrow>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              End-to-End Engagement Lifecycle
            </h2>
            <p className="mt-3 text-sm text-slate-400 max-w-2xl">
              A structured, repeatable methodology built on NIST SP 800-115, PTES, and real-world adversary playbooks.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-4">
            {service.lifecycle.map((step) => (
              <div
                key={step.step}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-200 hover:border-violet-400/50 hover:bg-white/[0.06]"
              >
                <div>
                  <div className="font-mono text-2xl font-black text-[#B4FF00]">
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
              Clear, sanitized documentation tailored for executive decision-makers and hands-on engineering teams.
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

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[#B4FF00]">
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
                <div className="mt-1 font-mono text-[11px] text-[#B4FF00] font-semibold">
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
                    className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-white hover:text-[#B4FF00] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <CaretDown
                      size={16}
                      className={`shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#B4FF00]" : ""
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
            background:
              "radial-gradient(circle at 50% 50%, rgba(180,255,0,0.3) 0%, transparent 60%)",
          }}
        />

        <div className={`${WRAP} relative z-10 max-w-3xl`}>
          <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-[#B4FF00]">
            <Sparkle size={14} weight="fill" />
            <span>CONFIDENTIAL SCOPING CONSULTATION</span>
          </div>

          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Ready to Validate Your Real-World Exploitability?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Speak with an Envista Offensive Security lead under strict NDA to scope your {service.navTitle} engagement and receive a customized test plan.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#B4FF00] px-7 py-3.5 font-mono text-xs font-bold text-slate-950 uppercase tracking-wider shadow-[0_0_24px_rgba(180,255,0,0.4)] transition hover:scale-105"
            >
              <span>Initiate Offensive Scoping</span>
              <ArrowRight size={14} weight="bold" />
            </Link>

            <Link
              to="/capabilities#offensive"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-mono text-xs font-semibold text-white tracking-wider transition hover:border-[#B4FF00] hover:text-[#B4FF00]"
            >
              <span>View All Offensive Practices</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

