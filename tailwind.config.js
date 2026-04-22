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
          50: '#fef9f3',
          100: '#fdf3e6',
          300: '#f5e6c8',
          500: '#C9973A',
          700: '#8B6520',
          900: '#5a4419',
        },
        navy: {
          50: '#f0f4fa',
          100: '#e8ecf5',
          400: '#2E3F6E',
          600: '#1A2744',
          900: '#0f1a2e',
        },
        'gold-primary': '#E9A78F',
        'gold-dark': '#D88D74',
        'navy-dark': '#0E5B66',
        'navy-light': '#127380',
        'navy-medium': '#1B8D9A',
        'brand-cream': '#FDF2ED',
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
