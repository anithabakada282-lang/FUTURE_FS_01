export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-slate-900 to-gray-800">
      <h1 className="text-6xl font-bold text-white">Hi, I'm ANITHA BAKADA </h1>
      <p className="mt-4 text-gray-300 text-xl">
        Full Stack Developer | React & Node.js Enthusiast
      </p>
      <div className="mt-6 flex space-x-4">
        <a
          href="#projects"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}