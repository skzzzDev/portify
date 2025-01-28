import  ProjectCard  from "../../commons/ProjectCard/projectcard";
import { TotalVisits } from "../../commons/TotalVisitis/totalvisitis";
import { UserCard } from "../../commons/UserCard/usercard";
import { Button } from "../../ui/Button/button";
import { Input } from "../../ui/Button/input";

export function Hero() {
  return (
    <div className="flex h-screen">
      <div className="w-full flex flex-col gap-2 mt-[35vh]">
        <h1 className="text-5xl font-bold text-white leanding-[64px]">
          Concentre seus projetos e redes em um único link.
        </h1>

        <h2 className="text-xl leading-6">
          Crie sua própria página de projetos e compartilhe-os com o mundo.
          <br />
          Monitore o engajamento com a análise de cliques!
        </h2>

        <div className="flex items-center flex-2 gap-2 w-full mt-[10vh]">
          <span className="text-white text-xl">portify.com/</span>
          <Input placeholder="seu link" />
          <Button children="Criar Agora" />
        </div>
      </div>
      <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2DBB,transparent_55%)]">
        <div className="relative">
          <UserCard />
          <div className="absolute -bottom-[7%] -right-[45%]">
            <TotalVisits />
          </div>
          <div className="absolute top-[20%] -left-[45%] -z-10">
            <ProjectCard />
          </div>
          <div className="absolute -top-[5%] -left-[55%] -z-10">
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
}