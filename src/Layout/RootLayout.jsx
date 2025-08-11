import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import ScrollToTopButton from '../shared/ScrollToTopButton';
import SocialIcons from '../shared/SocialIcons';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[url('https://i.ibb.co/sdnBcMS5/bg.gif')]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <SocialIcons></SocialIcons>
            <ScrollToTopButton></ScrollToTopButton>
        </div>
    );
};

export default RootLayout;