import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 bg-transparent backdrop-blur-sm z-50 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
       <div className="flex items-center space-x-3">
          <img
            src="/v.png"
            alt="Logo"
            className="w-15 h-20 object-contain"
          />
          {/* <h1 className="text-2xl font-bold text-red-500">Vicky...</h1> */}
        </div>

        <ul className="hidden md:flex space-x-8">
          {["Home", "Skills", "Projects", "Contact"].map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-red-500 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
