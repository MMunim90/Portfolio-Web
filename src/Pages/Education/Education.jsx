import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "World University of Bangladesh",
    duration: "2023 – Present",
    status: "Ongoing",
    GPA: " ",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Aman-ullah College",
    duration: "2019 – 2021",
    status: "Completed",
    GPA: "5.00",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Vihari Pilot High School",
    duration: "2017 – 2019",
    status: "Completed",
    GPA: "5.00",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="text-base-content py-16 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-4xl font-bold text-primary border-b-4 border-white inline-block pb-2">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-gray-700/50 backdrop-blur border border-white/20 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col p-6"
            >
              {/* Icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/20 rounded-full">
                  <FaGraduationCap className="text-primary text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-white leading-snug">
                  {edu.degree}
                </h3>
              </div>

              {/* Content */}
              <p className="text-sm text-gray-300 font-bold">{edu.institution}</p>
              <p className="text-sm text-gray-300">{edu.duration}</p>
              <p className="text-sm text-gray-300">{edu.status}</p>
              {edu.GPA.trim() && (
                <p className="text-sm text-gray-300">GPA: {edu.GPA}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
