import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <SectionHeader title="Let’s build something meaningful together." subtitle="Contact" />
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h3 className="mb-5 text-lg font-semibold text-white">Reach out</h3>
          <ul className="space-y-4 text-sm text-slate-300">
            <li>Email: <a className="text-cyan-300" href="mailto:soham@example.com">soham@example.com</a></li>
            <li>LinkedIn: <a className="text-cyan-300" href="https://linkedin.com" target="_blank" rel="noreferrer">linkedin.com/in/soham</a></li>
            <li>GitHub: <a className="text-cyan-300" href="https://github.com" target="_blank" rel="noreferrer">github.com/sohamsingh</a></li>
          </ul>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6"
        >
          <label className="block text-sm text-slate-200">
            Name
            <input
              type="text"
              className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300"
              placeholder="Your name"
            />
          </label>
          <label className="block text-sm text-slate-200">
            Email
            <input
              type="email"
              className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300"
              placeholder="you@example.com"
            />
          </label>
          <label className="block text-sm text-slate-200">
            Message
            <textarea
              rows="4"
              className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300"
              placeholder="Tell me about your idea..."
            />
          </label>
          <button
            type="submit"
            className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-900 transition-transform hover:-translate-y-0.5"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
