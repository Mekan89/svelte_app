/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],

    theme: {
        container: {
            center: true,
            padding: "2rem",
        },
        extend: {
            colors: {
                primary: "var(--primary)",
                secondary: "var(--secondary)",
            },
        },
    },

    plugins: [require("flowbite/plugin")],
    darkMode: "class",
};
