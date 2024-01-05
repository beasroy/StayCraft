import type { Config } from 'tailwindcss'
const {fontFamily}= require("tailwindcss/defaultTheme")
const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary:'#B46060',
        secondary:"#F2C641",
        tertiary:{
          dark:'#CE5A67',
          light:'#FCF5ED'
        }
      },
      fontFamily:{
        poppins:['var(--font-poppins)', ...fontFamily.sans]
      }
    },
  },
  plugins: [],
}
export default config
