/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                Advent: ['Advent Pro', 'sans-serif'],
                Economica: ['Economica', 'sans-serif']
            },
        },
    },
    plugins: [],
}

