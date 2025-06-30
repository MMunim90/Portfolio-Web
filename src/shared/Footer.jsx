import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-6 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-white">
          © {new Date().getFullYear()} MD. SHAHAN AL MUNIM. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0 text-primary text-lg">
          <a
            href="https://github.com/MMunim90"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-secondary transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/m-munim/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-secondary transition"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/__munim__"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-secondary transition"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;