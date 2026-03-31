export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-900 text-center">
      
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>

      <p className="text-gray-300 mb-8">
        Feel free to reach out for opportunities, collaborations, or just to connect.
      </p>

      {/* Contact Info */}
      <div className="mb-8 text-gray-300">
        <p>Email: anithabakada282@gmail.com</p>
        <p>Phone: 073 446 2111</p>
        <a
          href="https://www.linkedin.com/in/anitha-bakada-22550a250"
          target="_blank"
          className="text-blue-400"
        >
          LinkedIn Profile
        </a>
      </div>

      {/* Contact Form */}
      <form className="max-w-md mx-auto flex flex-col gap-4">
        
        <input
          type="text"
          placeholder="Your Name"
          required
          className="p-3 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          required
          className="p-3 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Your Message"
          rows="4"
          required
          className="p-3 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-500 p-3 rounded font-semibold hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>

    </section>
  );
}