const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  }

  export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
  };


  // smallest: `only screen and (max-width: 25em)`, 400px
  // small: `only screen and (max-width: 37.5em)`, 600px
  // medium: `only screen and (max-width: 56em)`, 896px
  // large: `only screen and (max-width: 80em)`, 1280px
  // largest: `only screen and (max-width: 90em)`, 1440px