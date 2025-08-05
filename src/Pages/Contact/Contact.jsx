import React from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="text-gray-300 py-16 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold text-primary border-b-4 inline-block border-white pb-2">
          Contact With Me
        </h2>
        <p className="text-lg text-white">
          Feel free to reach out to me through any of the following methods:
        </p>

        <div className="flex flex-col items-center gap-6 mt-8">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-white text-xl" />
            <a
              href="shahan.al.munim@gmail.com"
              className="hover:text-primary transition"
            >
              shahan.al.munim@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-white text-xl" />
            <a
              href="tel:+8801705620458"
              className="hover:text-primary transition"
            >
              +8801705-620458
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-white text-xl" />
            <a
              href="https://wa.me/8801705620458"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
