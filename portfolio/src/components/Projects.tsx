
function Projects() {
  const projects = [
    {
      title: "Visa Application",
      description:
        "A modern visa application system built with React, TypeScript, Redux Toolkit and Tailwind CSS.",
      image: "/visa.jpg",
      github: "https://github.com/ikraancabdiqani63-web/React",
      demo: "#",
    },
    {
      title: "Admin Dashboard",
      description:
        "A responsive admin dashboard with charts, statistics and user management.",
      image: "/dashboard.jpg",
      github: "https://github.com/ikraancabdiqani63-web/React",
    },
  ];

  return (
    <section id="projects" className="bg-slate-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center">My Projects</h2>

        <p className="text-gray-400 text-center mt-4">
          Here are some of my recent projects.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="text-gray-400 mt-3">{project.description}</p>
                  <a
                    href={project.github}
                    className="border border-cyan-400 px-5 py-2 rounded-lg hover:bg-cyan-400 hover:text-slate-900"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
