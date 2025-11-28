/** @type {import('tailwindcss').Config} */

 const appPalette = {
        primary: {
          DEFAULT: '#F9EFE5',
        },
        light: {
          DEFAULT: '#F8F8F8'
        },
        gray: {
          DEFAULT: "#595F67",
          300: "#AAAFB5",
          400: "#D0D3D8",
          500: "#8F92A1",
        },
        dark: {
          DEFAULT: "#0B0A0A"
        }
}

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}",
                "./shared/**/*.{js,jsx,ts,tsx}"
                ],
  theme: {
    extend: {
      colors: {
        ...appPalette
      }
    },
  },
  plugins: [],
}

module.exports.appPalette = appPalette;