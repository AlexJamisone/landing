/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			screens: {
				'mobile': {
					max: '320px'
				},
				'tablet': {
					max: '792px'
				},
				'web': {
					max: '1280px'
				}
			},
			colors: {
				'black': '#27272A',
				'gray-dark': '#696969',
				'gray-light': '#E5E7EB',
				'white': '#FCFBFA',
				'lavender': '#7E3AF2',
				'red': '#E02424'
			},
			fontFamily: {
				'main': 'Montserrat, sans-serif'
			},
			spacing: {
				'mobile': '15px',
				'tablet': '39px',
				'web': '85px',
			}
		},
	},
	plugins: [],
}