import React from 'react';
import About from '../About/About';
import Intro from '../Intro/Intro';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <About></About>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Home;