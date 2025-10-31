import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-center border-t border-red-500/30 mt-20 text-sm bg-black text-gray-400">
      © {new Date().getFullYear()} <span className="text-red-500 font-medium">Vicky</span> | All rights reserved.
    </footer>
  );
};

export default Footer;
