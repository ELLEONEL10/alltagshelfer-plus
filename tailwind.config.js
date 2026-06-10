/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf8f3',
          100: '#faefe5',
          300: '#efd1bf',
          500: '#db8d69',
          700: '#af6245',
          900: '#753a2b',
        },
        navy: {
          50: '#edf8f7',
          100: '#d8efec',
          400: '#2d8390',
          600: '#195f69',
          900: '#103740',
        },
        'gold-primary': '#db8d69',
        'gold-dark': '#af6245',
        'navy-dark': '#103740',
        'navy-light': '#195f69',
        'navy-medium': '#2d8390',
        'brand-cream': '#f8efe7',
      },
      fontFamily: {
        serif: ['Atkinson Hyperlegible', 'sans-serif'],
        sans: ['Atkinson Hyperlegible', 'sans-serif'],
        arabic: ['Tajawal', 'Atkinson Hyperlegible', 'sans-serif'],
      },
      borderRadius: {
        'lg': '16px',
        'md': '10px',
      },
      boxShadow: {
        'soft': '0 2px 24px rgba(26,39,68,0.08)',
        'hover': '0 8px 40px rgba(26,39,68,0.14)',
      },
    },
  },
  plugins: [],
}
