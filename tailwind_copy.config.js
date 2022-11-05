/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                cpgreen: {
                    50: '#64ffda',
                    100: '#00ADB5',
                    200: '#009198',
                    300: '#e0cec7',
                    400: '#d2bab0',
                    500: '#bfa094',
                    600: '#a18072',
                    700: '#977669',
                    800: '#846358',
                    900: '#43302b',
                },
                cpdark: {
                    50: "#031128",
                    100: "#132648",
                }
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}