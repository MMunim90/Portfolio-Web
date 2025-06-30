import React from "react";
import { Link as RouterLink } from "react-router";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer">
          Home
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer">
          About
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="projects" smooth={true} duration={500} className="cursor-pointer">
          Projects
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="skills" smooth={true} duration={500} className="cursor-pointer">
          Skills
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="education" smooth={true} duration={500} className="cursor-pointer">
          Education
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer">
          Contact
        </ScrollLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 text-base-content shadow-md sticky top-0 z-50">
      <div className="navbar-start">
        <RouterLink to="/" className="btn btn-ghost normal-case text-xl text-primary">
          Munim.dev
        </RouterLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{navItems}</ul>
      </div>
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            {/* Hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base-content"
          >
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
