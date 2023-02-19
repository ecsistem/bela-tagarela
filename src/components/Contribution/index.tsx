import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper, faTrophy, faMicrophoneAlt } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type ContributionType = {
  category: string;
  title: string;
  link: string;
  icon: IconProp;
};

const contributions: ContributionType[] = [
  {
    category: "Artigos",
    title: "Bela Tagarela: aplicação móvel para comunicação aumentativa e alternativa",
    link: "https://periodicos.ifrs.edu.br/index.php/tear/article/view/3977",
    icon: faNewspaper,
  },
  {
    category: "Artigos",
    title: "Proposta de ferramenta tecnológica para o ensino de Matemática a pessoas com Deficiência Intelectual",
    link: "https://cietenped.ufscar.br/submissao/index.php/2020/article/view/1846",
    icon: faNewspaper,
  },
  {
    category: "Prêmios",
    title: "1º lugar com a solução JEBOB - Jovens Empreendedores em Busca de Oportunidades Bacanas, 2º Hackathon CCR (2021)",
    link: "https://www.grupoccr.com.br/hackathonccr/",
    icon: faTrophy,
  },
  {
    category: "Prêmios",
    title: "1º lugar com a solução Ananá - autoconhecimento e saúde mental, Hackathon do grupo Live or Program - Universidade de São Paulo (USP) - Campus Ribeirão Preto (2020)",
    link: "https://www.linkedin.com/posts/fernandapsilva29_hackathon-activity-6724358176239579136-BW-O?utm_source=share&utm_medium=member_desktop",
    icon: faTrophy,
  },
  {
    category: "Prêmios",
    title: "1º lugar com a solução CADU - Centro de Agendamento de Desinfecção Unificado, 3º Hackathon NanoBio: Conexões - Universidade Federal do Rio de Janeiro - Campus Duque de Caxias (2020)",
    link: "https://www.instagram.com/p/CLnAONwlA8-/",
    icon: faTrophy,
  },
  {
    category: "Prêmios",
    title: "3º lugar com a solução Recrutech - Recrutando Jovens, Hackathon LatinoWare: 17º Congresso Latino-americano de Software Livre e Tecnologias Abertas – PR (2020)",
    link: "https://www.linkedin.com/posts/fernandapsilva29_hackathon-latinoware-activity-6740961534559711232-3GuW?utm_source=share&utm_medium=member_desktop",
    icon: faTrophy,
  },
  {
    category: "Entrevistas",
    title: "Egressa do IFTM desenvolve aplicativo voltado para crianças com prejuízos de fala",
    link: "https://iftm.edu.br/noticias/index.php?id=10633",
    icon: faMicrophoneAlt,
  },
  {
    category: "Entrevistas",
title: "A voz das mulheres da UFU na ciência",
link: " https://comunica.ufu.br/noticia/2021/02/voz-das-mulheres-da-ufu-na-ciencia",
icon: faMicrophoneAlt,
},
];

export function ContributionList() {
    return (
        <div className="">
          <div className="container mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold mb-4 text-center text-green-tertiary">Contribuições</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-bold mb-4 text-green-primary">Artigos</h2>
                {contributions
                  .filter((contribution) => contribution.category === "Artigos")
                  .map((contribution, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow mb-4">
                      <div className="flex items-center mb-4">
                        <div className="mr-2 text-orange-primary">
                          <FontAwesomeIcon icon={contribution.icon} />
                        </div>
                        <div className="text-lg font-bold text-green-tertiary">{contribution.category}</div>
                      </div>
                      <div className="text-xl font-medium mb-2 text-green-tertiary">{contribution.title}</div>
                      <div className="text-green-primary">
                        <a href={contribution.link} target="_blank" rel="noreferrer">
                          Ver mais
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="md:col-span-1">
                <h2 className="text-2xl font-bold mb-4 text-green-primary">Prêmios</h2>
                {contributions
                  .filter((contribution) => contribution.category === "Prêmios")
                  .map((contribution, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow mb-4">
                      <div className="flex items-center mb-4">
                        <div className="mr-2 text-orange-primary">
                          <FontAwesomeIcon icon={contribution.icon} />
                        </div>
                        <div className="text-lg font-bold text-green-tertiary">{contribution.category}</div>
                      </div>
                      <div className="text-xl font-medium mb-2 text-green-tertiary">{contribution.title}</div>
                      <div className="text-green-primary">
                        <a href={contribution.link} target="_blank" rel="noreferrer">
                        Ver mais
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="md:col-span-1">
                <h2 className="text-2xl font-bold mb-4 text-green-primary">Entrevistas</h2>
                {contributions
                  .filter((contribution) => contribution.category === "Entrevistas")
                  .map((contribution, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow mb-4">
                      <div className="flex items-center mb-4">
                        <div className="mr-2 text-orange-primary">
                          <FontAwesomeIcon icon={contribution.icon} />
                        </div>
                        <div className="text-lg font-bold text-green-tertiary">{contribution.category}</div>
                      </div>
                      <div className="text-xl font-medium mb-2 text-green-tertiary">{contribution.title}</div>
                      <div className="text-green-primary">
                        <a href={contribution.link} target="_blank" rel="noreferrer">
                        Ver mais
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      );
};
