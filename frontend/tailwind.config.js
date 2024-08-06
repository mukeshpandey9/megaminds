/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "radial-gradient(circle at bottom left, #d56742, #d56742)",
      },
      colors: {
        coral: {
          100: "rgba(213, 103, 66, 0)",
          200: "rgba(213, 103, 66, 0.2)",
        },
        // white: "#e3dede",
        // gray1: "#ccccca",
        // "light-primary": "#dd8568",
        // white1: "#fff",
        // gray: "rgba(255, 255, 255, 0.07)",
      },
      fontFamily: {
        nunito: "Nunito",
        karla: "Karla",
        "source-sans-pro": "'Source Sans Pro'",
      },
    },
  },
};
