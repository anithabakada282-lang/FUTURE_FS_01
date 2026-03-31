export default function Skills() {
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "Git",
    "GitHub",
  ];

  return (
    <section id="skills" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-slate-800 px-5 py-2 rounded-lg hover:bg-blue-500 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}