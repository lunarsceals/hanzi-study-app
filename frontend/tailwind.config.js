/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-background": "var(--light-background)",
        "dust-black": "var(--dust-black)",
        "dust-gray": "var(--dust-gray)",
        "coal-black": "var(--coal-black)",
        "dull-pink": "var(--dull-pink)",
        "dull-green": "var(--dull-green)",
        "dull-organge": "var(--dull-orange)",
        "dull-blue": "var(--dull-blue)",
      },
    },
  },
  plugins: [],
};
