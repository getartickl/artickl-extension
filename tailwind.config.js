const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const generatePointFontSizes = () => {
  let output = {};
  for (let i = 1; i < 96; i++) {
    output[`${i}pt`] = [`${i}pt`, `${i * 1.25}pt`];
  }

  return output;
};

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      "james-resume-header": ["Oswald", ...defaultTheme.fontFamily.sans],
      "james-resume-content": ["Inconsolata", ...defaultTheme.fontFamily.serif],
      "manas-resume-header": ["Roboto", ...defaultTheme.fontFamily.sans],
      "manas-resume-content": ["Roboto", ...defaultTheme.fontFamily.serif],
    },
    minHeight: {
      ...defaultTheme.minHeight,
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      screen: "100vh",
      112: "28rem",
      116: "29rem",
      120: "30rem",
      124: "31rem",
      128: "32rem",
      132: "33rem",
      136: "34rem",
      140: "35rem",
      144: "36rem",
      148: "37rem",
      152: "38rem",
      156: "39rem",
      160: "40rem",
      164: "41rem",
      168: "42rem",
      172: "43rem",
      176: "44rem",
      180: "45rem",
    },
    textIndent: (theme) => theme("spacing"),

    extend: {
      cursor: {
        "left-right": "col-resize",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      fontSize: {
        ...generatePointFontSizes(),
      },
      width: {
        4.5: "1.125rem",
        18: "4.5rem",
      },
      height: {
        "1px": "1px",
        "2px": "2px",
        4.5: "1.125rem",
        18: "4.5rem",
      },
      maxHeight: {
        148: "37rem",
        152: "38rem",
        156: "39rem",
        160: "40rem",
        164: "41rem",
        168: "42rem",
        172: "43rem",
        176: "44rem",
        180: "45rem",
      },
      animation: {
        "fade-in": "wiggle 0.3s ease-out",
      },
      colors: {
        emerald: colors.emerald,
        cyan: colors.cyan,
        violet: colors.violet,
        rose: colors.rose,
        fuchsia: colors.fuchsia,
        orange: colors.orange,
        amber: colors.amber,
        teal: colors.teal,
        lime: colors.lime,
        indigo: colors.indigo,
        blackGray: "#050505",
        "james-resume-accent": "#E32C60",
        warmGray: colors.warmGray,
      },
      zIndex: {
        "-5": "-5",
        "-10": "-10",
      },
      rotate: {
        "-30": "-30deg",
        30: "30deg",
      },
      spacing: {
        112: "28rem",
        116: "29rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem",
        144: "36rem",
      },
      width: {
        a4: "21cm",
        double: "200%",
      },
      transformOrigin: {
        "center-left": "0",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
        },

        pop: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.075)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        notification: {
          "0%": {
            transform: "translate(0px, 150px)",
            opacity: 0,
          },
          "16%": {
            transform: "translate(0px, 0px)",
            opacity: 1,
          },
          "83%": {
            transform: "translate(0px, 0px)",
            opacity: 1,
          },
          "100%": {
            transform: "translate(0px, -20px)",
            opacity: 0,
          },
        },
      },
      animation: {
        wiggle: "wiggle 0.3s ease-in-out 3",
        pop: "pop 0.3s ease-in-out",
        "fade-in-up": "fade-in-up 1s ease-out",
        blob: "blob 7.0s infinite",
        notification: "notification 4.0s ease-out",
      },
    },
    linearBorderGradients: {
      colors: {
        "purple-pink": ["#7C3AED", "#F472B6"],
      },
    },
  },
  variants: {
    extend: {
      fontSize: ["hover", "focus"],
      transform: ["hover", "focus"],
      cursor: ["hover", "focus"],
      animation: ["motion-safe"],
      textColor: ["visited"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-border-gradients")(),
    require("tailwindcss-text-indent")(), // no options to configure
  ],
};
