export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 text-xs text-slate-400 md:flex-row md:px-8">
        <p>© {new Date().getFullYear()} Soham Singh. Crafted with intent.</p>
        <p>Built with React, Tailwind, and Framer Motion.</p>
      </div>
    </footer>
  );
}
