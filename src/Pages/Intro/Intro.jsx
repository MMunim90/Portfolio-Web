import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profilePic from "../../assets/munim.jpg";

const Intro = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-base-100 text-base-content flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12"
    >
      {/* Left Side: Text Content */}
      <div className="max-w-xl space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          MD. SHAHAN AL MUNIM
        </h1>
        <h2 className="text-2xl font-medium text-secondary">
          Frontend Developer & UI Enthusiast
        </h2>
        <p className="text-lg text-info leading-relaxed">
          I craft responsive web interfaces using modern JavaScript tools and
          love building elegant, user-friendly experiences. Currently focusing
          on React.js and UI-driven design.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white transition"
          >
            Let’s Connect
          </a>

          <a
            href="https://drive.google.com/file/d/1PHQ2k1rBPgHfwhnRzzwNkAL_-oIZ7m4M/view?usp=drive_link"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline border-secondary text-secondary hover:bg-secondary hover:text-white transition"
          >
            Download Resume
          </a>
        </div>

        {/* Social Media Buttons */}
        <div className="flex gap-6 pt-8 justify-center md:justify-start text-primary text-2xl">
          <a
            href="https://github.com/MMunim90"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-secondary transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/m-munim/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-secondary transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/__munim__"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-secondary transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Right: Image */}
      <div className="mb-10 md:mb-0">
        <img
          src={profilePic}
          alt="MD. SHAHAN AL MUNIM"
          className="w-56 h-56 md:w-64 md:h-64 lg:w-92 lg:h-92 object-cover rounded-full shadow-lg border-4 border-base-300"
        />
      </div>
    </section>
  );
};

export default Intro;