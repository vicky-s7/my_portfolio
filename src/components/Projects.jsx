import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Portfolio Website",
    description: "My personal portfolio built with React, Vite, and Tailwind CSS.",
    live: "#",
    code: "https://github.com/vicky-s7/my_portfolio",
  },
  {
    name: "",
    description: "",
    live: "",
    code: "",
  },
  {
    name: "",
    description: "",
    live: "",
    code: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 text-center bg-black text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-10 relative inline-block pb-2"
      >
        Projects
        <span className="block w-20 h-1 bg-red-500 mx-auto mt-2"></span>
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-neutral-900 border border-red-500/30 rounded-lg overflow-hidden shadow-md hover:shadow-[0_0_20px_#ef4444aa] transition-all duration-300"
          >
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-red-400">
                  {project.name}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
              </div>
              <div className="flex justify-center gap-4 mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-red-500 text-white rounded-md font-medium hover:bg-red-600 transition-colors"
                >
                  Live
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-red-500 text-red-400 rounded-md font-medium hover:bg-red-500 hover:text-white transition-colors"
                >
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
