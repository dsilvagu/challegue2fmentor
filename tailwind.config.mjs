/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'fig': ['"Figtree Variable"', 'sans-serif']
			}
		},
		colors: {
			'pyellow': 'hsl(47, 88%, 63%)',
			'pwhite': 'hsl(0, 0%, 100%)',
			'pgrey': 'hsl(0, 0%, 50%)',
			'pblack': 'hsl(0, 0%, 7%)',
		}
	},
	plugins: [],
}
