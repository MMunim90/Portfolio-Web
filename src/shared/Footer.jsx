import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-white">
          © {new Date().getFullYear()} MMunim. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0 text-indigo-500 text-lg">
          <a
            href="https://github.com/MMunim90"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-700 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/m-munim/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-700 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/__munim__"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-indigo-700 transition"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;