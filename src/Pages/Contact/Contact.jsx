import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPaperPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");

    emailjs
      .sendForm(
        "service_gnqik3t",
        "template_8ddilyn",
        form.current,
        "RaoYyjQ-t5KstnekQ"
      )
      .then(
        () => {
          setLoading(false);
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been sent successfully.",
            confirmButtonColor: "#065dff",
          });
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          Swal.fire({
            icon: "error",
            title: "Failed to Send",
            text: "Something went wrong. Please try again.",
            confirmButtonColor: "#EF4444",
          });
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-12 lg:px-24 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary border-b-4 border-white inline-block pb-2 mb-12">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Info */}
          <div className="px-6">
            <p className="text-xl text-white">
              Feel free to reach out to me through any of the following methods:
            </p>

            <div className="flex flex-col items-start gap-6 mt-8">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-white text-xl" />
                <a
                  href="mailto:shahan.al.munim@gmail.com"
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

          {/* Right Side - Email Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="p-6 rounded-2xl shadow-lg space-y-4"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                required
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-primary opacity-65"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-primary opacity-65"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                required
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-primary opacity-65 min-h-12"
              ></textarea>
            </div>

            {successMsg && <p className="text-sm text-center">{successMsg}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Mail <FaPaperPlane />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
