import React from "react";
import { motion } from "framer-motion";

const skills = [
  "C Programming",
  "Java",
  "Python",
  "MERN",
  "MS 360",
  "Git",
  "GitHub",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 text-center bg-black text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-10 relative inline-block pb-2"
      >
        Skills
        <span className="block w-16 h-1 bg-red-500 mx-auto mt-2"></span>
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="border border-red-500/50 rounded-lg py-6 bg-neutral-900 hover:bg-neutral-800 transition-all duration-300"
          >
            <p className="font-semibold">{skill}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
