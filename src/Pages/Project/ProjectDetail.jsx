import React from "react";
import { useParams } from "react-router";

const projectDetails = {
  "real-estate-platform": {
  "name": "BrickBase",
  "image": "https://i.ibb.co/0VW7M2g4/Screenshot-2025-07-21-173448.png",
  "tech": [
    "react",
    "nodejs",
    "express",
    "mongodb",
    "tailwindcss",
    "daisyui",
    "firebase",
    "jsonwebtoken",
    "axios",
    "react-router",
    "sweetalert2",
    "react-icons",
    "cloudinary",
    "multer",
    "stripe",
    "mongoose"
  ],
  "description": "BrickBase is a modern real estate platform that connects buyers, sellers, agents, and admins through a role-based experience. It allows users to explore, wishlist, and make offers on properties; agents to manage listings; and admins to oversee fraud detection and reporting. The platform ensures secure communication, verified listings, and a user-friendly property search experience, streamlining the entire real estate process from discovery to deal closure.",
  liveLink: "https://brickbase-47887.web.app/",
  github: "https://github.com/MMunim90/real-estate-platform-client",
  challenges: "Ensuring role-based access and permissions for different user types was complex. Implementing secure login, wishlist, reporting, and offer management involved intricate backend logic. Managing image uploads and file validation using Cloudinary and Multer added extra layers of complexity. Building scalable MongoDB schemas for properties, users, offers, and reports required thoughtful planning. Designing a responsive, intuitive UI across all devices while maintaining performance was also challenging.",
  improvements: "Add real-time chat between agents and buyers. Integrate a map-based property search experience. Implement advanced search filters and saved search alerts. Add multi-step property submission forms with draft save capability. Launch native mobile apps for better user engagement. Incorporate machine learning for personalized property recommendations."
},

  "marathon-management-system": {
    name: "Runfinity",
    image: "https://i.ibb.co.com/GQK5DBPj/Screenshot-2025-08-09-001551.png",
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
    challenges:
      "Ensuring smooth real-time updates and data synchronization across users was challenging. Designing an intuitive interface for both organizers and runners required careful UX planning. Handling secure registration and payment processes while maintaining data privacy was complex. Efficiently managing large datasets for race results and route mapping demanded optimized database solutions. Integrating external APIs for maps and live tracking added reliability challenges.",

    improvements:
      "Develop mobile apps for better accessibility and real-time notifications. Add advanced analytics dashboards for organizers to analyze event data. Introduce social features like runner profiles and achievement badges to boost engagement. Enhance live tracking with GPS and augmented reality. Expand multi-language support and localization. Implement AI-based personalized training plans for runners.",
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
    challenges:
      "Ensuring accurate matching based on diverse preferences like lifestyle, budget, and location was complex. Verifying profiles to maintain user trust and safety required robust validation systems. Designing a user-friendly interface for seamless searching and communication posed usability challenges. Handling privacy and security of sensitive user data was critical. Managing real-time availability updates and notifications added technical complexity.",

    improvements:
      "Implement AI-driven matching algorithms to improve compatibility accuracy. Add real-time chat and video call features for better communication between users. Introduce background verification and rating systems to enhance trust. Develop mobile apps for easier access and instant alerts. Expand filters and search criteria to cover more user preferences. Incorporate community features like forums and tips for shared living.",
  },

  "Subscription-box-project": {
    name: "Sub's Now Bro",
    image: "https://i.ibb.co.com/23XRd7jK/Screenshot-2025-08-09-000400.png",
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
    challenges:
      "Building a personalized recommendation system to match users’ preferences with curated boxes was challenging. Managing subscription lifecycle events such as renewals, cancellations, and payments required careful handling. Ensuring timely inventory management and coordination with suppliers posed logistical difficulties. Designing an intuitive interface for browsing, subscribing, and managing subscriptions needed user-centric UX focus. Handling secure payment processing and protecting user data were critical priorities.",

    improvements:
      "Implement advanced AI-based personalization to improve box recommendations. Add flexible subscription management options like pausing or customizing deliveries. Integrate real-time inventory tracking with suppliers for better fulfillment. Develop mobile apps to facilitate browsing and managing subscriptions on the go. Introduce loyalty rewards and referral programs to increase customer retention. Enhance analytics dashboards for better business insights and customer trends.",
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
    <section className="py-16 px-6 md:px-12 lg:px-24 text-base-content">
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-primary">{project.name}</h2>
        <img
          src={project.image}
          alt={project.name}
          className="rounded-lg shadow-md border-3 border-gray-400"
        />

        <p className="text-lg text-gray-400">{project.description}</p>

        <div>
          <h3 className="text-xl font-semibold mt-6 mb-2 text-white">
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
          <h3 className="text-xl font-semibold text-white mt-6 mb-2">
            Challenges Faced:
          </h3>
          <p className="text-gray-400">{project.challenges}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mt-6 mb-2">
            Future Improvements:
          </h3>
          <p className="text-gray-400">{project.improvements}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 pt-6 items-center">
          <div className="flex gap-4">
            <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary hover:bg-indigo-700"
          >
            Live Site
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline border-2 border-gray-400 text-gray-400 hover:text-white hover:bg-gray-400"
          >
            GitHub (Client)
          </a>
          </div>
          <a
            href={"/"}
            rel="noreferrer"
            className="btn btn-primary hover:bg-indigo-700"
          >
            Back
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
