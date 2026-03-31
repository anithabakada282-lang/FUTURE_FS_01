const skillList = [
  { name: "React", color: "bg-blue-500" },
  { name: "Node.js", color: "bg-green-500" },
  { name: "JavaScript", color: "bg-yellow-400" },
  { name: "HTML & CSS", color: "bg-orange-400" },
  { name: "Tailwind CSS", color: "bg-teal-500" },
  { name: "Git & GitHub", color: "bg-gray-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 text-center bg-slate-900">
      <h2 className="text-4xl font-bold mb-10">Skills & Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-6 px-6">
        {skillList.map((skill) => (
          <div
            key={skill.name}
            className={`px-6 py-4 rounded-lg text-white font-semibold shadow-lg ${skill.color}`}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}