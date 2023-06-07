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
    placeholder?: React.CSSProperties;
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
    placeholder: true;
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
    0: 'hsl(0, 0%, 99%)',
    50: 'hsl(240, 2%, 88%)',
    100: 'hsl(220, 3%, 86%)',
    200: 'hsl(216, 3%, 67%)',
    300: 'hsl(214, 3%, 56%)',
    400: 'hsl(213, 4%, 45%)',
    500: 'hsl(214, 4%, 36%)',
    600: 'hsl(216, 4%, 27%)',
    700: 'hsl(210, 4%, 18%)',
    800: 'hsl(210, 5%, 9%)',
    900: 'hsl(180, 4%, 5%)',
  },
  primary: {
    main: 'hsl(220, 6%, 9%)',
    light: 'hsl(220, 7%, 56%)',
    dark: 'hsl(0, 0%, 0%)',
  },
  default: {
    darker: 'hsl(166, 72%, 61%)',
    normal: 'hsl(166, 70%, 81%)',
    bright: 'hsl(166, 70%, 88%)',
    light: 'hsl(166, 85%, 95%)',
  },
  secondary: {
    darker: 'hsl(220, 7%, 31%)',
    main: 'hsl(220, 26%, 95%)',
    normal: 'hsl(220, 26%, 95%)',
    light: 'hsl(0, 0%, 100%)',
  },
  brown: {
    darker: 'hsl(25, 85%, 26%)',
    normal: 'hsl(25, 85%, 34%)',
    bright: 'hsl(45, 91%, 55%)',
    light: 'hsl(40, 94%, 66%)',
  },
  blue: {
    darker: 'hsl(197, 81%, 66%)',
    normal: 'hsl(197, 81%, 84%)',
    bright: 'hsl(197, 92%, 92%)',
    light: 'hsl(197, 100%, 97%)',
  },
  violet: {
    darker: 'hsl(257, 65%, 62%)',
    normal: 'hsl(257, 42%, 75%)',
    bright: 'hsl(257, 36%, 86%)',
    light: 'hsl(257, 40%, 93%)',
  },
  green: {
    darker: 'hsl(166, 72%, 61%)',
    normal: 'hsl(166, 70%, 81%)',
    bright: 'hsl(166, 70%, 88%)',
    light: 'hsl(166, 85%, 95%)',
  },
  red: {
    darker: 'hsl(0, 70%, 45%)',
    normal: 'hsl(0, 77%, 60%)',
    bright: 'hsl(0, 86%, 72%)',
    light: 'hsl(0, 82%, 84%)',
  },
  yellow: {
    darker: 'hsl(47, 100%, 52%)',
    normal: 'hsl(47, 100%, 70%)',
    bright: 'hsl(47, 100%, 90%)',
    light: 'hsl(47, 100%, 97%)',
  },
  pink: {
    darker: 'hsl(298, 73%, 76%)',
    normal: 'hsl(298, 79%, 90%)',
    bright: 'hsl(298, 79%, 90%)',
    light: 'hsl(298, 92%, 98%)',
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
  placeholder: {
    fontSize: '14px',
    lineHeight: '24px',
    fontFamily: bodyFontFamily,
    fontWeight: 400,
    letterSpacing: '-0.01em',
    color: palette.neutral[500],
    fontStyle: 'italic',
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
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          ':hover': {
            borderRadius: '6px',
          },
          borderRadius: '6px',
        },
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
          borderRadius: '6px',
          border: `1px solid ${palette.neutral[100]}`,
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
          shrink: 'true',
        },
      },
      styleOverrides: {
        root: {
          height: '40px',
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
            borderRadius: '6px',
            padding: '2px 12px',
            backgroundColor: palette.neutral[50],
            ...typography.caption,
          },
        },
      ],
    },
  },
});
