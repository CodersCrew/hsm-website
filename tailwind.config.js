/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
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
      black: '#000',
    },
    extend: {
      width: {
        filterDropdown: '783px',
      },
      borderRadius: {
        20: '20px',
      },
      borderWidth: {
        1: '1px',
      },
      fontFamily: {
        lato: ['lato'],
      },
      fontSize: {
        H1: 44,
        H2: 36,
        H3: 28,
        H4: 24,
        H5: 18,
        H6: 16,
        L_regular: 18,
        M_regular: 16,
        S_regular: 14,
        Display: 88,
      },
      lineHeight: {
        H1: 1.2,
        H2: 1.22,
        H3: 1.29,
        H4: 1.33,
        H5: 1.56,
        H6: 1.5,
        L_regular: 1.78,
        M_regular: 1.75,
        S_regular: 1.43,
      },
    },
  },
  plugins: [],
};
