import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { navLinks } from '../data/siteData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 md:px-8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/15 bg-slate-900/55 px-4 py-3 shadow-[0_8px_40px_rgba(2,6,23,0.45)] backdrop-blur-2xl md:px-6">
        <a
          href="#home"
          className="group relative inline-flex items-center gap-1 text-lg font-semibold tracking-wide text-white"
        >
          <span className="transition-transform duration-300 group-hover:-translate-y-0.5">Soham</span>
          <span className="text-cyan-300">.</span>
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full" />
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
          {navLinks.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-flex rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-cyan-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="hidden rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100 shadow-glow transition-colors hover:bg-cyan-300/20 md:inline-flex"
          >
            Let&apos;s Talk
          </motion.a>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-200 transition-colors hover:border-cyan-300/45 hover:text-cyan-200 md:hidden"
          >
            <span className="text-lg">{isOpen ? '×' : '☰'}</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-6xl rounded-2xl border border-white/15 bg-slate-900/90 p-3 shadow-[0_14px_45px_rgba(8,47,73,0.3)] backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-1">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-cyan-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-300/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100"
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
