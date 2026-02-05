/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: '#00F2FF',
          glow: '#00F2FF',
        },
        mint: {
          DEFAULT: '#20E39B',
        },
        bg: {
          DEFAULT: '#05070A',
        },
        border: {
          white: 'rgba(255, 255, 255, 0.08)',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Assuming Inter as a standard high-end font
      }
    },
  },
  plugins: [],
}
