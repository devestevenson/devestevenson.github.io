/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			"minimobile": "374",
			"mobile": "420px",
			"tablet": "640px",
			"tablaptop": "768px",
			"laptop": "1024px",
			"desktop": "1280px",
		},
		extend: {
			colors: {
				mywhite: '#F1F1F1',
				myblack: '#1F1F1F',
			},
			fontFamily: {
				fontBS: [
					'Bahnschrift'
				]
			}
		},
	},
	plugins: [],
}