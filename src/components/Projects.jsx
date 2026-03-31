const projects = [
  {
    name: "Portfolio Website",
    description: "A personal website to showcase my projects and skills",
    link: "#",
    github: "#",
  },
  {
    name: "Task Manager App",
    description: "A full-stack task management application with authentication",
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-800 text-center">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 px-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-slate-700 p-6 rounded-lg shadow-lg flex flex-col justify-between"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex justify-between">
              <a
                href={project.github}
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
              <a
                href={project.link}
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}