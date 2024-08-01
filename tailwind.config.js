import colors from "tailwindcss/colors"


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {
//       colors: {
//         secondary: {
//           DEFAULT: colors.neutral[200],
//           hover: colors.neutral[300],
//           border: colors.neutral[400],
//           text: colors.neutral[500],
//           dark: colors.neutral[800],
//           ["dark-hover"]: colors.neutral[900]
//         }
//       }
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include all relevant file types
    "./public/index.html", // Include this if you have any Tailwind classes in your HTML files
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: colors.neutral[200],
          hover: colors.neutral[300],
          border: colors.neutral[400],
          text: colors.neutral[500],
          dark: colors.neutral[800],
          ["dark-hover"]: colors.neutral[900],
        }
      }
    },
  },
  plugins: [],
}
