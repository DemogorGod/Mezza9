/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        padding: {
            'margins': '48px',
            'y-spacer': '25px'
        },
        colors: {
          'primary_blue': '#05386B',
          'primary_dark_green': '#379683',
          'primary_green': '#5CDB95',
          'primary_light_green': '#8EE4AF',
          'primary_white': '#EDF5E1',
          'fail': '#FC4445',
          'dark': '#242424',
          'neon': '#66FCF1',
        },
        spacing: {
            'gutter': '16px',
            'margin': '50px',
            '1': '1px',
            '2': '2px',
            '3': '3px',
            '4': '4px',
            '5': '5px',
            '6': '6px',
            '7': '7px',
            '8': '8px',
            '9': '9px',
            '10': '10px',
            '11': '11px',
            '12': '12px',
            '15': '15px',
            '20': '20px',
            '25': '25px',
            '30': '30px',
            '35': '35px',
            '40': '40px',
            '45': '45px',
        }
    },
    screens: {
        'xsm': {'min': '0px', 'max': '359px'},
        'sm': {'min': '360px', 'max': '719px'},
        'md': {'min': '720px', 'max': '1023px'},
        'lg': {'min': '1024px'},

        'csm': {'min': '0px', 'max': '719px'},

        'csm-md': {'min': '0px', 'max': '1023px'},

        'nav-mid': {'min': '720px', 'max': '1100px'},
        'nav-sm': {'min': '500px', 'max': '719px'},
        'nav-xsm': {'min': '0px', 'max': '499px'},

        's_lg' : {'min':'1100px'},
        's_md' : {'min':'900px'},
        's_sm' : {'min':'700px'},
        's_xsm' : {'min':'550px'},
    },
},
  plugins: [],
}
