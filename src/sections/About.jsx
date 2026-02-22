import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const items = [
  {
    title: 'Journey',
    text: 'Started with C, C++, Java, and DSA fundamentals, then transitioned into AI/ML to build systems that think and adapt.',
  },
  {
    title: 'Mission',
    text: 'Become a 50 LPA AI Engineer while building category-defining AI products that create meaningful user value.',
  },
  {
    title: 'Mindset',
    text: 'Craft over hype. Consistency over noise. Every release should solve real pain points and scale sustainably.',
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <SectionHeader title="Building at the intersection of discipline and future tech." subtitle="About" />
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-glass p-6 shadow-glow"
          >
            <h3 className="mb-3 text-xl font-semibold text-white">{item.title}</h3>
            <p className="text-sm leading-relaxed text-slate-300">{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
