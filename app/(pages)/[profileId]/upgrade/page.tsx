import { Header } from "@/app/components/landingPage/Header/header";
import { Button } from "@/app/components/ui/Button/button";

export default async function UpgradePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-4">
      <Header />
      <div className="flex flex-col md:flex-row gap-4">
        {/* Plano Mensal */}
        <div className="bg-background-secondary shadow-md rounded-lg p-6 text-center w-72 border border-border-secondary">
          <h2 className="text-lg font-semibold text-content-headline mb-2">
            Plano Mensal
          </h2>
          <p className="text-content-placeholder mb-4">
            Acesso completo a plataforma por um mês.
          </p>
          <div className="text-2xl font-bold text-accent-purple mb-4">
            R$ 9,90 / mês
          </div>
          <Button className="w-full bg-accent-purple text-white hover:bg-opacity-90">
            Assinar agora
          </Button>
        </div>

        <div className="relative bg-background-tertiary shadow-md rounded-lg p-6 text-center w-72 border border-accent-green">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent-green text-background-primary text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            RECOMENDADO!
          </div>
          <h2 className="text-lg font-semibold text-accent-green mb-2">
            Plano Vitalício
          </h2>
          <p className="text-content-placeholder mb-4">
            Pagamento único para acesso eterno.
          </p>
          <div className="text-2xl font-bold text-accent-green mb-4">
            R$ 99,90
          </div>
          <Button className="w-full bg-accent-green text-background-primary hover:bg-opacity-90">
            Assinar agora
          </Button>
        </div>
      </div>
    </div>
  );
}
