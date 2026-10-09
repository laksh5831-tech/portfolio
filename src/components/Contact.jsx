import { EnvelopeSimple, Phone, MapPin, LinkedinLogo } from "@phosphor-icons/react";
import Reveal from "./Reveal";
import { profile } from "../data";

const channels = [
  { icon: EnvelopeSimple, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: LinkedinLogo, label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin },
  { icon: MapPin, label: "Location", value: profile.location, href: null },
];

export default function Contact() {
  return (
    <>
      <section id="contact" className="scroll-mt-20 border-t border-white/10 py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <Reveal>
            <h2 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              Available for entry-level software roles.
            </h2>
            <p className="mt-6 max-w-[55ch] text-base leading-relaxed text-zinc-400 md:text-lg">
              Open to full-stack and frontend positions, and to freelance projects. Based in
              Madurai, available to work remotely across time zones.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-9 inline-block rounded-full bg-accent-600 px-7 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-accent-400 active:scale-[0.98]"
            >
              Get in touch
            </a>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <div className="flex items-center gap-2 text-zinc-500">
                    <Icon size={16} weight="regular" />
                    <span className="font-mono text-xs">{label}</span>
                  </div>
                  <p className="mt-3 break-words text-sm text-zinc-200 transition-colors group-hover:text-accent-400">
                    {value}
                  </p>
                </>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group bg-zinc-950 p-6 transition-colors hover:bg-zinc-900"
                >
                  {content}
                </a>
              ) : (
                <div key={label} className="group bg-zinc-950 p-6">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-3 px-4 text-sm text-zinc-500 sm:flex-row sm:items-center md:px-8">
          <p>© 2026 {profile.name}</p>
          <p>{profile.location}</p>
        </div>
      </footer>
    </>
  );
}
