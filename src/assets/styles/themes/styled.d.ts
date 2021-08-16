import {} from 'styled-components'
import { ThemeType } from '../../../types/ThemeTypes';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {} 
}