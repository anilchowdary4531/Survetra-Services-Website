/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        survetra: {
          midnight: "#10121C",
          dark: "#0C0E17",
          card: "#161926",
          cardElevated: "#1D2132",
          cardHover: "#23283E",
          border: "#262B3F",
          borderGlow: "rgba(242, 139, 50, 0.25)",
          orange: {
            DEFAULT: "#F28B32",
            hover: "#E07B23",
            light: "#FFAA64",
            glow: "rgba(242, 139, 50, 0.15)",
          },
          violet: {
            DEFAULT: "#7655E8",
            hover: "#6444D4",
            light: "#9A81F0",
            glow: "rgba(118, 85, 232, 0.15)",
          },
          light: "#F5F6FA",
          muted: "#94A3B8",
          subtle: "#64748B",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "Plus Jakarta Sans",
          "Inter",
          "-apple-system",
          "sans-serif",
        ],
      },
      boxShadow: {
        "glow-orange": "0 0 30px -5px rgba(242, 139, 50, 0.3)",
        "glow-violet": "0 0 30px -5px rgba(118, 85, 232, 0.3)",
        "glow-combined": "0 0 40px -10px rgba(242, 139, 50, 0.25), 0 0 40px -10px rgba(118, 85, 232, 0.25)",
        "card-subtle": "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(118,85,232,0.18), rgba(242,139,50,0.12), transparent 70%)",
        "card-gradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 100%)",
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 8s ease-in-out infinite",
        "float-reverse": "floatReverse 9s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(12px)" },
        },
      },
    },
  },
  plugins: [],
};

