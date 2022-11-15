/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            oswald: ["Oswald", "sans-serif"],
        },
        extend: {},
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
