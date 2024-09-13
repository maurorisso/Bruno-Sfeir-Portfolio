import React, { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Collections", href: "/#collections" },
  { name: "Contact", href: "/#contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between bg-slate-800 text-white p-4 sticky top-0 z-10">
      <a href="/" class="cursor-pointer text-3xl font-semibold">
        Bruno Sfeir
      </a>
      {/* Burger Icon (Visible on Mobile) */}
      <button
        className="md:hidden block focus:outline-none"
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

      {/* Navigation Links */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row md:items-center absolute md:relative right-0 top-12 md:top-auto md:right-auto bg-slate-800 md:bg-transparent p-2 z-20`}
      >
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="
              hover:text-slate-400
              text-center 
              transition-colors
              duration-200
              ease-in-out
              text-sm
             p-2
             md:py-0
             mde:px-2
              font-inter
              block
              md:text-left
              md:inline"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
