/* eslint-disable no-undef */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Satoshi400: ['Satoshi-Regular'],
        Satoshi500: ['Satoshi-Medium'],
        Satoshi700: ['Satoshi-Bold'],
        Satoshi900: ['Satoshi-Black'],

        EBGaramond600: ['EBGaramond-Medium'],
        EBGaramond500: ['EBGaramond-Regular'],
        'SegeoUI': ['Segoe UI', 'Tahoma']
      },
      colors: {
        primary: {
          light: '#00AFEF',
          text: '#333333',
          pink: '#DD4A6B'
        },
        "hover-primary": '#2F929C',
        "hover-secodary": '#007582',
        brand: '#43D0DF',
        dimBrand: '#00474F',
        secondary: {
          main: '#00AFEF8A'
          // light: "var(--color-secondary-light)",
          // dark: "var(--color-secondary-dark)",
          // contrastText: "var(--color-secondary-contrastText)",
        }
      },
      utilities: {
        '.tick': {
          display: 'inline-block',
          width: '1.55rem',
          height: '0.5rem',
          border: '2px solid currentColor',
          borderTop: 'none',
          borderRight: 'none',
          transform: 'rotate(-45deg)',
          marginRight: '0.25rem'
        }
      },
      backgroundImage: {
        'headerBG': "url('@/assets/img/EventBg.png')"
      },
      gridTemplateColumns: {
        'customGrid': 'repeat(auto-fit, minmax(200px, 1fr))',
        'customGrid2': 'repeat(auto-fit, minmax(250px, 1fr))',
        'customGrid3': 'repeat(auto-fit, minmax(150px, 1fr))',
      },
      screens: {
        'tab': {'max': '1024px'},
        'tab2': {'max': '900px'},
        'msgBreak': {'max': '1134px'},
        'msgTab': {'max': '800px'},
        'msgTab2': {'min': '800px'},
        'msgMob': {'max': '576px'},
        'mob': {'max': '576px'},
        'eventBreak': {'max': '1024px'},
        'eventBreak1': {'max': '1250px'},
      },
    }
  },
  plugins: []
}
