type Collaborator = {
    name: string;
    role: string;
    description: string;
    imageUrl: string;
  };

  const collaborators: Collaborator[] = [
    {
      name: "Fernanda de Paula Silva",
      role: "Idealizadora e desenvolvedora",
      description:
        "Doutoranda e Mestre em Engenharia Biomédica (UFU), Estudante da Pós-Graduação em Educação Profissional e Tecnológica Inclusiva (IFTM), Pós-graduada em Atendimento Educacional Especializado e Psicomotricidade (FAVENI), em Gestão do Trabalho Pedagógico: supervisão, orientação, inspeção e administração (FAVENI) e em Docência nos ensinos médio, técnico e superior (UCAM), Graduada em Pedagogia (FACIBRA) e em Sistemas para Internet (IFTM). Docente na Rede Municipal de Ensino de Uberlândia/MG.",
      imageUrl: "/figuras/Alfabeto/A.png",
    }]
  
    export function Collaborator() {
        return (
            <div className="container flex flex-col justify-center px-6">
                <h2 className="text-bold text-center text-4xl text-green-tertiary mb-6">Colaboradores</h2>
            <div className="flex justify-center items-centers p-4">
            {collaborators.map((collaborator, index) => (
              <div key={index} className="max-w-md rounded overflow-hidden shadow-lg mx-2 mb-4 bg-white">
                <img
                  className="w-full h-48 object-cover"
                  src={collaborator.imageUrl}
                  alt={`${collaborator.name} profile`}
                />
                <div className="px-6 py-4 bg-green-hover">
                  <div className="font-bold text-xl mb-2 text-white">{collaborator.name}</div>
                  <p className="text-green-tertiary text-base">{collaborator.role}</p>
                  <p className="text-zinc-900 text-base">{collaborator.description}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        );
      };
      
      