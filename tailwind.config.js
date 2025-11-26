/** @type {import('tailwindcss').Config} */

 const appPalette = {
        primary: {
          DEFAULT: '#F9EFE5',
        },
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