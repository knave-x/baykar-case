/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // fontSize: {
      //   sm: '16px',
      //   base: '32px',
      //   xl: '72px',
      //   '1xl': '18px',
      //   '3xl': '1.953rem',
      //   '4xl': '2.441rem',
      //   '5xl': '3.052rem',
      // },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'custom-brown': 'rgba(120, 53, 15, 1)',
      },
    }
  },
  plugins: [],
}

