/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    screens: {
      md: "992px",
    },
    extend: {
      fontFamily: {
        Amatic: ["Amatic SC, cursive"],
      },
      backgroundImage: {
        hug: "url('../images/couple-hugging-laughing-near-wall.png')",
        rsvp: "url('../images/closeup-shot-newlywed-couple-sitting-bench.jpg')",
        end: "url('../images/young-asian-pregnant-couple-using-laptop.jpeg')",
      },
    },
  },
  plugins: [],
};
