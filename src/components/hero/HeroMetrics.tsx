import { HERO_STATS } from "../../data";

/* Four headline proof points with uniform spacing, consistent vertical hairlines, and balanced typography */
export default function HeroMetrics() {
  return (
    <div className="w-full pt-4 sm:pt-5 border-t border-white/15">
      <dl className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/20 w-full">
        {HERO_STATS.map((s, idx) => (
          <div
            key={s.label}
            className={`flex flex-col justify-start py-3 sm:py-0 ${
              idx === 0
                ? "sm:pr-5 lg:pr-7"
                : idx === HERO_STATS.length - 1
                  ? "sm:pl-5 lg:pl-7"
                  : "sm:px-5 lg:px-7"
            }`}
          >
            <dt className="font-display text-[30px] sm:text-[32px] lg:text-[36px] font-extrabold leading-none tracking-tight text-white">
              {s.v}
            </dt>
            <dd className="mt-2 text-[12px] sm:text-[12.5px] lg:text-[13px] font-medium leading-snug text-slate-300">
              {s.label}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
