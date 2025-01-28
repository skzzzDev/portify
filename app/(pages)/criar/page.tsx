import { Header } from "@/app/components/landingPage/Header/header";
import { Button } from "@/app/components/ui/Button/button";
import { Input } from "@/app/components/ui/Button/input";
import { Rocket } from "lucide-react";

export default function CriarPage() {
  return (
    <div>
      <Header />
      <div className="h-screen flex flex-col gap-10 items-center justify-center max-w-xl mx-auto">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold text-white">Escolha seu link</h1>
          <Rocket className="size-10" />
        </div>

        <form action="" className="w-full flex items-center gap-2">
          <span>portify.com/</span>
          <Input />
          <Button className="w-[126px]">Criar</Button>
        </form>

        <div>
          <span className="text-accent-pink">Erro de exemplo</span>
        </div>
      </div>
    </div>
  )
}