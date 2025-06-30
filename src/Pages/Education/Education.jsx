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
    duration: "2014 – 2019",
    status: "Completed",
    GPA: "5.00",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-base-100 text-base-content py-16 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-4xl font-bold text-primary border-b-4 border-accent inline-block pb-2">
          Education
        </h2>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="p-4 border border-base-300 rounded-lg shadow-sm bg-base-200 space-y-2"
            >
              <div className="flex items-center gap-4 mb-2">
                <FaGraduationCap className="hidden md:block text-secondary text-xl" />
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
              </div>
              <p className="text-sm text-muted">{edu.institution}</p>
              <p className="text-sm text-info">{edu.duration}</p>
              <p className="text-sm">{edu.status}</p>
              <p className="text-sm">GPA: {edu.GPA}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;