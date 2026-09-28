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

/* ---------------------------------------------------------------- */
/* Frame 3: Our approach (White Theme)                              */
/* ---------------------------------------------------------------- */
function OurApproach() {
  return (
    <section className="bg-white text-slate-900 py-20 lg:py-28">
      <div className={`${WRAP}`}>
        <div className="max-w-2xl">
          <Eyebrow tone="light">Our approach</Eyebrow>
          <h2 className="mt-5 display-lg text-[#0d1020]">
            <RevealText text="A structured path" stagger={70} />
            <span className="block">
              <RevealText text="to a safer" start={160} />{" "}
              <span className="text-[#6d28d9]">
                <RevealText text="tomorrow." start={240} />
              </span>
            </span>
          </h2>
          <Reveal delay={180}>
            <p className="lead mt-6 text-[#575f75]">
              A practical, intelligence-led approach designed to understand your environment,
              reduce risk and build long-term resilience.
            </p>
            <div className="mt-8">
              <Btn to="/methodology" variant="light">Learn About Our Approach</Btn>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-2">
          {APPROACH_STEPS.map((s, i) => {
            const Icon = STEP_ICON[i];
            return (
              <div key={s.n} className="flex flex-1 items-start gap-2">
                <Reveal delay={i * 90} className="flex flex-1 flex-col items-center text-center sm:items-start sm:text-left">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-200 bg-violet-50 text-[#6d28d9] shadow-sm"
                  >
                    <Icon size={24} weight="bold" />
                  </span>
                  <div className="mt-4 font-display text-lg font-bold text-[#0d1020]">
                    {s.t}
                  </div>
                  <p className="mt-1.5 max-w-[14rem] text-[13px] leading-relaxed text-[#575f75]">
                    {s.d}
                  </p>
                </Reveal>
                {i < APPROACH_STEPS.length - 1 && (
                  <ArrowRight
                    size={18}
                    weight="bold"
                    className="mt-4 hidden shrink-0 sm:block text-slate-300"
                    aria-hidden="true"
                  />
                )}
              </div>
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
            <div className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-violet-300">
              Real impact
            </div>

            <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <h2 className="display-lg shrink-0 text-white">
                <RevealText text="Stronger" stagger={70} />
                <span className="block">
                  <RevealText text="organizations." start={140} />
                </span>
                <span className="block">
                  <RevealText text="Safer" start={220} />{" "}
                  <span className="bg-gradient-to-r from-violet-300 to-indigo-200 bg-clip-text text-transparent">
                    <RevealText text="tomorrows." start={280} />
                  </span>
                </span>
              </h2>

              <dl className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4 lg:flex-1">
                {IMPACT_STATS.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-[32px] lg:text-[36px] font-extrabold leading-none tracking-[-0.02em] text-white">
                      <CountUp to={s.v} suffix={s.suffix} />
                    </dt>
                    <dd className="mt-2 text-[12px] leading-snug text-[#d8cefa]">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>

              <Reveal delay={160} className="shrink-0 lg:text-right">
                <p className="text-[13.5px] font-medium leading-snug text-slate-300">
                  Measured outcomes.
                  <br className="hidden lg:block" /> Real business value.
                </p>
                <Link
                  to="/case-studies"
                  className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-violet-300 transition-colors hover:text-white"
                >
                  View Case Studies
                  <ArrowRight size={14} weight="bold" aria-hidden="true" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Frame 5: Insights (White Theme)                                  */
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
          {HOME_INSIGHTS.map((p, i) => (
            <li key={p.t}>
              <Reveal delay={i * 70} className="h-full">
                <article className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:shadow-lg">
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#6d28d9]">
                      {p.tag}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-bold leading-snug tracking-[-0.01em] text-[#0d1020]">
                      {p.t}
                    </h3>
                  </div>
                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-[12px] text-slate-500 font-medium">
                      {p.date}
                    </span>
                    <span
                      aria-hidden="true"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-all hover:bg-violet-600 hover:border-violet-600 hover:text-white"
                    >
                      <ArrowRight size={14} weight="bold" />
                    </span>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
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
