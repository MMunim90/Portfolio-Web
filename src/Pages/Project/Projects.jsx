import React from "react";
import { Link } from "react-router";

const projects = [
  {
    id: 1,
    name: "Marathon Management System",
    image: "https://i.ibb.co/1Yd89Hr5/Screenshot-2025-06-25-165554.png",
    slug: "marathon-management-system",
  },
  {
    id: 2,
    name: "Word Guess Game",
    image: "/images/wordguess.png",
    slug: "word-guess",
  },
  {
    id: 3,
    name: "Flappy Bird with JavaScript",
    image: "/images/flappy.png",
    slug: "flappy-bird",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-base-100 text-base-content py-16 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary border-b-4 border-accent inline-block pb-2 mb-8">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card bg-base-200 shadow-md flex flex-col"
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
                  className="btn btn-outline btn-primary mt-auto"
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
