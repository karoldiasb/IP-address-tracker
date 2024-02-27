const fontWeights = {
  extrabold: 700,
  medium: 500,
  normal: 400,
};

export const typography = {
  fontFamily: "'Rubik', sans-serif",
  variants: {
    'display-bold': {
      fontWeight: fontWeights.extrabold,
      fontSize: {
        xs: '28px',
        md: '38px',
      },
    },
    'heading-medium': {
      fontWeight: fontWeights.medium,
      fontSize: {
        xs: '18px',
        md: '18px',
      },
    },
    'md-bold': {
      fontWeight: fontWeights.extrabold,
      fontSize: {
        xs: '18px',
        md: '18px',
      },
    },
    'sm-regular': {
      fontWeight: fontWeights.normal,
      fontSize: {
        xs: '15px',
        md: '15px',
      },
    },
    'xs-medium': {
      fontWeight: fontWeights.medium,
      fontSize: {
        xs: '10px',
        md: '10px',
      },
    },
  },
};
