import React from "react";
import fullStackImg from "../../assets/Full Stack.jpg"
import reactImg from "../../assets/react_basic certificate.jpg"
import webImg from "../../assets/dreamland it web certificate.jpg"
import codeInPlaceImg from "../../assets/code in place.jpg"
import BYEIImg from "../../assets/BYEI.png"
import arduinoImg from "../../assets/arduino certificate.jpg"
import { FaClock } from "react-icons/fa";

const courses = [
  {
    id: 1,
    name: "Code in Place 2025",
    under: "Stanford",
    duration: "1.5 Months",
    desc: "Learned Karel the Robot, Console Programming, Graphics, Lists and Dictionaries, Active Section Participation.",
    image: codeInPlaceImg,
    verifyLink: "https://codeinplace.stanford.edu/cip5/certificate/zxnevn",
  },
  {
    id: 2,
    name: "Web Design and Development",
    under: "Dreamland IT & Software",
    duration: "4 Months",
    desc: "HTML, CSS, (JS Concepts), WordPress.",
    image: webImg,
    verifyLink: "https://www.linkedin.com/posts/m-munim_got-it-after-many-many-months-activity-7300185192772640770-XL6q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFX7IFwBvB7ITFCWyEp5gPzhCxpTUH81s-8",
  },
  {
    id: 3,
    name: "React (Basic) Certificate",
    under: "HackerRank",
    duration: "2 Hours",
    desc: "It covers topics like Basic Routing, Rendering, State Management, Handling Events, ES6, JavaScript and Form Validation.",
    image: reactImg,
    verifyLink: "https://www.hackerrank.com/certificates/b0c9aa275fbe",
  },
  {
    id: 4,
    name: "Full Stack Development with MERN",
    under: "Grameenphone Academy",
    duration: "8 Hours",
    desc: "Learned React, Express, Firebase, Node JS, MongoDB basic.",
    image: fullStackImg,
    verifyLink: "https://www.linkedin.com/posts/m-munim_fullstackdeveloper-mern-webdevelopment-activity-7348170399307730945-UXs8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPgP-oB7SLMOkW3JMzQ4IGwR9MJq5mKFwU",
  },
  {
    id: 5,
    name: "Green Day Training (GDT)",
    under: "Bangladesh Youth Environmental Initiative (BYEI) & Bangladesh Earth Olympiad (BEO)",
    duration: "1 Day",
    desc: "Learned environmental education, sustainability, and climate changes on nature ",
    image: BYEIImg,
    verifyLink: "https://www.linkedin.com/posts/m-munim_bangladesh-youth-environmental-initiative-activity-7313451273381416960-njAF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPgP-oB7SLMOkW3JMzQ4IGwR9MJq5mKFwU",
  },
  {
    id: 6,
    name: "30 Days Masterclass on Arduino",
    under: "Gobeshona Learning Academy",
    duration: "30 Days",
    desc: "Learned Arduino, C Programming, IoT, EmbeddedSystems",
    image: arduinoImg,
    verifyLink: "https://www.linkedin.com/posts/m-munim_arduino-electronics-iot-activity-7346884691221803008-ihmH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPgP-oB7SLMOkW3JMzQ4IGwR9MJq5mKFwU",
  },
];

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className="text-base-content py-16 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary border-b-4 border-white inline-block pb-2 mb-8">
          Courses & Certificates
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="rounded-2xl overflow-hidden bg-gray-700/50 backdrop-blur border border-white/20 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative group">
                <img
                  src={course.image}
                  alt={course.name}
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white">{course.name}</h3>
                <p className="text-md text-gray-300 flex-grow">({course.under})</p>
                <p className="flex items-center gap-2 text-sm text-gray-300 flex-grow mb-6"><FaClock />{course.duration}</p>
                <p className="text-sm text-gray-300 flex-grow">{course.desc}</p>
              </div>

              {/* Sticky Button */}
              <div className="p-5 pt-0 mt-auto">
                <a
                  href={course.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition duration-300 sticky bottom-0"
                >
                  Verify Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
