/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}', '!./node_modules'],
    theme: {
        colors: {
            'neutral/10': '#FFFFFF',
            'neutral/20': '#F3F3F3',
            'neutral/40': '#D9D9D9',
            'neutral/70': '#848484',
            'neutral/80': '#636B75',
            'neutral/90': '#333333',
            'primary/20': '#CEDBD4',
            'primary/40': '#749E87',
            'primary/60': '#508468',
            'primary/80': '#375B48',
            'primary/90': '#1F593A',
            'secondary/10': '#d4ddbf',
            'secondary/60': '#8FBF26',
            'secondary/100': '#445B12',
        },
        extend: {
            borderRadius: {
                20: '20px',
            },
        },
    },
    plugins: [],
};
