import React from "react";
import vscodelogo from "../../assets/vscode.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPostman,
} from "react-icons/si";
import Marquee from "react-fast-marquee";

const skills = {
  Frontend: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    {
      name: "VS Code",
      icon: <img src={vscodelogo} alt="VS Code" className="w-6 h-6" />,
    },
    { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="text-gray-300 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-primary text-center border-b-4 border-white inline-block pb-2">
          My Skills
        </h2>

        {Object.entries(skills).map(([category, items], index) => (
          <div key={category} className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">{category}</h3>

            <Marquee
              gradient={false}
              speed={50}
              pauseOnHover={true}
              direction={index === 1 ? "right" : "left"} // Backend row moves opposite
            >
              {items.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center text-center w-40 ml-32"
                >
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <span className="font-semibold text-lg">{skill.name}</span>
                </div>
              ))}
            </Marquee>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
