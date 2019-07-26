
const theme = {

  colors: {
    white: '#fff',
    black: '#000',
    blue: '#2C3E51',
    green: '#99AF21',
    gray: '#8B8F95',
    borderGray: '#CBCDD1',
    legalGray: '#7D8086',
    dark: '#202E39',
    lightGray: '#F6F6F6',
    red: '#d6000b'
  },

  mediaSizes: {
    small: {
      selector: 'max-width',
      values: '640px'
    },
    medium: {
      selector: 'max-width',
      values: '1023px'
    },
    mediumUp: {
      selector: 'min-width',
      values: '640px'
    },
    mediumOnly: {
      values: ['640px', '1023px']
    },
    largeUp: {
      selector: 'min-width',
      values: '1024px'
    },
  },

  maxWidth: '1032px',

  fonts: {
    MavenPro: 'Open Sans, sans-serif',
    SourceSansPro: 'Source Sans Pro, sans-serif',
  },

};

export default theme
