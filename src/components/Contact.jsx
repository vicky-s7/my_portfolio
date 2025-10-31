import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_1ds2b3l",
        "template_zxmet8s",
        form.current,
        "23YQ5zf1ijzguKDKa"
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message ❌ Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 text-center bg-black text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-10 relative inline-block pb-2"
      >
        Contact Me
        <span className="block w-24 h-1 bg-red-500 mx-auto mt-2"></span>
      </motion.h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md mx-auto flex flex-col space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="p-3 bg-neutral-900 border border-red-500/40 rounded-md focus:outline-none focus:border-red-500 text-white placeholder-gray-400 transition-colors"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="p-3 bg-neutral-900 border border-red-500/40 rounded-md focus:outline-none focus:border-red-500 text-white placeholder-gray-400 transition-colors"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Message"
          required
          className="p-3 bg-neutral-900 border border-red-500/40 rounded-md focus:outline-none focus:border-red-500 text-white placeholder-gray-400 transition-colors"
        ></textarea>

        <button
          type="submit"
          className="bg-red-500 text-white py-3 font-semibold rounded-md hover:bg-red-600 transition-all duration-300"
        >
          Send Message
        </button>
        {status && (
          <p className="text-sm mt-3 text-gray-300">{status}</p>
        )}
      </form>

      <div className="flex justify-center gap-8 text-2xl mt-10">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:example@email.com"
          className="hover:text-red-500 transition-colors"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;
