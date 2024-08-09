import type { Config } from 'tailwindcss'
import colors from './src/assets/style/colors'

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
} satisfies Config
