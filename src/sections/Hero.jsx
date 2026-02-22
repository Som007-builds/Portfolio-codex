import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pb-24 pt-36 md:px-8">
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:35px_35px]" />
      <div className="absolute -top-20 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mx-auto max-w-6xl"
      >
        <p className="mb-5 inline-flex rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
          YC Founder Energy · AI Native
        </p>
        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          Soham Singh
          <span className="mt-3 block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-2xl text-transparent sm:text-3xl lg:text-4xl">
            AI/ML Engineer | Builder | Future Tech Leader
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          I design and build intelligent systems that bridge real-world problems with high-leverage AI products. Focused on
          execution, rapid learning, and scaling from code to impact.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-transform duration-300 hover:-translate-y-1"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-cyan-300/40 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-100 shadow-glow transition-colors hover:bg-cyan-300/20"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
