type MessageTypes = {
  font: string,
  bgDarkColor: string,
  bgLightColor: string
}

type GrayTypes = {
  light: string,
  medium: string,
  dark: string
}

type ThemeColors = {
  primary: string,
  secondary: string,
  black: string,
  white: string,
  bgColor: string,
  font: string,
  gray: GrayTypes,
  alert: MessageTypes,
  warning: MessageTypes,
  success: MessageTypes,
  defaultModal: MessageTypes
}

type FontsSizesTypes = {
  sm: string,
  md: string,
  lg: string,
  xl: string
}

type ThemeFonts = {
  sizes: FontsSizesTypes
}

export type ThemeType = {
  colors: ThemeColors,
  fonts: ThemeFonts,
  measures: (value: number, measure: string) => string
}
