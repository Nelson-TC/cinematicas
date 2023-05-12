/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        main: {
          primary: '#F76E11',
          secondary: '#FF9F45',
          light: '#FDEEDC',
          background: '#f1f1f1',
          black: {
            primary: '#272727',
            secondary: '#404040',
            light: '#959595'
          },
        },
      },
    },
  },
  plugins: [],
}

