import { projects } from "../data/projects"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <section id="projetos" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 font-mono text-sm text-cyan-400">Portfólio</p>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Meus Projetos
          </h2>
          <p className="max-w-2xl text-slate-400">
            Projetos em pipelines ETL, análise de dados, dashboards Power BI e
            desenvolvimento fullstack. Código disponível no GitHub.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
