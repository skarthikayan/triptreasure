/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        textPrimary: "var(--color-text-primary)",
        textTitle: "var(--color-text-title)",
        sectionTitle: "var(--color-text-section-title)",
        buttonBg: "var(--color-bg-button)",
        colorGrey: "var(--color-grey)",
      },
    },
  },
  plugins: [],
};
