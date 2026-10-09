import { GraduationCap, Certificate } from "@phosphor-icons/react";
import Reveal from "./Reveal";
import { education, certifications } from "../data";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-t border-white/10 py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            Education and certifications.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-0">
          <Reveal className="md:pr-12">
            <div className="border-t border-white/10 pt-6">
              <GraduationCap size={26} weight="regular" className="text-accent-400" />
              <h3 className="mt-5 text-xl font-semibold text-white md:text-2xl">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm text-zinc-400">{education.school}</p>
              <p className="mt-2 font-mono text-xs text-zinc-500">{education.date}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <li
                    key={course}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:border-l md:border-white/10 md:pl-12">
            <div className="border-t border-white/10 pt-6 md:border-t-0 md:pt-0">
              <Certificate size={26} weight="regular" className="text-accent-400" />
              <ul className="mt-5 space-y-6">
                {certifications.map((cert) => (
                  <li key={cert.name}>
                    <h3 className="text-xl font-semibold text-white md:text-2xl">{cert.name}</h3>
                    <p className="mt-1 text-sm text-zinc-400">{cert.issuer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
