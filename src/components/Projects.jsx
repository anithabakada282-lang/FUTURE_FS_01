export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* Project Card */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold">FUTURE_FS_01</h3>

          <p className="text-gray-300 mt-3">
            A modern portfolio website built with React and Vite, showcasing my
            development skills and projects.
          </p>

          <a
            href="https://github.com/anithabakada282-lang/FUTURE_FS_01"
            target="_blank"
            className="text-blue-400 mt-4 inline-block"
          >
            View Code →
          </a>
        </div>

      </div>
    </section>
  );
}