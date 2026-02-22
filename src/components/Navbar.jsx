import { motion } from 'framer-motion';
import { navLinks } from '../data/siteData';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="text-lg font-bold tracking-wide text-white">
          Soham<span className="text-cyan-300">.</span>
        </a>
        <ul className="hidden gap-7 md:flex">
          {navLinks.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-cyan-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          href="#contact"
          className="rounded-full border border-cyan-300/50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-200"
        >
          Let&apos;s Talk
        </motion.a>
      </nav>
    </header>
  );
}
