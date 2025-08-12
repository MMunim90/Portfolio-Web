import React, { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiSololearn } from "react-icons/si";

const SocialIcons = () => {
  const [isVisible, setIsVisible] = useState(false);

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/munim9munim",
      label: "Facebook",
      hoverColor: "hover:bg-indigo-700",
    },
    {
      icon: <FaTwitter />,
      url: "https://x.com/__munim__",
      label: "Twitter",
      hoverColor: "hover:bg-indigo-700",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/m-munim/",
      label: "LinkedIn",
      hoverColor: "hover:bg-indigo-700",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/MMunim90",
      label: "GitHub",
      hoverColor: "hover:bg-indigo-700",
    },
    {
      icon: <SiSololearn />,
      url: "https://www.sololearn.com/en/profile/29786474",
      label: "Sololearn",
      hoverColor: "hover:bg-indigo-700",
    },
  ];

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 600);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <div className="fixed bottom-12 left-3 md:bottom-20 md:left-0.5 lg:bottom-[400px] lg:left-8 z-50 flex flex-col gap-3">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={`p-3 rounded-full bg-primary text-white shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-110 hover:-translate-y-1 ${link.hoverColor}`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    )
  );
};

export default SocialIcons;
