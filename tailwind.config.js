/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#09090b",
                surface: "#18181b",
                primary: "#fafafa",
                secondary: "#a1a1aa",
                "accent-lime": "#d4ff33",
                "accent-blue": "#0ea5e9",
                border: "#27272a",
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                mono: ["Geist Mono", "JetBrains Mono", "monospace"],
            },
        },
    },
    plugins: [],
}
