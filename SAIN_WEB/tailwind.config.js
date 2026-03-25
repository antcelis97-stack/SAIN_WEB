/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores temáticos para SAIN
        'sain-blue': '#0077b6',
        'sain-cyan': '#22d3ee',
        'sain-dark': '#000814',
      },
      dropShadow: {
        'neon-red': '0 0 12px rgba(255, 50, 50, 0.8)',
        'neon-cyan': '0 0 20px rgba(34,211,238,0.3)',
      },
      backgroundImage: {
        'underwater-gradient': 'linear-gradient(to bottom, #0f172a, #020617)',
      }
    },
  },
  plugins: [],
}