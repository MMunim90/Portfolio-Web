import React from "react";
import { Link } from "react-router";

const projects = [
  {
    id: 1,
    name: "Real Estate Platform",
    image: "https://i.ibb.co/0VW7M2g4/Screenshot-2025-07-21-173448.png",
    slug: "real-estate-platform",
  },
  {
    id: 2,
    name: "Marathon Management System",
    image: "https://i.ibb.co/1Yd89Hr5/Screenshot-2025-06-25-165554.png",
    slug: "marathon-management-system",
  },
  {
    id: 3,
    name: "Roommate Finding Platform",
    image: "https://i.ibb.co/HDCphMqd/Screenshot-2025-06-25-161456.png",
    slug: "roommate-finder-client",
  },
  {
    id: 4,
    name: "Subscription Box Project",
    image: "https://i.ibb.co/23pNGjdv/Screenshot-2025-06-25-155503.png",
    slug: "Subscription-box-project",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card bg-gray-400 shadow-md flex flex-col border-3 border-white"
            >
              <figure>
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-48 object-cover w-full"
                />
              </figure>
              <div className="card-body flex flex-col flex-grow">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <Link
                  to={`/projects/${project.slug}`}
                  className="btn btn-outline btn-primary mt-auto text-white"
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
