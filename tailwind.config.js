import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        primary: "#6b7280",   
        accent: "#22c55e",
        highlight: "#0ea5e9",
        text: "#f8fafc",
        muted: "#94a3b8",
        card: "#1e293b",
      },
    },
  },

  daisyui: {
    themes: [
      {
        munimtheme: {
          primary: "#6b7280",   
          secondary: "#22c55e",
          accent: "#0ea5e9",
          neutral: "#1e293b",
          "base-100": "#0f172a",
          "base-content": "#f8fafc",
        },
      },
    ],
  },

  plugins: [daisyui],
};
