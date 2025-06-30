import React from "react";
import { useParams } from "react-router";

const projectDetails = {
  "marathon-management-system": {
    name: "Runfinity",
    image: "https://i.ibb.co/1Yd89Hr5/Screenshot-2025-06-25-165554.png",
    tech: ["React", "Tailwind CSS", "MongoDB", "Express"],
    description:
      "A full-stack parcel delivery web app with parcel tracking and admin dashboard.",
    liveLink: "https://your-live-link.com",
    github: "https://github.com/youruser/parcel-client",
    challenges:
      "Handling real-time tracking and map integration using Leaflet.js.",
    improvements:
      "Add real-time chat between rider and client, improve parcel status animation.",
  },
  "word-guess": {
    name: "Word Guess Game",
    image: "/images/wordguess.png",
    tech: ["JavaScript", "HTML", "CSS"],
    description: "A browser game to guess hidden words with limited attempts.",
    liveLink: "https://your-wordguess.vercel.app",
    github: "https://github.com/youruser/wordguess",
    challenges: "Managing state transitions with limited JS.",
    improvements: "Add sound effects, difficulty modes, leaderboard.",
  },
  "flappy-bird": {
    name: "Flappy Bird Game",
    image: "/images/flappy.png",
    tech: ["JavaScript", "Canvas API"],
    description:
      "A clone of the classic Flappy Bird game with animations and scoring.",
    liveLink: "https://your-flappybird.vercel.app",
    github: "https://github.com/youruser/flappybird",
    challenges: "Collision detection, game state control, responsive canvas.",
    improvements: "Add levels, new themes, mobile touch support.",
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
