import Fernanda from '../../../public/colaboradores/fernanda.png'
import Suammy from '../../../public/colaboradores/suammy.png'
import Selma from '../../../public/colaboradores/selma.png'
import Regina from '../../../public/colaboradores/regina.png'
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
      imageUrl: Fernanda,
    },
    
    {
      name: "Selma Terezinha Milagre",
      role: "Orientadora acadêmica",
      description:
        "Coordenadora do Núcleo de Inovação e Avaliação Tecnológica em Saúde (NIATS) que integra a Rede Brasileira de Avaliação Tecnologia e Saúde (REBRATS). Coordenadora do Núcleo de Engenharia Biomédica da Faculdade de Engenharia Elétrica da Universidade Federal de Uberlândia. Coordenadora de Estágio Supervisionado em Engenharia Biomédica.",
      imageUrl: Selma,
    },
    {
      name: "Suammy Priscila R. L. Cordeiro",
      role: "Coorientadora acadêmica",
      description:
        "Doutora em Educação pela Universidade de Lisboa, Mestre em Linguística (UFMT), Graduada em Pedagogia (UPE). Docente no Instituto Federal do Mato Grosso (IFMT).",
      imageUrl: Suammy,
    },
  ];
  
    export function Collaborator() {
        return (
          <div className="container mx-auto flex  flex-col justify-center px-6" id='colaboradores'>
              <h2 className="text-bold text-center text-4xl text-green-tertiary mb-6">Colaboradores</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-2 lg:grid-cols-3 gap-8">
                {collaborators.map((collaborator, index) => (
                <div key={index} className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group bg-green-hover hover:bg-white rounded-xl hover:scale-105 hover:z-10">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-green-tertiary" src={collaborator.imageUrl} alt={`${collaborator.name} profile`}/>
                <h1 className="mt-4 text-2xl font-semiboldcapitalize text-white group-hover:text-green-tertiary">{collaborator.name}</h1>
                <p className="mt-2 text-white capitalize group-hover:text-orange-primary">{collaborator.role}</p>
                <p className="text-green-tertiary text-base">{collaborator.description}</p>
            </div>
                ))}
                </div>
            </div>
          );
          
      };
      
      