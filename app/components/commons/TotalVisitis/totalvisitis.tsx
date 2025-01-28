import { TrendingUp } from "lucide-react";

export function TotalVisits() {
  return(
    <div className="w-min white-spacenowrap flex items-center gap-5 bg-background-secondary border border-border-primary px-8 py-3 rounded-xl shadow-lg">
      <span className="font-bold text-white">Visitas</span>
      <div className="flex items-center gap-2 text-accent-green">
        <span className="text-3xl font-bold">12.3k</span>
        <TrendingUp />
      </div>

              {/* <div className="flex items-center gap-2">
          <button>Portal</button>
          <button>Sair</button>
        </div> */}
    </div>
  )
}