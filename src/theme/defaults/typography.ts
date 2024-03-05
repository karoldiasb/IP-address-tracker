const fontWeights = {
  extrabold: 700,
  medium: 500,
  normal: 400,
};

export const typography = {
  fontFamily: "'Rubik', sans-serif",
  variants: {
    'display-bold': {
      fontWeight: fontWeights.medium,
      fontSize: {
        xs: '28px',
        lg: '38px',
      },
    },
    'heading-medium': {
      fontWeight: fontWeights.medium,
      fontSize: {
        xs: '18px',
        lg: '25px',
      },
    },
    'md-bold': {
      fontWeight: fontWeights.medium,
      fontSize: {
        xs: '18px',
        lg: '25px',
      },
    },
    'sm-regular': {
      fontWeight: fontWeights.normal,
      fontSize: {
        xs: '15px',
        lg: '15px',
      },
    },
    'xs-extrabold': {
      fontWeight: fontWeights.extrabold,
      fontSize: {
        xs: '10px',
        lg: '10px',
      },
    },
  },
};
