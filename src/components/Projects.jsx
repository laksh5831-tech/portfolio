import Reveal from "./Reveal";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-white/10 py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-400">
            Selected work
          </p>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            Two full-stack products, designed and shipped end to end.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
          {projects.map((project, i) => (
            <Reveal key={project.name}>
              <article className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                <div
                  className={`group overflow-hidden rounded-2xl border border-white/10 lg:col-span-7 ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={project.image}
                    alt={`${project.name} project preview`}
                    className="aspect-[16/10] w-full object-cover grayscale contrast-110 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>

                <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="font-mono text-xs text-zinc-500">{project.role}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-base text-zinc-400">{project.subtitle}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 space-y-3">
                    {project.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
