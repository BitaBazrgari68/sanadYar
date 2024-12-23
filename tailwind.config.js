/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      // backgroundImage: (theme) => ({
      //   dunes: "url('/dunes.jpg')",
      // }),
      animation: {
        fadeup: 'fadeup 1s ease-in-out',
        fadeleft: 'fadeleft 1s ease-in-out',
        fade:'fade 1s ease-in-out',
        faderight:'faderight 1s ease-in-out '
      },
      
      // that is actual animation
      keyframes: theme => ({
        fadeup: {
          '0%': { transform: ' translateY(2rem)' },
          '100%': { transform: 'translateY(0px)' }
        },
        fadeleft: {
          '0%': { transform: ' translateX(2rem)' },
          '100%': { transform: 'translateX(0px)' }
        },
        faderight: {
          '0%': { transform: ' translateX(0rem)' },
          '100%': { transform: 'translateX(.5rem)' }
        },
        fade: {
          '0%': {opacity: '0'},
          '100%': { opacity: '1' }
        },
      }),
      
    },
  },
  plugins: [],
}

