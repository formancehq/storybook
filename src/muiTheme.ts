import { createTheme } from '@mui/material/styles';

interface ColorType {
  darker: string;
  normal: string;
  bright: string;
  light: string;
}

interface NeutralPalette {
  0: string;
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    neutral: NeutralPalette;
    brown: ColorType;
    blue: ColorType;
    violet: ColorType;
    green: ColorType;
    red: ColorType;
    yellow: ColorType;
    default: ColorType;
  }

  interface PaletteOptions {
    neutral: NeutralPalette;
    brown: ColorType;
    blue: ColorType;
    violet: ColorType;
    green: ColorType;
    red: ColorType;
    yellow: ColorType;
    default: ColorType;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    large3x: React.CSSProperties;
    large2x: React.CSSProperties;
    large1x: React.CSSProperties;
    large: React.CSSProperties;
    small: React.CSSProperties;
    headline: React.CSSProperties;
    heading: React.CSSProperties;
    action: React.CSSProperties;
    footNote: React.CSSProperties;
    money: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    large3x?: React.CSSProperties;
    large2x?: React.CSSProperties;
    large1x?: React.CSSProperties;
    large?: React.CSSProperties;
    headline?: React.CSSProperties;
    heading?: React.CSSProperties;
    action?: React.CSSProperties;
    footNote?: React.CSSProperties;
    bold?: React.CSSProperties;
    money?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    large3x: true;
    large2x: true;
    large1x: true;
    large: true;
    headline: true;
    heading: true;
    action: true;
    footNote: true;
    bold: true;
    money: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    square: true;
  }
}

export const bodyFontFamily = 'Inter,sans-serif';
export const titleFontFamily = 'Roboto';

const palette = {
  neutral: {
    0: '#FFFFFF',
    50: '#F9F9F9',
    100: '#EEF1F5',
    200: '#E3E5EA',
    300: '#D4D7DE',
    400: '#A9AFB9',
    500: '#878C97',
    600: '#4A4E56',
    700: '#2E3138',
    800: '#232529',
    900: '#161719',
  },
  primary: {
    main: '#161719',
    light: '#878C97',
    dark: '#000000',
  },
  default: {
    darker: '#00543E',
    normal: '#008763',
    bright: '#00EDAE',
    light: '#E1FAF3',
  },
  secondary: {
    darker: '#4A4E56',
    main: '#EEF1F5',
    light: '#FFFFFF',
  },
  brown: {
    darker: '#665347',
    normal: '#CCA68E',
    bright: '#FFD0B1',
    light: '#FFF9F5',
  },
  blue: {
    darker: '#475766',
    normal: '#8EAECC',
    bright: '#B1DAFF',
    light: '#F5FAFF',
  },
  violet: {
    darker: '#554766',
    normal: '#A98ECC',
    bright: '#D2B1FF',
    light: '#F9F5FF',
  },
  green: {
    darker: '#3A4A41',
    normal: '#8BB09B',
    bright: '#B4E4C9',
    light: '#F5FFFA',
  },
  red: {
    darker: '#9E3131',
    normal: '#C75656',
    bright: '#DB9898',
    light: '#FBEFEF',
  },
  yellow: {
    darker: '#CCAD41',
    normal: '#F5D668',
    bright: '#FCE592',
    light: '#FCF8E8',
  },
};

const typography = {
  fontFamily: [bodyFontFamily, titleFontFamily, 'Roboto Mono'].join(','),
  large3x: {
    fontSize: '64px',
    lineHeight: '72px',
    letterSpacing: '-0.01em',
    fontWeight: 500,
    fontFamily: 'Roboto',
  },
  large2x: {
    fontSize: '56px',
    lineHeight: '64px',
    letterSpacing: '-0.01em',
    fontWeight: 500,
    fontFamily: titleFontFamily,
  },
  large1x: {
    fontSize: '48px',
    lineHeight: '56px',
    letterSpacing: '-0.01em',
    fontWeight: 500,
    fontFamily: titleFontFamily,
  },
  large: {
    fontSize: '40px',
    lineHeight: '48px',
    letterSpacing: '-0.01em',
    fontWeight: 500,
    fontFamily: titleFontFamily,
  },
  h1: {
    fontSize: '32px',
    lineHeight: '40px',
    letterSpacing: '-0.01em',
    fontWeight: 500,
    fontFamily: titleFontFamily,
  },
  h2: {
    fontSize: '24px',
    lineHeight: '32px',
    letterSpacing: '-0.01em',
    fontWeight: 300,
    fontFamily: bodyFontFamily,
    color: palette.neutral[600],
  },
  headline: {
    fontSize: '18px',
    lineHeight: '24px',
    letterSpacing: '-0.01em',
    fontWeight: 500,
    fontFamily: titleFontFamily,
  },
  heading: {
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '0.08em',
    fontWeight: 700,
    fontFamily: titleFontFamily,
  },
  body2: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400,
    letterSpacing: '-0.01em',
    fontFamily: bodyFontFamily,
  },
  body1: {
    fontSize: '14px',
    lineHeight: '24px',
    fontFamily: bodyFontFamily,
    fontWeight: 400,
    letterSpacing: '-0.01em',
  },
  bold: {
    fontSize: '14px',
    lineHeight: '24px',
    fontFamily: bodyFontFamily,
    fontWeight: '500',
    letterSpacing: '-0.01em',
  },
  money: {
    fontSize: '14px',
    fontFamily: 'Roboto Mono',
  },
  action: {
    fontSize: '14px',
    lineHeight: '24px',
    fontWeight: 500,
    letterSpacing: '-0.01em',
    fontFamily: bodyFontFamily,
  },
  caption: {
    fontSize: '12px',
    lineHeight: '20px',
    fontWeight: 500,
    letterSpacing: '-0.01em',
    fontFamily: bodyFontFamily,
  },
  footNote: {
    fontSize: '12px',
    lineHeight: '20px',
    fontWeight: 400,
    fontFamily: bodyFontFamily,
  },
};

export const theme = createTheme({
  spacing: 8,
  typography,
  palette,
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: palette.neutral[0],
          border: `1px solid ${palette.neutral[200]} !important`,
          borderRadius: '4px',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          ...typography.body2,
          color: palette.neutral[900],
          left: '3px',
          '&.Mui-error': {
            color: palette.red.normal,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          ...typography.caption,
          color: palette.red.normal,
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        inputProps: {
          shrink: true,
        },
      },
      styleOverrides: {
        root: {
          height: '40px',
          borderRadius: '4px',
          '&.Mui-focused': {
            borderWidth: 1,
          },
          '&.Mui-focused fieldset': {
            borderWidth: '1px !important',
          },
          '&.Mui-error fieldset': {
            border: `1px solid ${palette.red.normal} !important`,
          },
          fieldset: {
            border: `1px solid ${palette.neutral[200]}`,
          },
          '.MuiInputAdornment-root': {
            color: palette.neutral[900],
          },
          '&.Mui-disabled .MuiInputAdornment-root': {
            color: palette.neutral[500],
          },
          backgroundColor: palette.neutral[0],
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          marginTop: '8px',
          marginBottom: '8px',
        },
      },
    },
    MuiChip: {
      variants: [
        {
          props: { variant: 'square' },
          style: {
            cursor: 'pointer',
            borderRadius: '4px',
            padding: '2px 12px',
            backgroundColor: palette.neutral[50],
            ...typography.caption,
          },
        },
      ],
    },
  },
});
