import { orange, neutral, green, red, yellow } from './colors';
import { primaryFont } from './typography';

export const defaultTheme = {
  primaryColor: orange[300],
  primaryHoverColor: orange[400],
  primaryActiveColor: orange[500],
  disabled: neutral[400],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  textOnDisabled: neutral[100],
  primaryFont: primaryFont,
  formElementBackground: neutral[100],
  textOnFormElementBackground: neutral[600],

  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],

  }
}

export const darkTheme = {
  primaryColor: neutral[100],
  primaryHoverColor: neutral[200],
  primaryActiveColor: neutral[300],
  disabled: neutral[400],
  textColorOnPrimary: orange[300],
  textColor: orange[300],
  textColorInverted: neutral[100],
  textOnDisabled: neutral[300],
  primaryFont: primaryFont,
  formElementBackground: orange[100],
  textOnFormElementBackground: neutral[100],

  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300]
  }
}
