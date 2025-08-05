import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen text-base-content py-6 px-4 md:px-8 lg:px-16 flex items-center font-sans"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-4xl font-bold text-primary mb-4 border-b-4 border-white inline-block pb-1">
          About Me
        </h2>

        <p className="text-lg leading-relaxed text-gray-300">
          Hello! I'm{" "}
          <span className="font-semibold">MD. SHAHAN AL MUNIM</span>
          , a passionate programmer from{" "}
          <span className="font-medium">Bangladesh</span>, currently
          pursuing my Bachelor's in{" "}
          <span className="font-semibold">Computer Science & Engineering</span>. My programming journey
          started out of curiosity and quickly turned into a deep passion for
          building things that matter.
        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          I enjoy working on{" "}
          <span className="font-semibold">web development</span>{" "}
          projects, especially crafting interactive UIs and exploring modern
          JavaScript frameworks like{" "}
          <span className="font-medium">React</span>. I also have a
          growing interest in{" "}
          <span className="font-medium">machine learning</span> and
          love solving problems that challenge both logic and creativity.
        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          Outside of coding, you'll find me diving into the world of{" "}
          <span className="font-medium">gaming</span>, exploring the
          latest in{" "}
          <span className="font-medium">tech gadgets</span>, and
          occasionally enjoying a good{" "}
          <span className="font-medium">football match</span>. I
          believe that balance between work and hobbies helps me stay creative
          and motivated.
        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          I'm always looking to collaborate on exciting projects or learn
          something new. Whether it's building websites, solving problems, or
          experimenting with code—I'm all in.{" "}
          <span className="font-semibold">Let's connect</span> and
          create something awesome!
        </p>
      </div>
    </section>
  );
};

export default About;
