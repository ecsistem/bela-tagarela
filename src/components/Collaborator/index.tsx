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
      imageUrl: "/fernanda.jpg",
    },
    {
      name: "Suammy Priscila R. L. Cordeiro",
      role: "Coorientadora acadêmica",
      description:
        "Doutora em Educação pela Universidade de Lisboa, Mestre em Linguística (UFMT), Graduada em Pedagogia (UPE). Docente no Instituto Federal do Mato Grosso (IFMT).",
      imageUrl: "/suammy.jpg",
    },
    {
      name: "Selma Terezinha Milagre",
      role: "Orientadora acadêmica",
      description:
        "Coordenadora do Núcleo de Inovação e Avaliação Tecnológica em Saúde (NIATS) que integra a Rede Brasileira de Avaliação Tecnologia e Saúde (REBRATS). Coordenadora do Núcleo de Engenharia Biomédica da Faculdade de Engenharia Elétrica da Universidade Federal de Uberlândia. Coordenadora de Estágio Supervisionado em Engenharia Biomédica.",
      imageUrl: "/selma.jpg",
    },
    {
      name: "Regina Helena de Paulo Silva",
      role: "Consultora pedagógica",
      description:
        "Pós-graduada em Psicopedagogia Clínica e Institucional (UNIASSELVI) e em Educação Especial (PUC), Graduada em Normal Superior (UNIPAC). Coordenadora Pedagógica do Ensino Fundamental I em Uberlândia/MG.",
      imageUrl: "/regina.jpg",
    },
  ];
  
    export function Collaborator() {
        return (
          <div className="container mx-auto flex  flex-col justify-center px-6">
              <h2 className="text-bold text-center text-4xl text-green-tertiary mb-6">Colaboradores</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {collaborators.map((collaborator, index) => (
                <div key={index} className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group bg-green-hover hover:bg-white rounded-xl">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={collaborator.imageUrl} alt={`${collaborator.name} profile`}/>
                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">{collaborator.name}</h1>
                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{collaborator.role}</p>
                <p className="text-zinc-900 text-base">{collaborator.description}</p>
            </div>
                ))}
                </div>
            </div>
          );
          
      };
      
      