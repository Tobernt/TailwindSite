const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#eef1f6',
          100: '#c9d0da',
          200: '#9aa5b5',
          300: '#6b768d',
          400: '#475169',
          500: '#353d4d',
          600: '#292f3d',
          700: '#1f2430',
          800: '#181c25',
          900: '#11131a',
          950: '#0c0d11',
        },
        accent: {
          blue: {
            50: '#eaf2ff',
            100: '#d6e5ff',
            200: '#acc9ff',
            300: '#7b9fff',
            400: '#4b76ff',
            500: '#2853f5',
            600: '#1d3fd8',
            700: '#152fae',
            800: '#0d1f7a',
            900: '#061147',
            950: '#030921',
          },
          emerald: colors.emerald,
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Manrope"', ...defaultTheme.fontFamily.sans],
        display: ['"Space Grotesk"', '"Inter"', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      spacing: {
        gutter: '1.25rem',
        'section-sm': '3.5rem',
        section: '4.5rem',
        'section-lg': '6rem',
      },
    },
  },
  plugins: [],
};
