import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-slate-900 p-4 flex justify-between items-center shadow-md z-50">
      <h1 className="font-bold text-xl">ANITHA BAKADA </h1>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-blue-500 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <span className="text-2xl">{isOpen ? "✖" : "☰"}</span>
        </button>
        {isOpen && (
          <div className="absolute right-4 mt-2 bg-slate-800 rounded shadow-md py-2 flex flex-col space-y-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1 hover:text-blue-500"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}