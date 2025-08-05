import React from "react";
import About from "../About/About";
import Intro from "../Intro/Intro";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Projects from "../Project/Projects";
import { keyframes } from "@emotion/react";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const slightFadeDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px); 
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
  return (
    <div>
      <Fade direction="down" keyframes={slightFadeDown}>
        <Intro></Intro>
      </Fade>
      <Fade direction="down" keyframes={slightFadeDown}>
        <About></About>
      </Fade>
      <Fade direction="down" keyframes={slightFadeDown}>
        <Skills></Skills>
      </Fade>
      <Fade direction="down" keyframes={slightFadeDown}>
        <Education></Education>
      </Fade>
      <Fade direction="down" keyframes={slightFadeDown}>
        <Projects></Projects>
      </Fade>
      <Fade direction="down" keyframes={slightFadeDown}>
        <Contact></Contact>
      </Fade>
    </div>
  );
};

export default Home;
