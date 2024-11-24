/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  backgroundImage: {
    "hero-image": "url()",
  },
  fontFamily: {
    sans: ["ui-sans-serif", "system-ui"],
    serif: ["PT Serif", "serif"],
    mono: ["ui-monospace", "SFMono-Regular"],
    display: ["Oswald"],
    body: ['"Open Sans"'],
    roboto: ["Roboto", "sans - serif"],
  },
  plugins: [],
};
