/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6fe',
          100: '#deebfc',
          200: '#c3dafa',
          300: '#97c1f6',
          400: '#65a0f0',
          500: '#4280e9',
          600: '#2c64dd',
          700: '#2652cd',
          800: '#2445a6',
          900: '#223e83',
          950: '#182756',
        },
        secondary: {
          50: '#f3f7fc',
          100: '#e6eff8',
          200: '#c7dff0',
          300: '#95c5e3',
          400: '#5ba5d3',
          500: '#3889bc',
          600: '#2a6d9f',
          700: '#245881',
          800: '#214a6b',
          900: '#1f3f5a',
          950: '#14293c',
        },
        accent: {
          50: '#f8f7f7',
          100: '#f0ecec',
          200: '#e1d6d6',
          300: '#cbb6b5',
          400: '#b08e8c',
          500: '#996f6d',
          600: '#8a5b59',
          700: '#734b49',
          800: '#604140',
          900: '#523a39',
          950: '#2c1e1e',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}