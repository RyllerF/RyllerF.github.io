import { profile } from "../data/profile"

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
        </p>
        <p className="font-mono text-xs text-slate-600">
          Feito com React + Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
