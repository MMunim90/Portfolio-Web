import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-base-100 text-base-content py-16 px-4 md:px-8 lg:px-16 flex items-center"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-4xl font-bold text-primary mb-4 border-b-4 border-accent inline-block pb-1">
          About Me
        </h2>

        <p className="text-lg leading-relaxed">
          Hello! I'm{" "}
          <span className="text-accent font-semibold">MD. SHAHAN AL MUNIM</span>
          , a passionate programmer from Bangladesh, currently pursuing my
          Bachelor's in Computer Science & Engineering. My programming journey
          started out of curiosity and quickly turned into a deep passion for
          building things that matter.
        </p>

        <p className="text-lg leading-relaxed">
          I enjoy working on{" "}
          <span className="text-highlight font-semibold">web development</span>{" "}
          projects, especially crafting interactive UIs and exploring modern
          JavaScript frameworks like{" "}
          <span className="text-primary font-medium">React</span>. I also have a
          growing interest in{" "}
          <span className="text-primary font-medium">machine learning</span> and
          love solving problems that challenge both logic and creativity.
        </p>

        <p className="text-lg leading-relaxed">
          Outside of coding, you'll find me diving into the world of{" "}
          <span className="text-accent font-medium">gaming</span>, exploring the
          latest in <span className="text-highlight">tech gadgets</span>, and
          occasionally enjoying a good football match. I believe that balance
          between work and hobbies helps me stay creative and motivated.
        </p>

        <p className="text-lg leading-relaxed">
          I'm always looking to collaborate on exciting projects or learn
          something new. Whether it's building websites, solving problems, or
          experimenting with code—I'm all in. Let's connect and create something
          awesome!
        </p>
      </div>
    </section>
  );
};

export default About;
