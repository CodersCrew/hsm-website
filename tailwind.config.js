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
      filterDropBckgColor: '#EFF2F1',
      black: '#000',
    },
    extend: {
      boxShadow: {
        allPopupAndModals:
          '0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px rgba(0, 0, 0, 0.08), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)',
      },
      width: {
        filterDropdown: '783px',
        50: '200px',
      },
      height: {
        50: '200px',
      },
      maxHeight: {
        projectImages: '384px',
        topSection: '512px',
      },
      maxWidth: {
        projectImages: '612px',
      },
      minWidth: {
        dropdownSD: '400px',
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
        screens: {
          'md-max': { max: '767px' },
        },
      },
    },
    plugins: [],
  },
};
