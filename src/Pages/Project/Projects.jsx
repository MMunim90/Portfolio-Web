import React from "react";
import { Link } from "react-router";

const projects = [
  {
    id: 1,
    name: "Real Estate Platform",
    image: "https://i.ibb.co/0VW7M2g4/Screenshot-2025-07-21-173448.png",
    slug: "real-estate-platform",
    desc: "A platform to buy, sell, and manage properties."
  },
  {
    id: 2,
    name: "Marathon Management System",
    image: "https://i.ibb.co.com/GQK5DBPj/Screenshot-2025-08-09-001551.png",
    slug: "marathon-management-system",
    desc: "Manage marathon events, registrations, and results in one place."
  },
  {
    id: 3,
    name: "Roommate Finding Platform",
    image: "https://i.ibb.co/HDCphMqd/Screenshot-2025-06-25-161456.png",
    slug: "roommate-finder-client",
    desc: "Helps users find compatible roommates with filters and preferences."
  },
  {
    id: 4,
    name: "Subscription Box Project",
    image: "https://i.ibb.co.com/23XRd7jK/Screenshot-2025-08-09-000400.png",
    slug: "Subscription-box-project",
    desc: "subscription box service"
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="text-base-content py-16 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-primary border-b-4 border-white inline-block pb-2 mb-8">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl overflow-hidden bg-gray-700/50 backdrop-blur border border-white/20 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                <p className="text-sm text-gray-300 flex-grow">{project.desc}</p>
                <Link
                  to={`/projects/${project.slug}`}
                  className="mt-4 inline-block text-center bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
