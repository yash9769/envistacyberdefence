import { useRef } from "react";
import { Link } from "react-router";
import { ArrowRight } from "@phosphor-icons/react";
import HeroMetrics from "./HeroMetrics";
import HeroVisual from "./HeroVisual";
import { gsap, useGSAP } from "../../components/motion";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  /* GSAP entrance timeline — fires once on mount */
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-h1 span",  { opacity: 0, y: 32, stagger: 0.1, duration: 0.65 })
        .from(".hero-subtitle", { opacity: 0, y: 20, duration: 0.55 }, "-=0.3")
        .from(".hero-body",     { opacity: 0, y: 16, duration: 0.5  }, "-=0.3")
        .from(".hero-btns",     { opacity: 0, y: 14, duration: 0.5  }, "-=0.25")
        .from(".hero-visual",   { opacity: 0, x: 40, duration: 0.85, ease: "power2.out" }, "-=0.55")
        .from(".hero-metrics",  { opacity: 0, y: 18, duration: 0.5  }, "-=0.5");
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden md:min-h-screen md:flex md:flex-col md:justify-center border-b border-slate-800/80"
      style={{
        backgroundColor: "#030712",
        background:
          "radial-gradient(1200px 800px at 72% 42%, #200d44 0%, #120930 25%, #080720 52%, #030511 80%, #010208 100%)",
        color: "#ffffff",
      }}
    >
      {/* Top-Left Subtle Dot Grid Pattern with Soft Tint */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[2%] top-[10%] hidden h-[120px] w-[120px] opacity-15 lg:block"
        style={{
          backgroundImage: "radial-gradient(rgba(192, 132, 252, 0.3) 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Atmospheric Brand Purple & Deep Navy Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[2%] top-[6%] h-[550px] w-[550px] lg:h-[700px] lg:w-[700px] rounded-full opacity-45 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.3) 0%, rgba(91, 33, 182, 0.18) 40%, rgba(15, 23, 42, 0.1) 70%, transparent 85%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 pt-16 pb-4 sm:px-6 sm:pt-18 md:pt-12 md:pb-4 lg:px-10 lg:pt-14 lg:pb-6">
        <div
          className={[
            "grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] md:items-center md:gap-6 lg:gap-8 xl:gap-10",
            "[grid-template-areas:'text'_'visual'_'stats']",
            "md:[grid-template-areas:'text_visual'_'stats_visual']",
          ].join(" ")}
        >
          {/* Left Column: Eyebrow, Headline, Subtitle, Paragraph, Buttons */}
          <div className="w-full max-w-[42rem] lg:max-w-[45rem] xl:max-w-[48rem]" style={{ gridArea: "text" }}>
            {/* Headline */}
            <h1 className="hero-h1 mt-1 sm:mt-2 font-display text-[clamp(36px,4.5vw,58px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-white">
              <span className="block sm:inline">Security beyond the </span>
              <span className="block sm:inline">
                <span className="text-[#B4FF00] drop-shadow-[0_0_24px_rgba(180,255,0,0.4)]">surface.</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle mt-2.5 max-w-xl text-[15px] font-semibold leading-snug text-slate-100 sm:text-[16.5px] lg:mt-3 lg:text-[18px]">
              Your Strategic cybersecurity partner.
            </p>

            {/* Paragraph */}
            <p className="hero-body mt-2 max-w-xl text-[13.5px] leading-relaxed text-slate-300 sm:text-[14px] lg:mt-2.5 lg:text-[14.5px]">
              We partner with organizations to identify risks, strengthen defences and{" "}
              <span className="underline decoration-1 underline-offset-4 decoration-slate-400">
                build lasting
              </span>{" "}
              resilience in an increasingly complex threat landscape.
            </p>

            {/* Buttons Row */}
            <div className="hero-btns mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:mt-5">
              {/* Primary Green Button */}
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-[13.5px] font-bold text-[#0d1020] transition-all duration-200 hover:brightness-110 active:scale-[0.98] sm:px-7 sm:py-3 lg:px-7.5 lg:py-3"
                style={{
                  backgroundColor: "#B4FF00",
                  boxShadow: "0 0 20px rgba(180,255,0,0.35)",
                }}
              >
                <span>Talk to an Expert</span>
                <ArrowRight size={15} weight="bold" className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              {/* Secondary Outlined Button */}
              <Link
                to="/capabilities"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-[13.5px] font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/10 active:scale-[0.98] sm:px-7 sm:py-3 lg:px-7.5 lg:py-3"
              >
                <span>Explore Our Services</span>
                <ArrowRight size={15} weight="bold" className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Metrics Row */}
          <div style={{ gridArea: "stats" }} className="hero-metrics pt-2 sm:pt-3 max-w-[42rem] lg:max-w-[46rem]">
            <HeroMetrics />
          </div>

          {/* Right Column: Hero Visual */}
          <div style={{ gridArea: "visual" }} className="hero-visual flex justify-center md:justify-center lg:justify-end md:self-center md:-mt-2 lg:-mt-4">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
