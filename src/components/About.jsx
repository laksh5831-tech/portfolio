import Reveal from "./Reveal";
import { profile, skillGroups } from "../data";

export default function About() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-white/10 py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            MERN stack developer focused on shipping real products.
          </h2>
          <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-zinc-400 md:text-lg">
            {profile.summary}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {profile.softSkills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-zinc-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.06}>
              <div className="border-t border-white/10 pt-4">
                <h3 className="font-mono text-xs text-zinc-500">{group.label}</h3>
                <ul className="mt-3 space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-zinc-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
