const defaultTheme = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    content: ["./{layouts,pages,components}/**/*.{js,jsx,ts,tsx}"],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          100:"#fecd000d",
          500: "#FECD00",
          contrast: "#000",
        },
        gray: {
          200:"#ECECEC",
          300: "#BEBEBE",
          500: "#616161",
          600:"#707070",
          700:"#CECECE",
        },
        red: { 
          500:"#FF0000",
          600: "#D80027",
          800: "#E02F5A",
        },
        green: {
          500: "#55E282",
          confirmation: "#22C764",
        },
        black: {
          500: "#000",
        },
        success: {
          DEFAULT: defaultTheme.colors.green["500"],
        },
        warning: {
          DEFAULT: defaultTheme.colors.yellow["500"],
        },
      },
      fontFamily: {
        customBold: ["Roboto-Bold"],
      },
      fontSize: {
        tiny: ".95rem",
      },
      opacity: {
        5: "0.05",
      },
      backgroundOpacity: {
        '5': '0.05',
      },
      keyframes: {
        roll: {
          "0%": { width: "0", height:"0"  },
          "100%": { width: "60%", height:"55%"  },
        },
      },
      animation: {
        roll: "roll 1s ease-in-out",
      },
    },
    customForms: (theme) => ({
      default: {
        "input, textarea, multiselect, select": {
          borderRadius: theme("borderRadius.md"),
          borderWidth: theme("borderWidth.DEFAULT"),
        },
        checkbox: {
          width: theme("spacing.6"),
          height: theme("spacing.6"),
          backgroundSize:"13px",
          icon:
            '<svg fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>',
        },
      },
    }),
  },
  variants: {
    translate: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [
    require("@tailwindcss/custom-forms"),
    plugin(function ({ addComponents, addBase, theme }) {
      addBase({
        div: {
          borderStyle: "solid",
        },
      })
      const components = {

      }

      addComponents(components, ["responsive"])
    }),
  ],
}