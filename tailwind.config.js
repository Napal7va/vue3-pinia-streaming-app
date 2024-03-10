/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
        colors:{
          pastelBlue:{
            500: '#525E75'
          },
          pastelGreen:{
            200: '#92BA92',
            500: '#78938A'
          },
          pastelYellow:{
            300: '#F1DDBF'
          },
        }
    },
  },
  plugins: [],
}

