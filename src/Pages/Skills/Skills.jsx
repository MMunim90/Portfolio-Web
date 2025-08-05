import React from "react";

import vscodelogo from '../../assets/vscode.png'
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

const skills = {
  Frontend: [
    { name: "HTML", level: 95, icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", level: 90, icon: <FaCss3Alt className="text-blue-500" /> },
    {
      name: "JavaScript",
      level: 90,
      icon: <FaJs className="text-yellow-400" />,
    },
    {
      name: "React.js",
      level: 85,
      icon: <FaReact className="text-cyan-400" />,
    },
    {
      name: "Tailwind CSS",
      level: 90,
      icon: <SiTailwindcss className="text-teal-400" />,
    },
  ],
  Backend: [
    {
      name: "Node.js",
      level: 70,
      icon: <FaNodeJs className="text-green-500" />,
    },
    {
      name: "Express.js",
      level: 70,
      icon: <SiExpress className="text-gray-400" />,
    },
    {
      name: "MongoDB",
      level: 65,
      icon: <SiMongodb className="text-green-600" />,
    },
    {
      name: "Firebase",
      level: 60,
      icon: <SiFirebase className="text-yellow-500" />,
    },
  ],
  Tools: [
    { name: "Git", level: 85, icon: <FaGitAlt className="text-orange-400" /> },
    { name: "GitHub", level: 85, icon: <FaGithub className="text-white" /> },
    {
  name: "VS Code",
  level: 90,
  icon: (
    <img
      src={vscodelogo}
      alt="VS Code"
      className="w-6 h-6"
    />
  ),
},
    { name: "Figma", level: 70, icon: <FaFigma className="text-pink-400" /> },
    {
      name: "Postman",
      level: 65,
      icon: <SiPostman className="text-orange-500" />,
    },
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="text-gray-300 py-16 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-4xl font-bold text-primary text-center border-b-4 border-white inline-block pb-2">
          My Skills
        </h2>

        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold text-white mb-4">
              {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {items.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{skill.icon}</div>
                    <div className="flex justify-between w-full">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted">{skill.level}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-base-300 rounded-full h-3">
                    <div
                      className="bg-primary h-3 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
