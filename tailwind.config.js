import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#08585A',
        'light': '#DCF4EE',
        'skyblue': '#338AF3',
        'light-green': '#1DBE98',
        'ultra-light': '#EDF9F6'
      },
      fontFamily: {
        title: ['Gelasio']
      },
      spacing: {
        '100': '26rem'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],


}

