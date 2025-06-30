import React from 'react';
import { Link } from "react-scroll";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
      </li>
      <li>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
      </li>
      <li>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
      </li>
      <li>
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
      </li>
      <li>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 text-base-content shadow-md sticky top-0 z-50">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl text-primary">
          Munim.dev
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{navItems}</ul>
      </div>
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
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
