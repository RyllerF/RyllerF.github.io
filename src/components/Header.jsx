import { profile } from "../data/profile"

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
]

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className="font-mono text-sm font-semibold tracking-wider text-cyan-400"
        >
          {"Ryller Fonseca"}
        </a>

        <nav className="hidden gap-8 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={profile.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
        >
          GitHub
        </a>
      </div>
    </header>
  )
}
