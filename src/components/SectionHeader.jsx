export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{subtitle}</p>
      <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">{title}</h2>
    </div>
  );
}
