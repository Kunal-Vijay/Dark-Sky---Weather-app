/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      boxShadow: {
        "g-2xl":
          "0 25px 50px -12px rgb(0 0 0 / 0.25),25px 0 50px -12px rgb(0 0 0 / 0.25),0 -25px 50px -12px rgb(0 0 0 / 0.25),-25px 0 50px -12px rgb(0 0 0 / 0.25)",
      },
    },
  },
  plugins: [],
};
