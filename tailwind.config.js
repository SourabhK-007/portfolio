// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        zentry:['zentry','sanf-serif'],
         general:['general','sanf-serif'],
         'circular-web':['general','sanf-serif'],
         'robert-medium':['robert-medium','sanf-serif'],
          'robert-regualr':['robert-regular','sanf-serif'],
          tektur: ['Tektur', 'sans-serif'],
      },
      colors:{
          blue:{
            50:'#DFDFF0',
            75:'#DFDFF2',
            100:'#F0F2FA',
            200:"#010101",
            300:'#4fb7dd'
          },
          violet:{
            300:'#5724ff'
          },
          yellow:{
            100:'#8E983F',
            300:'#EDFF66'
          }
      }
    },
  },
  plugins: [],
};
