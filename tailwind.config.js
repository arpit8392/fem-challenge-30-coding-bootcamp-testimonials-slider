/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				darkBlue: 'hsl(240, 38%, 20%)',
				grayishBlue: 'hsl(240, 18%, 77%)',
			},
			backgroundImage: {
				patternBg: 'url("/images/pattern-bg.svg")',
				patternCurve: 'url("/images/pattern-curve.svg")',
				patternQuotes: 'url("/images/pattern-quotes.svg")',
			},
		},
	},
	plugins: [],
}
