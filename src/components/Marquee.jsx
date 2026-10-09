import { marqueeItems } from "../data";

export default function Marquee() {
  const half = (keyPrefix) => (
    <div key={keyPrefix} className="flex shrink-0 items-center gap-10 pr-10">
      {marqueeItems.map((item) => (
        <span
          key={`${keyPrefix}-${item}`}
          className="flex shrink-0 items-center gap-10 font-mono text-sm whitespace-nowrap text-zinc-500"
        >
          {item}
          <span className="h-1 w-1 rounded-full bg-accent-500/70" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden border-y border-white/10 bg-zinc-900/40 py-5">
      <div className="marquee-track flex w-max">
        {half("a")}
        {half("b")}
      </div>
    </div>
  );
}
