export function About() {
  return (
    <div className="relative" id="sobre">
      <section className="bg-green-hover absolute bottom-0 left-0 right-0 h-full transform -skew-y-2 -z-50" />
      <section className="container px-6 mx-auto flex flex-col justify-center w-full rounded-lg z-1 my-16">
        <div className="justify-center px-6 py-16">
          <h2 className="text-4xl font-bold mb-4 text-center text-green-tertiary">
            Sobre
          </h2>
          <p className="text-white my-4">
            Ao descrever o que é a Engenharia Biomédica, observamos que se trata
            de uma área que integra princípios das ciências exatas e das
            ciências da saúde, com o propósito de desenvolver abordagens
            inovadoras aplicadas ao diagnóstico ou tratamento terapêutico (UFU,
            2021). Sendo assim, é uma área essencial para o desenvolvimento de
            novos sistemas em saúde. Quando se fala em saúde, também falamos em
            inclusão e acessibilidade para pessoas com deficiência, e o
            desenvolvimento de tecnologias que permitam a essas pessoas ter
            autonomia em sua rotina independente de suas limitações são
            extremamente importantes.
          </p>
          <p className="text-white">
            O movimento de pesquisa proposto aqui relaciona-se com a dupla
            formação da autora em áreas completamente diferentes, mas que se
            complementam e se justificam para este Doutorado em Engenharia
            Biomédica, são elas: a Educação e a Tecnologia da Informação. Por
            meio da experiência profissional de mais de 10 anos na Educação, a
            qual implica em ocasionalmente trabalhar com alunos com Necessidades
            Complexas de Comunicação (NCC). Esta experiência profissional
            levou-me a questionar: O que poderia ser feito para que essas
            crianças e adolescentes conseguissem se socializar de maneira
            satisfatória não só no ambiente escolar, mas em todos os lugares?
          </p>
        </div>
      </section>
    </div>
  );
}
