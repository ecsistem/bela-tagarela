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
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold text-center mb-8">Projetos</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2  justify-center">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden text-center transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl">
            <img src={`${project.image}`} alt={project.title} className="object-cover h-60 w-full" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700">
                Ver mais
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

