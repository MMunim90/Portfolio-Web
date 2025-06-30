import React from 'react';
import profilePic from "../../assets/munim.jpg";

const Intro = () => {
    return (
        <section
      id="home"
      className="min-h-screen bg-base-100 text-base-content flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12"
    >
      {/* Left: Text */}
      <div className="max-w-xl space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          MD. SHAHAN AL MUNIM
        </h1>
        <h2 className="text-2xl font-medium text-secondary">
          Frontend Developer & UI Enthusiast
        </h2>
        <p className="text-lg text-info leading-relaxed">
          I craft responsive web interfaces using modern JavaScript tools and love building elegant, user-friendly experiences. Currently focusing on React.js and UI-driven design.
        </p>
        <div className="pt-4">
          <a
            href="#contact"
            className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            Let’s Connect
          </a>
        </div>
      </div>

      {/* Right: Image */}
      <div className="mb-10 md:mb-0">
        <img
          src={profilePic}
          alt="MD. SHAHAN AL MUNIM"
          className="w-56 h-56 md:w-64 md:h-64 lg:w-92 lg:h-92 object-cover rounded-full shadow-lg border-4 border-base-300"
        />
      </div>
    </section>
    );
};

export default Intro;