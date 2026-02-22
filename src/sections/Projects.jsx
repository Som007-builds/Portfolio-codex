import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../data/siteData';

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <SectionHeader title="Selected projects with product mindset and technical depth." subtitle="Projects" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60"
          >
            <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-sm text-slate-400">
              Image Placeholder
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:shadow-glow" />
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-xl font-semibold text-white">{project.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-300">{project.description}</p>
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-cyan-300/25 px-3 py-1 text-xs text-cyan-100">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="rounded-lg border border-white/20 px-4 py-2 text-xs font-semibold text-slate-100 transition-colors hover:border-cyan-200 hover:text-cyan-200"
                >
                  GitHub
                </a>
                <a
                  href={project.liveDemo}
                  className="rounded-lg bg-cyan-300 px-4 py-2 text-xs font-semibold text-slate-900 transition-transform hover:-translate-y-0.5"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
