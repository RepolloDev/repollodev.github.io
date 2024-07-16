/** @type {import('tailwindcss').Config} */

const { addIconSelectors } = require('@iconify/tailwind');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'major': ['Major Mono Display', 'monospace'],
				'geist-sans': ['Geist Sans', 'sans-serif'],
				'geist-mono': ['Geist Mono', 'monospace'],
			}
		},
	},
	darkMode: ['selector', '[data-theme="dark"]'],
	plugins: [
		addIconSelectors(['ph']),
		require('daisyui'),
	],
	daisyui: {
		themes: [
			{
				'light': {
					'primary': '#ef9995',
					'secondary': '#a4cbb4',
					'accent': '#da7628',
					'base-100': '#fbfefb',
					'neutral': '#181818',
					'info': '#0ca5e9',
					'success': '#2dd4bf',
					'warning': '#f4bf50',
					'error': '#fb7085',
					"--rounded-box": "0",
					"--rounded-btn": "0"
				}
			},
			{
				'dark': {
					'primary': '#4fc4cf',
					'secondary': '#994ff3',
					'accent': '#fbdd74',
					'base-100': '#0d1117',
					'neutral': '#fffffe',
					'info': '#0ca5e9',
					'success': '#2dd4bf',
					'warning': '#f4bf50',
					'error': '#fb7085',
					"--rounded-box": "0",
					"--rounded-btn": "0"
				}
			}
		]
	}
}
