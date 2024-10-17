


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"PT Sans"', 'sans-serif'],
        // ubuntu: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#98C8F4',  // Custom color name and value
        'text-blue':'#061B4E',
        'box-blue':'#173C96',
        'bg-colors':'#D9D9D9',
        'pro-col':'#2D57D3',
        'pro-box':'#A0D5DB',
        'nav':'#6AB7C1',
        'box':'#021B4E',
        'navs':'#6CB7C2',
        'nav2':'#7DC2CB',
        'navs-1':'#ADD8E1',
        'navs-3':'#A0D2D9',
        'foot':'#7FC5CF',
        'foots':'#F5F5FA',
        'fonts':'#174363',
        'inp':'#F3FAFE',
        'arr':'#41CDCE',
        'ink':'#2020D3',
        'cat':'#F6F6FA'
      },
      backgroundImage: {
        'colors': 'linear-gradient(to right, #ADD8E1, #7DC2CB, #A0D2D9, #6AB7C1)'
      },
      animation: {
        'bounce-down': 'bounce-down 0.8s ease-out 1 forwards'
      },
      width:{
        '100vh': '100vh'
      },
      height:{
        '85vh': '85vh'
      },
      screens: {
        veryTiny:"300px",
        tiny:"450px",
        verySmall:"500",
        small:"650px",
        Small:"800px",
        medium:"900px",
        Medium:"1000px",
        large:"1100px",
        Large:"1200px",
        Laptop:"1350px",
        Largest : "1650px",
        Desktop:"1900px"
    }
      
    },
  },
  plugins: [],
}


