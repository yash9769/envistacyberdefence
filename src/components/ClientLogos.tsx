import LogoLoop, { type LogoItem } from "./ui/LogoLoop";

export const PARTNER_LOGOS: LogoItem[] = [
  {
    src: "/logos/trail-blazer-tours.svg",
    alt: "Trail Blazer Tours (TBi)",
    title: "Trail Blazer Tours",
    href: "https://trailblazertours.com/",
    hoverColor: "#0A2540",
  },
  {
    src: "/logos/lichfl-amc.png",
    alt: "LICHFL Asset Management Company Limited",
    title: "LICHFL AMC",
    href: "https://lichflamc.com/",
    hoverColor: "#004F9F",
  },
  {
    src: "/logos/osource-global.svg",
    alt: "Osource Global",
    title: "Osource Global",
    href: "https://osourceglobal.com/",
    hoverColor: "#EE4925",
  },
  {
    src: "/logos/jhs-associates.png",
    alt: "JHS & Associates LLP",
    title: "JHS & Associates LLP",
    href: "https://jhsassociates.in/",
    hoverColor: "#D81E43",
  },
];

export default function ClientLogos() {
  return (
    <section className="relative overflow-hidden border-b border-violet-500/20 bg-[#060312] py-8 sm:py-10 text-white">
      {/* Top subtle hairline glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent"
      />

      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-violet-300/80">
          <span className="h-1.5 w-1.5 rounded-full bg-[#B4FF00] animate-pulse" />
          <span>Trusted by Leading Enterprises & Institutions</span>
        </p>
      </div>

      <div className="relative w-full">
        <LogoLoop
          logos={PARTNER_LOGOS}
          speed={55}
          direction="left"
          logoHeight={36}
          gap={32}
          labels="inline"
          scaleOnHover
          fadeOut
          fadeOutWidth={0.14}
          hoverSpeed={0}
          ariaLabel="Client and enterprise partner logos"
        />
      </div>
    </section>
  );
}
