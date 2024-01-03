/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      animation: {
        "animate-skeleton": "1.5s infinite linear",
        slideSideLeftAndFade:
          "slideSideLeftAndFade .5s cubic-bezier(0.16, 1, 0.3, 1)",
        overlayShow: "overlayShow .5s cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow .5s cubic-bezier(0.16, 1, 0.3, 1)",
        startSlideDown: 'startSlideDown .5s',
        startSlideLeft: 'startSlideLeft .5s',
        startSlideRight: 'startSlideRight .5s',
        slideMinimumDown: 'slideMinimumDown .5s',
        startSlideTop: 'startSlideTop .5s'

      },
      screens: {
      minilg: '200px',
        minism: '300px',
        mini: "390px",
        sm: "430px",
        '2sm': '600px',
        
        minimum: '1000px',
        medium: '1400px',
        large: '1700px',
        "2md": "800px",
        
        "3xl": "1900px",
      },
      colors: {
        gray: {
          50: "#F8F9FA",
          100: "#F1F3F5",
          200: "#E9ECEF",
          300: "#DEE2E6",
          400: "#CED4DA",
          500: "#ADB5BD",
          600: "#868E96",
          700: "#495057",
          800: "#343A40",
          900: "#212529",
        },

        blue: {
          50: "#f2f9f9",
          100: "#deeeef",
          200: "#c0dde1",
          300: "#94c4cc",
          400: "#61a3af",
          500: "#468794",
          600: "#3c6f7e",
          700: "#365c68",
          800: "#334e57",
          900: "#2e424b",
          950: "#1e3038",
        },
      },
      keyframes: {
        skeleton: {
          from: {
            backgroundPosition: "0px",
          },
          to: {
            backgroundPosition: "-200%",
          },
        },
      
        slideSideLeftAndFade: {
          from: { opacity: 0, transform: "translateX(-15%)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },

        startSlideDown: {
          from: { opacity: 0, transform: "translateY(-50%)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        startSlideRight: {
          from: { opacity: 0, transform: "translateX(15%)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        startSlideLeft: {
          from: { opacity: 0, transform: "translateX(-15%)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        
        slideMinimumDown: {
            from: { opacity: 0, transform: "translateY(-15%)" },
            to: { opacity: 1, transform: "translateY(0)" },       
        },
      

        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: {
            opacity: 0,
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1)",
          },
        },
        fontFamily: {
          sans: ["DM Sans", "sans-serif"],
        },
      },
    },
  },
  plugins: [],
};
