import img from './../../../public/figuras/Alfabeto/A.png'

interface Project {
  title: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Belatagarela TA CAA",
    image: img,
    link: "https://play.google.com/store/apps/details?id=belatagarela.ta.caa",
  },
  {
    title: "Bivox TA CAA",
    image: img,
    link: "https://play.google.com/store/apps/details?id=bivox.ta.caa",
  },
];

export function Projects(){
  return (
    <div className="container mx-auto my-10 p-6">
  <h2 className="text-4xl font-bold mb-4 text-center text-green-tertiary">Projetos</h2>
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 justify-center">
    {projects.map((project, index) => (
      <div key={index} className="relative bg-white rounded-lg shadow-lg overflow-hidden text-center transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl">
        <img src={`${project.image}`} alt={project.title} className="object-center object-contain h-60 sm:h-80 w-full rounded-t-lg" />
        <div className="absolute inset-0 rounded-lg bg-green-tertiary opacity-0 hover:opacity-80 transition-opacity duration-500 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold mb-2 text-white">{project.title}</h3>
          <a href={project.link} target="_blank" rel="noreferrer" className="text-orange-primary hover:text-orange-500">
            Ver mais
          </a>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

