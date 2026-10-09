import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 md:px-8">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-full border border-accent-500/40 bg-accent-500/10 font-mono text-xs font-semibold text-accent-400">
            LS
          </span>
          <span className="text-sm font-medium text-white">Lakshmanan S</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-accent-600 px-5 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-accent-400 active:scale-[0.98]"
          >
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-200 transition-colors hover:border-white/30 md:hidden"
        >
          {open ? <X size={20} weight="regular" /> : <List size={20} weight="regular" />}
        </button>
      </div>

      {open && (
        <div className="border-b border-white/10 bg-zinc-950/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent-600 px-5 py-2.5 text-center text-sm font-medium text-zinc-950 transition-colors hover:bg-accent-400"
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
