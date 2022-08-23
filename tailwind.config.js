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
      animation: {
        'spii': 'wiggle 2s linear infinite',
        'movement': 'movement 5s infinite'

      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        movement: {
          '0%, 20%, 40%, 60%, 80%, 100%': { transform: 'translateX(0rem)' },
          '10%': { transform: 'translateX(2rem)' },
          '30%': { transform: 'translateX(-2rem)' },
          '50%': { transform: 'translateY(1rem)' },
          '70%': { transform: 'translateY(-1rem)' },
        }
      },


      backgroundImage: {
        'creator_bg': "url('/creator/creator_bg.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
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
    extend: {
      animation: ['hover', 'group-hover']

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide', '@tailwindcss/line-clamp')]


}