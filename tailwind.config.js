/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#262626',
        'cream': '#fae3bf',
        'beige': {
          50: '#2e2e2e',
          100: '#333333',
          200: '#3a3a3a',
          300: '#424242',
          400: '#4a4a4a',
          500: '#555555',
          600: '#666666',
          700: '#777777',
          800: '#888888',
          900: '#999999',
        },
        'warm-beige': '#3a3a3a',
        'charcoal': '#fae3bf',
        'stone': {
          DEFAULT: '#262626',
          50: '#2e2e2e',
          100: '#333333',
          200: '#3a3a3a',
          300: '#424242',
          400: '#4a4a4a',
          500: '#555555',
          600: '#666666',
          700: '#777777',
          800: '#888888',
          900: '#999999',
          950: '#262626',
        },
      },
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'serif'],
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'seasons': ['The Seasons', 'Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

