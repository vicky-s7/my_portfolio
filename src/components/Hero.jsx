import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "../assets/img.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 px-6 pt-24 bg-black text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left max-w-lg"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I’m{" "}
          <span className="text-red-500">
            Vicky...
          </span>
        </h2>

        <h3 className="text-xl md:text-2xl mb-4 text-gray-300">
          I’m a Web Developer & BCA Student
        </h3>

        <p className="text-gray-400 mb-6">
          Passionate about building modern web experiences, exploring new
          technologies, and learning by creating.
        </p>

        <a
          href="#contact"
          className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:shadow-[0_0_15px_#ec4899] transition-shadow"
        >
          Hire Me
        </a>

        <div className="flex justify-center md:justify-start gap-6 mt-8 text-2xl">
          <a
            href="https://github.com/dashboard"
            className="hover:text-red-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vicky-tombare-599430323/"
            className="hover:text-red-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:vicky2@example.com"
            className="hover:text-red-400 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
        {/* <div className="mt-6">
          <a
            href=""
            download
            className="inline-block px-6 py-3 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 hover:shadow-[0_0_15px_#ff2e63] transition"
          >
            Download Resume
          </a>
        </div> */}
      </motion.div>

      {/* RIGHT IMAGE SECTION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-full bg-red-500 blur-3xl opacity-30"></div>
        <img
          src={profile}
          alt="Vicky"
          className="relative w-60 h-60 object-cover rounded-full border-4 border-red-500 shadow-xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
