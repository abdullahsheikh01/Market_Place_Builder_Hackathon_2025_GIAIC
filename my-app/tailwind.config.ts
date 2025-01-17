import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			inter: ['Inter','sans-serif'],
  			poppins: ['Poppins','sans-serif'],
  			roboto: ['Roboto','sans-serif'],
  			openSans: ['OpenSans','sans-serif'],
			worksans: ['"Work Sans"', 'sans-serif'],
  		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		screens:{
	  exsm:{min:'1px', max:'639px'},
      sm: { min: '640px', max: '767px' }, 
      md: { min: '768px', max: '1023px' }, 
      lg: { min: '1024px', max: '1279px' }, 
      xl: { min: '1280px', max: '1535px' },
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
