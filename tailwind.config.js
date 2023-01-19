/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			screens: {
				'mobile': '320px',
				'tablet': '750px',
				'web': '1280px'
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
			fontSize: {
				'h1-web': '60px',
				'h1-mobile': '24px',
				'subtitle-mobile': '20px',
				'subtitle/body-mobile-sm': '14px',
				'h2-web': '32px',
				'h3-web': '24px',
				'subtitle/body-web': '20px', 
				'subtitle/body-web-sm': '16px',
			},
			lineHeight: {
				'h1-web': '90px',
				'h2-web': '48px',
				'h3-web': '36px',
				'subtitle/body': '30px',
				'subtitle/body-sm': '24px',
				'body-mobile': "21px"

			},
			spacing: {
				'mobile': '15px',
				'tablet': '39px',
				'web': '85px',
			},
			backgroundImage: {
				'gradient': "url('./images/gradient.png')"
			}
		},
	},

	plugins: [],
}