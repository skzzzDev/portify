import { Button } from "../../ui/Button/button";

export function Header() {
  return (
    <div className="absolute top-0 left-0 right-0 max-w-7xl mx-auto flex items-center justify-between py-10 bg-background-primary">
      <div className="flex items-center gap-4">
        <a href="/" className="text-decoration-none">
          <h1 className="text-white text-5xl font-extrabold">
            Porti
            <span className="text-accent-purple text-6xl font-extrabold">Fy</span>
          </h1>
        </a>
      </div>
      <div className="flex items-center gap-4">
        <Button>Minha Página</Button>
        <Button>Sair</Button>
      </div>
    </div>
  )
}
