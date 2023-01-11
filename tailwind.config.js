/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    content: [],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    daisyui: {
        styled: true,
        themes: ['winter'],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: '',
        darkTheme: 'coffee',
    },
}
