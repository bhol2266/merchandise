module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: {
      banner: "url('/homepageImages/banner.png')",
      banner_wide: "url('/homepageImages/banner-wide.png')",
    },
    extend: {
      aspectRatio: {
        'item': '61 / 50',
      },
      animation: {
        fade: 'fadeIn 1s ease',
      },
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }),

      screens: {
        "xs": "370",
        "sm": "500px",
        'md': '750px',
        'lg': "1000px",
        'xl': "1250px"
      },
      colors: {
        'github': '#24292F',
        'theme': '#54BAB9',
        'whitte': "#ffffff",
        'Red': "#FF0000",
        'Cyan': "#00FFFF",
        'Blue': "#0000FF",
        'Yellow': "#FFFF00",
        'Lime': "#00FF00",
        'Orange': "#FFA500",
        'Grey': "#808080",
        'Olive': "#808000",
        'DarkBlue': "#00008B",
        'Purple': "#800080",

      },
      fontFamily: {
        body: ['Pushster'],
        manrope: ['Manrope'],
        delius: ['Delius Unicase'],
        inter: ['Inter'],
        poppins: ['Poppins'],
        DMsans: ['DM Sans'],
        Opensans: ['Open Sans'],
        SFuiDisplay: ['SF UI Display'],
        Abhayalibre: ['Abhaya Libre'],

      }
    },
  },

  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide', '@tailwindcss/line-clamp')]


}