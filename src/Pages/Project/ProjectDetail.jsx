import React from "react";
import { useParams } from "react-router";

const projectDetails = {
  "marathon-management-system": {
    name: "Runfinity",
    image: "https://i.ibb.co/1Yd89Hr5/Screenshot-2025-06-25-165554.png",
    tech: [
      "cors",
      "dotenv",
      "firebase",
      "express",
      "mongodb",
      "react-router",
      "sweetalert2",
      "axios",
      "jsonwebtoken",
      "lottie",
      "swiper",
      "date-fns",
      "reactdom",
      "tailwindcss",
      "reacttooltip",
      "reacticons",
      "reactdatepicker",
      "firebaseadmin",
      "reacttoastify",
      "reacthelmet",
    ],
    description:
      "Runfinity is a Marathon Management Platform designed to simplify the organization and participation of marathon events. It allows organizers to manage registrations, schedules, routes, and results efficiently, while providing runners with easy access to event details, tracking, and updates. Runfinity enhances the overall marathon experience by promoting seamless communication, real-time updates, and data-driven insights, making marathon planning and participation more organized, engaging, and efficient for everyone involved.",
    liveLink: "https://marathon-management-syst-9bb4a.web.app/",
    github: "https://github.com/MMunim90/Marathon-management-system-client",
    challenges: "",
    improvements: "",
  },

  "roommate-finder-client": {
    name: "Find Mate",
    image: "https://i.ibb.co/HDCphMqd/Screenshot-2025-06-25-161456.png",
    tech: [
      "cors",
      "dotenv",
      "firebase",
      "express",
      "mongodb",
      "react-router",
      "sweetalert2",
      "axios",
      "lottie",
      "swiper",
      "reactdom",
      "tailwindcss",
      "reacttooltip",
      "reacticons",
      "reactdatepicker",
      "firebaseadmin",
      "reacttoastify",
      "reacthelmet",
    ],
    description:
      "Find Mate is a roommate finding platform designed to connect individuals with compatible living partners based on preferences, location, budget, and lifestyle. It simplifies the search process through verified profiles and listings, ensuring safety and trust. Whether you're looking for a room or a roommate, Find Mate helps you find the right match quickly and easily, making shared living more comfortable, convenient, and stress-free.",
    liveLink: "https://find-mate-app.web.app/",
    github: "https://github.com/MMunim90/roommate-finder-client",
    challenges: "",
    improvements: "",
  },

  "Subscription-box-project": {
    name: "Sub's Now Bro",
    image: "https://i.ibb.co/23pNGjdv/Screenshot-2025-06-25-155503.png",
    tech: [
      "react",
      "firebase",
      "sweetalert2",
      "swiper",
      "reactrouter",
      "tailwindcss",
      "vite",
      "daisyui",
      "reacttoastify",
      "reactcounter",
      "reacthelmet",
    ],
    description:
      " The project focuses on creating a Subscription Box Service Platform that enables users to easily browse, subscribe to, and manage monthly subscription boxes based on their preferences. This service offers a personalized experience where customers can select boxes for various products or services. Each box is curated with items tailored to the user’s interests, ensuring that they receive something new and exciting each month.",
    liveLink: "https://subscription-box-9dcac.web.app/",
    github: "https://github.com/MMunim90/Subscription-box-project",
    challenges: "",
    improvements: "",
  },
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectDetails[slug];

  if (!project)
    return (
      <div className="text-center text-error mt-12">Project not found.</div>
    );

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-base-100 text-base-content">
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-primary">{project.name}</h2>
        <img
          src={project.image}
          alt={project.name}
          className="rounded-lg shadow-md"
        />

        <p className="text-lg">{project.description}</p>

        <div>
          <h3 className="text-xl font-semibold mt-6 mb-2 text-secondary">
            Technology Stack:
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="bg-primary text-base-100 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-secondary mt-6 mb-2">
            Challenges Faced:
          </h3>
          <p>{project.challenges}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-secondary mt-6 mb-2">
            Future Improvements:
          </h3>
          <p>{project.improvements}</p>
        </div>

        <div className="flex gap-4 pt-6">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Live Site
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            GitHub (Client)
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
