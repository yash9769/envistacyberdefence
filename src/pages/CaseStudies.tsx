import { Eyebrow, Btn, Reveal, RevealText } from "../components/ui";
import { CtaBand } from "./Home";

const WRAP = "mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8";

/* Engagement formats: what a piece of work with Envista actually looks like. */
const FORMATS: { n: string; t: string; scope: string; d: string }[] = [
  {
    n: "01",
    t: "Adversary Emulation & Crown-Jewel Exercise",
    scope: "4-6 weeks",
    d: "A goal-based engagement against a defined crown-jewel objective, chaining real techniques across application, identity and cloud until the path is proven or closed.",
  },
  {
    n: "02",
    t: "Detection Uplift & SOC Engineering",
    scope: "6-10 weeks",
    d: "Detection engineering against emulated activity: coverage mapped, rules written and tuned, and response runbooks rehearsed with the operating team.",
  },
  {
    n: "03",
    t: "DPDP Act Readiness & Privacy Mapping",
    scope: "8-12 weeks",
    d: "Data-flow mapping, consent architecture and accountability controls implemented across systems and processors, ending in an evidenced readiness position.",
  },
  {
    n: "04",
    t: "Audit Readiness & Regulatory Assurance",
    scope: "6-12 weeks",
    d: "Control design and evidence pipelines built against the frameworks you answer to, so an audit draws on records the business already produces.",
  },
];

export default function CaseStudies() {
  return (
    <>
      {/* SECTION 1: HERO (PURPLE) */}
      <section className="relative overflow-hidden bg-[#150a2e] text-white pt-28 pb-16 transition-colors duration-300 dark:bg-[#0c061e] sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full opacity-40 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(124,58,237,0.15) 50%, transparent 70%)",
          }}
        />

        <div className={WRAP}>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-white/10 px-3.5 py-1 text-xs font-semibold text-[#c4b5fd] shadow-xs backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />
              <span className="font-mono text-[11px] uppercase tracking-wider">Case Studies</span>
            </div>
            <h1 className="mt-5 display-xl text-white">
              <RevealText text="How engagements run." stagger={60} />
            </h1>
            <Reveal delay={180}>
              <p className="lead mt-7 text-[#d8cefa]">
                Every engagement is scoped to a defined objective and ends in evidence you can put in
                front of a board or an auditor. These are the formats we run most often.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2: ENGAGEMENT FORMATS (WHITE) */}
      <section className="border-t border-slate-200/80 bg-white py-16 transition-colors duration-300 dark:border-white/10 dark:bg-[#0c0e1a] sm:py-20 lg:py-28">
        <div className={WRAP}>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {FORMATS.map((f, i) => (
              <li key={f.n}>
                <Reveal delay={(i % 2) * 70} className="h-full">
                  <article className="group relative flex flex-col justify-between h-full overflow-hidden rounded-2xl border border-slate-200/90 bg-[#faf8fe] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B4FF00] hover:shadow-[0_18px_44px_rgba(180,255,0,0.25)] dark:border-white/10 dark:bg-[#14182b] dark:hover:border-[#B4FF00] sm:p-8 lg:p-9 cursor-pointer">
                    {/* Glowing Top Hairline */}
                    <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#B4FF00] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div>
                      <div className="flex items-baseline justify-start">
                        <span className="rounded bg-lime-100/80 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-lime-900 border border-lime-300/40 transition-colors group-hover:bg-[#B4FF00] group-hover:text-slate-950 dark:bg-lime-950/60 dark:text-[#B4FF00] dark:border-lime-400/30">
                          Typical {f.scope}
                        </span>
                      </div>
                      <h2 className="mt-5 font-display text-2xl font-bold text-[#150c2e] dark:text-white transition-colors group-hover:text-lime-800 dark:group-hover:text-[#B4FF00]">{f.t}</h2>
                      <p className="mt-3 text-sm leading-relaxed text-[#575f75] dark:text-slate-300">{f.d}</p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between text-xs font-bold text-lime-700 dark:text-[#B4FF00]">
                      <span>Explore Scope</span>
                      <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal>
            <div className="mt-12 rounded-2xl border border-[#e4dfef] bg-[#faf8fe] p-8 shadow-sm dark:border-white/10 dark:bg-[#14182b] lg:p-10">
              <h2 className="font-display text-xl font-bold text-[#150c2e] dark:text-white">Looking for references?</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#575f75] dark:text-slate-300">
                Detailed engagement references are shared directly, scoped to your sector and the
                controls you need evidence against.
              </p>
              <div className="mt-6">
                <Btn to="/contact" variant="solid">Request references</Btn>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
