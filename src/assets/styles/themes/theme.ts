import { ThemeType } from "../../../types/ThemeTypes";


export const theme: ThemeType = {
  colors: {
    primary: '#140F2D',
    secondary: '#f49d37',
    bgColor: '#F8F8F8',
    font: '#363839',
    white: '#FCFCFC',
    black: '#070707',
    gray: {
      light: '#E0E0E0',
      medium: '#B5B5B5',
      dark: '#8A8A8A'
    },
    defaultModal: {
      font: '#263137',
      bgDarkColor: '#A3A5A8',
      bgLightColor: '#DFE4E0'
    },
    alert: {
      font: '#f5f6fa',
      bgDarkColor: '#69140E',
      bgLightColor: '#FFB097'
    },
    success: {
      font: '#f5f6fa',
      bgDarkColor: '#336F30',
      bgLightColor: '#50AF4C'
    },
    warning: {
      font: '#2f3640',
      bgDarkColor: '#e1b12c',
      bgLightColor: '#fbc531'
    }
  },
  fonts:{
    sizes: {
      sm: '1.2rem',
      md: '1.6rem',
      lg: '2.4rem',
      xl: '3.6rem'
    }
  },
  measures: (value: number, measure: string) => {
    let baseMeasure = 2
    let baseDecimalMeasure = 0.2

    let newMeasure = (value % baseMeasure === 0 || value === 1) ? value : Math.ceil((value / baseDecimalMeasure) * baseMeasure) / 10

    return `${newMeasure}${measure}`
  }
}