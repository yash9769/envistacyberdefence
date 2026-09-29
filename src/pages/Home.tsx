import { Link } from "react-router";
import {
  ArrowRight,
  Brain,
  Certificate,
  ChartBar,
  ClipboardText,
  Gear,
  GraduationCap,
  Lock,
  MagnifyingGlass,
  ShieldCheck,
  Target,
} from "@phosphor-icons/react";
import Hero from "../components/hero/Hero";
import { Btn, Eyebrow, Reveal, RevealText } from "../components/ui";
import { CountUp } from "../components/motion";
import {
  APPROACH_STEPS,
  HOME_INSIGHTS,
  HOME_SERVICES,
  IMPACT_STATS,
  type HomeService,
} from "../data";

const WRAP = "mx-auto max-w-[1240px] px-6 lg:px-10";

const SERVICE_ICON: Record<HomeService["icon"], typeof Target> = {
  offensive: Target,
  defensive: ShieldCheck,
  grc: Certificate,
  dpdp: Lock,
  ai: Brain,
  training: GraduationCap,
};

const STEP_ICON = [MagnifyingGlass, ClipboardText, Gear, ChartBar];

/* ---------------------------------------------------------------- */
/* Frame 2: What we do (Royal Purple Theme)                         */
/* ---------------------------------------------------------------- */
function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0b051e] via-[#140833] to-[#0e0625] text-white py-20 lg:py-28 border-t border-b border-violet-500/20">
      {/* Soft atmospheric violet glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-purple-600/15 blur-[120px]"
      />

      <div className={`${WRAP} relative z-10`}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[38fr_62fr] lg:gap-10">
          <div>
            <Eyebrow tone="dark">What we do</Eyebrow>
            <h2 className="mt-5 display-lg text-white">
              <RevealText text="From risk" stagger={70} />
              <span className="block">
                <span className="bg-gradient-to-r from-violet-300 via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                  <RevealText text="to resilience." start={140} />
                </span>
              </span>
            </h2>
            <Reveal delay={160}>
              <p className="lead mt-6 text-[#d8cefa]">
                End-to-end cybersecurity services designed to reduce risk, ensure compliance and
                keep your business ahead of evolving threats.
              </p>
              <div className="mt-7">
                <Btn to="/capabilities" variant="solid">
                  Explore All Services
                </Btn>
              </div>
            </Reveal>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_SERVICES.map((s, i) => {
              const Icon = SERVICE_ICON[s.icon];
              return (
                <li key={s.id}>
                  <Reveal delay={(i % 3) * 70} className="h-full">
                    <Link
                      to={`/capabilities#${s.id}`}
                      className="group flex h-full flex-col justify-between rounded-2xl border border-violet-500/25 bg-[#170c38]/85 p-6 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/60 hover:bg-[#1f1049] hover:shadow-[0_12px_36px_rgba(124,58,237,0.3)] cursor-pointer"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span
                            aria-hidden="true"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-600/20 text-violet-300 transition-all duration-300 group-hover:scale-105 group-hover:bg-violet-600/40 group-hover:text-white"
                          >
                            <Icon size={20} weight="bold" />
                          </span>
                        </div>
                        <h3 className="mt-4 font-display text-base font-bold tracking-tight text-white group-hover:text-violet-200 transition-colors">
                          {s.title}
                        </h3>
                        <ul className="mt-3 space-y-1.5 text-[13px] leading-snug text-[#d8cefa]">
                          {s.points.map((p) => (
                            <li key={p}>• {p}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-violet-300 font-semibold group-hover:text-white transition-colors">
                        <span>Explore</span>
                        <span
                          aria-hidden="true"
                          className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-violet-400/30 bg-violet-950/60 text-violet-300 transition-all duration-300 group-hover:border-violet-300 group-hover:bg-violet-600 group-hover:text-white group-hover:translate-x-1"
                        >
                          <ArrowRight size={13} weight="bold" />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

const APPROACH_CARD_THEMES = [
  {
    // Discover — Electric Sky Blue
    border: "border-sky-500/35 hover:border-sky-400/80",
    bg: "bg-gradient-to-b from-[#0c1a3b]/90 via-[#0e1633]/85 to-[#0b0c26]/90",
    glow: "shadow-[0_12px_36px_rgba(2,132,199,0.18)] hover:shadow-[0_18px_44px_rgba(56,189,248,0.35)]",
    topLine: "bg-gradient-to-r from-transparent via-sky-400 to-transparent",
    iconBox: "border-sky-400/40 bg-sky-500/15 text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.25)] group-hover:bg-sky-500 group-hover:text-slate-950",
    tag: "Reconnaissance",
    titleHover: "group-hover:text-sky-200",
  },
  {
    // Plan — Royal Violet
    border: "border-violet-500/35 hover:border-violet-400/80",
    bg: "bg-gradient-to-b from-[#1d0d44]/90 via-[#170b36]/80 to-[#0d0724]/90",
    glow: "shadow-[0_12px_36px_rgba(139,92,246,0.18)] hover:shadow-[0_18px_44px_rgba(168,85,247,0.35)]",
    topLine: "bg-gradient-to-r from-transparent via-violet-400 to-transparent",
    iconBox: "border-violet-400/40 bg-violet-500/15 text-violet-300 shadow-[0_0_20px_rgba(168,85,247,0.25)] group-hover:bg-violet-500 group-hover:text-slate-950",
    tag: "Strategy & Architecture",
    titleHover: "group-hover:text-violet-200",
  },
  {
    // Implement — Rose Orchid
    border: "border-pink-500/35 hover:border-pink-400/80",
    bg: "bg-gradient-to-b from-[#2e0d38]/90 via-[#23092c]/80 to-[#14061c]/90",
    glow: "shadow-[0_12px_36px_rgba(236,72,153,0.18)] hover:shadow-[0_18px_44px_rgba(244,114,182,0.35)]",
    topLine: "bg-gradient-to-r from-transparent via-pink-400 to-transparent",
    iconBox: "border-pink-400/40 bg-pink-500/15 text-pink-300 shadow-[0_0_20px_rgba(244,114,182,0.25)] group-hover:bg-pink-500 group-hover:text-slate-950",
    tag: "Precision Deployment",
    titleHover: "group-hover:text-pink-200",
  },
  {
    // Optimize — Neon Cyber Lime
    border: "border-lime-500/35 hover:border-lime-400/80",
    bg: "bg-gradient-to-b from-[#132617]/90 via-[#0e1d17]/80 to-[#071318]/90",
    glow: "shadow-[0_12px_36px_rgba(180,255,0,0.15)] hover:shadow-[0_18px_44px_rgba(180,255,0,0.35)]",
    topLine: "bg-gradient-to-r from-transparent via-[#B4FF00] to-transparent",
    iconBox: "border-lime-400/40 bg-lime-500/15 text-[#B4FF00] shadow-[0_0_20px_rgba(180,255,0,0.25)] group-hover:bg-[#B4FF00] group-hover:text-slate-950",
    tag: "Continuous Resilience",
    titleHover: "group-hover:text-lime-200",
  },
];

/* ---------------------------------------------------------------- */
/* Frame 3: Our approach (Royal Purple Theme with Distinct Cards)   */
/* ---------------------------------------------------------------- */
function OurApproach() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0e0625] via-[#140833] to-[#0b051e] text-white py-20 lg:py-28 border-t border-b border-violet-500/20">
      {/* Soft atmospheric violet glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-purple-600/15 blur-[120px]"
      />

      <div className={`${WRAP} relative z-10`}>
        <div className="max-w-2xl">
          <Eyebrow tone="dark">Our approach</Eyebrow>
          <h2 className="mt-5 display-lg text-white">
            <RevealText text="A structured path" stagger={70} />
            <span className="block">
              <RevealText text="to a safer" start={160} />{" "}
              <span className="text-[#c4b5fd]">
                <RevealText text="tomorrow." start={240} />
              </span>
            </span>
          </h2>
          <Reveal delay={180}>
            <p className="lead mt-6 text-[#d8cefa]">
              A practical, intelligence-led approach designed to understand your environment,
              reduce risk and build long-term resilience.
            </p>
            <div className="mt-8">
              <Btn to="/methodology" variant="solid">Learn About Our Approach</Btn>
            </div>
          </Reveal>
        </div>

        {/* 4 Differentiated High-Contrast Cards */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {APPROACH_STEPS.map((s, i) => {
            const Icon = STEP_ICON[i];
            const theme = APPROACH_CARD_THEMES[i];
            return (
              <Reveal key={s.t} delay={i * 80} className="h-full">
                <div
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 ${theme.border} ${theme.bg} ${theme.glow}`}
                >
                  {/* Glowing top accent hairline */}
                  <div
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-[2px] opacity-70 transition-opacity duration-300 group-hover:opacity-100 ${theme.topLine}`}
                  />

                  <div>
                    {/* Header row: Icon badge */}
                    <div className="flex items-center justify-between">
                      <span
                        aria-hidden="true"
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-105 ${theme.iconBox}`}
                      >
                        <Icon size={22} weight="bold" />
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3
                      className={`mt-6 font-display text-xl font-bold tracking-tight text-white transition-colors duration-200 ${theme.titleHover}`}
                    >
                      {s.t}
                    </h3>

                    {/* Step Description */}
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-300">
                      {s.d}
                    </p>
                  </div>

                  {/* Bottom Phase Label */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400 group-hover:text-slate-200 transition-colors">
                      {theme.tag}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-xs text-slate-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white"
                    >
                      →
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Frame 4: Real impact (Royal Purple Theme)                        */
/* ---------------------------------------------------------------- */
function RealImpact() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0b051e] via-[#140833] to-[#0e0625] text-white py-16 lg:py-24 border-t border-b border-violet-500/20">
      <div className={`${WRAP} relative z-10`}>
        <div className="relative overflow-hidden rounded-[28px] border border-violet-500/35 bg-gradient-to-br from-[#1a0e3d]/90 via-[#140931]/95 to-[#0b051e] px-8 py-12 lg:px-14 lg:py-16 shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(168,85,247,0.18)] backdrop-blur-2xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(760px 420px at 12% 18%, rgba(168,85,247,0.18), transparent 62%), radial-gradient(620px 420px at 92% 88%, rgba(124,58,237,0.15), transparent 64%)",
            }}
          />
          {/* Contour sweep */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-full w-[46%] opacity-20"
            viewBox="0 0 400 300"
            preserveAspectRatio="none"
            fill="none"
          >
            {[0, 1, 2, 3, 4, 5, 6].map((n) => (
              <path
                key={n}
                d={`M ${300 - n * 26} -40 C ${190 - n * 22} 90, ${250 - n * 24} 190, ${392 - n * 26} 340`}
                stroke="rgba(168,85,247,0.4)"
                strokeWidth="1"
              />
            ))}
          </svg>

          <div className="relative z-10">
            {/* Top row: Eyebrow, Heading on left and Callout + CTA on right */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-violet-300">
                  Real impact
                </div>
                <h2 className="mt-3.5 display-lg text-white">
                  <RevealText text="Stronger" stagger={70} />{" "}
                  <span className="block sm:inline">
                    <RevealText text="organizations." start={140} />
                  </span>{" "}
                  <span className="block">
                    <RevealText text="Safer" start={220} />{" "}
                    <span className="bg-gradient-to-r from-violet-300 via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                      <RevealText text="tomorrows." start={280} />
                    </span>
                  </span>
                </h2>
              </div>

              <Reveal delay={160} className="shrink-0 lg:text-right">
                <p className="text-[14px] sm:text-[15px] font-medium leading-snug text-[#d8cefa]">
                  Measured outcomes.
                  <br className="hidden sm:block" /> Real business value.
                </p>
                <Link
                  to="/case-studies"
                  className="mt-3.5 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-white/10 px-5 py-2.5 text-[13px] font-semibold text-white backdrop-blur-md transition-all duration-200 hover:border-violet-300 hover:bg-white/20 hover:scale-[1.02] shadow-sm"
                >
                  <span>View Case Studies</span>
                  <ArrowRight size={14} weight="bold" aria-hidden="true" />
                </Link>
              </Reveal>
            </div>

            {/* Bottom row: 4 Generously Spaced Proof Points with Consistent Column Dividers */}
            <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-white/15">
              <dl className="grid grid-cols-2 gap-y-8 gap-x-6 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-white/15 w-full">
                {IMPACT_STATS.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col justify-start sm:px-6 lg:px-8 first:sm:pl-0 last:sm:pr-0"
                  >
                    <dt className="font-display text-[32px] sm:text-[38px] lg:text-[44px] font-extrabold leading-none tracking-tight text-white drop-shadow-[0_2px_12px_rgba(168,85,247,0.35)]">
                      <CountUp to={s.v} suffix={s.suffix} />
                    </dt>
                    <dd className="mt-2.5 text-[12.5px] sm:text-[13px] font-medium leading-snug text-[#d8cefa] max-w-[190px]">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
const INSIGHT_CARD_THEMES = [
  {
    // Card 1: Threat Intelligence — Electric Sky Blue & Deep Navy
    border: "border-sky-500/40 hover:border-sky-400",
    bg: "bg-gradient-to-b from-[#0c1a3b] via-[#091530] to-[#060e22]",
    glow: "shadow-[0_12px_36px_rgba(2,132,199,0.18)] hover:shadow-[0_18px_44px_rgba(56,189,248,0.35)]",
    topLine: "bg-gradient-to-r from-transparent via-sky-400 to-transparent",
    tag: "text-sky-300 border-sky-400/35 bg-sky-950/70",
    title: "text-white group-hover:text-sky-200",
    date: "text-sky-300/80",
    btn: "border-sky-400/35 bg-sky-950/70 text-sky-300 group-hover:bg-sky-500 group-hover:text-slate-950 group-hover:border-sky-400",
    footerBorder: "border-sky-500/20",
  },
  {
    // Card 2: Compliance — Royal Violet & Amethyst
    border: "border-violet-500/40 hover:border-violet-400",
    bg: "bg-gradient-to-b from-[#220d47] via-[#180935] to-[#0f0524]",
    glow: "shadow-[0_12px_36px_rgba(139,92,246,0.18)] hover:shadow-[0_18px_44px_rgba(168,85,247,0.35)]",
    topLine: "bg-gradient-to-r from-transparent via-violet-400 to-transparent",
    tag: "text-violet-300 border-violet-400/35 bg-violet-950/70",
    title: "text-white group-hover:text-violet-200",
    date: "text-violet-300/80",
    btn: "border-violet-400/35 bg-violet-950/70 text-violet-300 group-hover:bg-violet-500 group-hover:text-slate-950 group-hover:border-violet-400",
    footerBorder: "border-violet-500/20",
  },
  {
    // Card 3: AI Security — Cyber Emerald & Neon Lime
    border: "border-emerald-500/40 hover:border-emerald-400",
    bg: "bg-gradient-to-b from-[#0a2518] via-[#071b11] to-[#03110a]",
    glow: "shadow-[0_12px_36px_rgba(16,185,129,0.18)] hover:shadow-[0_18px_44px_rgba(180,255,0,0.35)]",
    topLine: "bg-gradient-to-r from-transparent via-[#B4FF00] to-transparent",
    tag: "text-emerald-300 border-emerald-400/35 bg-emerald-950/70",
    title: "text-white group-hover:text-emerald-200",
    date: "text-emerald-300/80",
    btn: "border-emerald-400/35 bg-emerald-950/70 text-emerald-300 group-hover:bg-[#B4FF00] group-hover:text-slate-950 group-hover:border-[#B4FF00]",
    footerBorder: "border-emerald-500/20",
  },
];

/* ---------------------------------------------------------------- */
/* Frame 5: Insights (Vibrant Distinct Colored Cards)               */
/* ---------------------------------------------------------------- */
function Insights() {
  return (
    <section className="bg-white text-slate-900 py-20 lg:py-28">
      <div className={`${WRAP}`}>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Eyebrow tone="light">Insights</Eyebrow>
            <h2 className="mt-5 display-lg text-[#0d1020]">
              <RevealText text="Stay informed." stagger={70} />
              <span className="block">
                <RevealText text="Stay ahead." start={160} />
              </span>
            </h2>
            <p className="lead mt-5 max-w-md text-[#575f75]">
              Expert perspectives, industry trends and actionable insights to navigate an
              evolving threat landscape.
            </p>
          </div>
          <Btn to="/insights" variant="light">
            Explore Insights
          </Btn>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          {HOME_INSIGHTS.map((p, i) => {
            const theme = INSIGHT_CARD_THEMES[i % INSIGHT_CARD_THEMES.length];
            return (
              <li key={p.t}>
                <Reveal delay={i * 70} className="h-full">
                  <Link
                    to="/insights"
                    className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer ${theme.border} ${theme.bg} ${theme.glow}`}
                  >
                    {/* Glowing top accent hairline */}
                    <div
                      aria-hidden="true"
                      className={`absolute inset-x-0 top-0 h-[2px] opacity-70 transition-opacity duration-300 group-hover:opacity-100 ${theme.topLine}`}
                    />

                    <div>
                      <span
                        className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] ${theme.tag}`}
                      >
                        {p.tag}
                      </span>
                      <h3
                        className={`mt-4 font-display text-lg sm:text-xl font-bold leading-snug tracking-[-0.01em] transition-colors duration-200 ${theme.title}`}
                      >
                        {p.t}
                      </h3>
                    </div>

                    <div
                      className={`mt-8 flex items-center justify-between pt-4 border-t transition-colors ${theme.footerBorder}`}
                    >
                      <span className={`text-[12.5px] font-medium font-mono ${theme.date}`}>
                        {p.date}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 group-hover:translate-x-1 ${theme.btn}`}
                      >
                        <ArrowRight size={14} weight="bold" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Frame 6: Final CTA (Royal Purple Theme)                          */
/* ---------------------------------------------------------------- */
export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0c051d] via-[#140833] to-[#0e0624] text-white border-t border-violet-500/25">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(700px 420px at 22% 30%, rgba(168,85,247,0.18), transparent 66%)",
        }}
      />
      {/* Three columns: heading, supporting copy, action */}
      <div className={`${WRAP} relative z-10 grid grid-cols-1 items-center gap-8 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)_auto] lg:gap-12 lg:py-[72px]`}>
        <div>
          <Eyebrow tone="dark">Let&rsquo;s build a safer tomorrow</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,3vw,2.55rem)] font-extrabold leading-[1.06] tracking-[-0.035em] text-white">
            <RevealText text="Start the conversation." />
          </h2>
        </div>
        <Reveal delay={140}>
          <p className="max-w-md text-[14.5px] leading-relaxed text-[#d8cefa]">
            Discuss your challenges with our experts and discover how Envista Cyber Defence can help
            you stay ahead.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <Btn to="/contact" variant="solid">Talk to an Expert</Btn>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Page assembly: Alternating White -> Purple -> White -> Purple    */
/* ---------------------------------------------------------------- */
export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <OurApproach />
      <RealImpact />
      <Insights />
      <CtaBand />
    </>
  );
}
