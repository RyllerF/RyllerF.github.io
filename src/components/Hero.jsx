import { profile } from "../data/profile"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center px-6 pt-20"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <p className="mb-4 font-mono text-sm text-cyan-400">
          Olá, eu sou
        </p>

        <h1 className="mb-4 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>

        <h2 className="mb-6 text-xl font-medium text-slate-300 sm:text-2xl">
          {profile.title}
        </h2>

        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-400">
          {profile.description}
        </p>

        <div className="mb-10">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-slate-500">
            Tecnologias
          </p>
          <div className="flex flex-wrap gap-2">
            {profile.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-800/50 px-4 py-1.5 text-sm text-slate-300 transition-colors hover:border-cyan-500/40 hover:text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projetos"
            className="rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
          >
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  )
}
