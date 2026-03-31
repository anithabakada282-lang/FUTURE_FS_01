export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-center">
      <h2 className="text-4xl font-bold mb-10">Contact 073-446-2111</h2>
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="p-3 rounded bg-slate-800 text-white"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded bg-slate-800 text-white"
        />
        <textarea
          placeholder="Message"
          className="p-3 rounded bg-slate-800 text-white"
        />
        <button className="bg-blue-500 p-3 rounded font-semibold hover:bg-blue-600 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}