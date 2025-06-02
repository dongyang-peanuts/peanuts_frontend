/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
      height: {
        "real-screen": "calc(var(--vh) * 100 - 139px)",
      },
    },
  },
  plugins: [],
};
