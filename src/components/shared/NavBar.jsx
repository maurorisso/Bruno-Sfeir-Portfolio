import React, { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Collections", href: "/#collections" },
  { name: "Contact", href: "/#contact" },
  { name: "CV", href: "/cv" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between bg-slate-800/95 backdrop-blur-sm text-white p-4 sticky top-0 z-10 border-b border-slate-700">
      <a
        href="/"
        className="cursor-pointer text-3xl font-semibold tracking-wide hover:text-slate-200 transition-colors"
      >
        Bruno Sfeir
      </a>

      <button
        className="md:hidden block focus:outline-none hover:text-slate-300 transition-colors"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row md:items-center absolute md:relative right-0 top-14 md:top-auto md:right-auto bg-slate-800 md:bg-transparent p-2 z-20 w-full md:w-auto border-b border-slate-700 md:border-none`}
      >
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="
              hover:text-slate-300
              text-center 
              transition-colors
              duration-200
              ease-in-out
              text-sm
              p-3
              md:py-1
              md:px-4
              font-medium
              tracking-wide
              block
              md:inline
              border-b
              border-transparent
              hover:border-slate-300
              md:hover:border-transparent
            "
          >
            {link.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
