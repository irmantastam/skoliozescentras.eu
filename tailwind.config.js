/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        blue: {
          600: '#2563eb', // A specific blue shade for consistency
          700: '#1d4ed8', // Darker shade for hover states
          400: '#60a5fa', // Lighter shade for accents
        },
        gray: {
          50: '#f9fafb',
          200: '#e5e7eb',
          300: '#d1d5db',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
        },
      },
    },
  },
  plugins: [],
}
