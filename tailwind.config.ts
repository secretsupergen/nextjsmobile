import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#3b82f6",
        secondary: "#2dd4bf",
        background: "#000211",
        text: '#EAEAEA'
      },
      textColor: {
        primary: 'rgb(254,249,195)',
        secondary: 'rgb(155,168,133)',
        main: "#3b82f6",
      },
      screens: {
        'sm' : '1024px',
        'lg' : '1600px'
      }
    }
  },
  plugins: [],
}
export default config
