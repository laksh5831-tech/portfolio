import { motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "@phosphor-icons/react";
import lakshPhoto from "../assets/laksh.jpeg";


export default function Hero() {
  const reduce = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1];

  const enter = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        };

  return (
    <section id="top" className="relative flex min-h-[100dvh] items-center pt-24 pb-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-accent-600/10 blur-[130px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <motion.p
            {...enter(0.05)}
            className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Hi, I'm Lakshmanan
          </motion.p>

          <motion.h1
            {...enter(0.15)}
            className="mt-6 max-w-5xl text-4xl leading-[1.08] font-semibold tracking-tight text-white md:text-5xl"
          >
            Full-stack developer building products end to end.
          </motion.h1>

          <motion.p
            {...enter(0.28)}
            className="mt-6 max-w-[52ch] text-base leading-relaxed text-zinc-400 md:text-lg"
          >
            MERN stack certified. I build responsive, production-ready applications with React,
            Node.js, and MongoDB, and I am available for entry-level roles.
          </motion.p>

          <motion.div {...enter(0.4)} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-accent-600 px-7 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-accent-400 active:scale-[0.98]"
            >
              Get in touch
            </a>
            <a
              href="#work"
              className="flex items-center gap-2 rounded-full border border-zinc-700 px-7 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white active:scale-[0.98]"
            >
              View work
              <ArrowDown size={15} weight="regular" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.97 }}
          animate={reduce ? {} : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="lg:col-span-5"
        >
          <div className="h-[360px] overflow-hidden rounded-2xl border border-white/10 sm:h-[440px] lg:h-[520px]">
            <img
              src={lakshPhoto}
              alt="Lakshmanan S"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
