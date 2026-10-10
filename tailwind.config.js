/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Iqara Hospital brand palette
        teal: {
          DEFAULT: '#087F8C',
          50: '#E6F4F5',
          100: '#C2E5E9',
          200: '#8FD0D7',
          300: '#5BBAC4',
          400: '#2E9EAB',
          500: '#087F8C',
          600: '#076C77',
          700: '#055661',
          800: '#04414A',
          900: '#022B31',
        },
        navy: {
          DEFAULT: '#123047',
          50: '#E9EEF3',
          100: '#C7D5E1',
          200: '#93A9BD',
          300: '#5E7D98',
          400: '#2E5372',
          500: '#123047',
          600: '#0F2839',
          700: '#0B1F2C',
          800: '#08151E',
          900: '#040A0F',
        },
        offwhite: '#F7FAFC',
        mint: '#DDF5ED',
        slateink: '#263746',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(18, 48, 71, 0.18)',
        soft: '0 4px 16px -6px rgba(18, 48, 71, 0.12)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
        'fade-in': 'fade-in 0.4s ease-out both',
      },
    },
  },
  plugins: [],
}
