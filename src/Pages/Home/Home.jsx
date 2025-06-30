import React from 'react';
import About from '../About/About';
import Intro from '../Intro/Intro';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Projects from '../Project/Projects';

const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;