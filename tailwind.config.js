/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.html"
  ],
  safelist: [
    'w-64',
    'w-1/2',
    'rounded-l-lg',
    'rounded-r-lg',
    'bg-gray-200',
    'grid-cols-4',
    'grid-cols-7',
    'h-6',
    'leading-6',
    'h-9',
    'leading-9',
    'shadow-lg'
  ],
  darkMode: 'class',
  variants: {
    fill: [],
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
      width: ['w-7xl']
    }
  },
  theme: {
    "color": {
      "failure": "fill-red-600",
      "gray": "fill-gray-800",
      "info": "fill-cyan-600",
      "pink": "fill-pink-600",
      "purple": "fill-purple-600",
      "success": "fill-green-500",
      "warning": "fill-yellow-400",
      "primary": '#FF0080',
      "secondary": '#0070F3'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      width: {'7xl': '120rem'},
      maxWidth: {'7xl': '120rem','6xl': '100rem','5xl': '80rem','4xl': '60rem'},
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("flowbite/plugin"),
  ],
}

