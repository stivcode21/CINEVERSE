/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        default: "0 1px 3px rgba(0, 0, 0, 0.5)",
        md: "0 2px 5px rgba(0, 0, 0, 0.5)",
        lg: "0 4px 10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
