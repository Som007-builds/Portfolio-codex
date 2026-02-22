import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { skills } from '../data/siteData';

function SkillGroup({ title, items }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
      <h3 className="mb-5 text-lg font-semibold text-white">{title}</h3>
      <div className="space-y-4">
        {items.map((skill, i) => (
          <div key={skill.name}>
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-slate-200">{skill.name}</span>
              <span className="text-cyan-200">{skill.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.07 }}
                className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <SectionHeader title="High-conviction engineering skills for AI-first products." subtitle="Skills" />
      <div className="grid gap-6 md:grid-cols-3">
        <SkillGroup title="Languages" items={skills.languages} />
        <SkillGroup title="Tools" items={skills.tools} />
        <SkillGroup title="AI Stack" items={skills.aiStack} />
      </div>
    </section>
  );
}
