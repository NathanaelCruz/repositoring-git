import { theme } from "./themes/theme"

interface PaddingProps{
  pT?: number,
  pL?: number,
  pR?: number,
  pB?: number
}

export const PaddingMixin = ({pT, pL, pR, pB}: PaddingProps) => `
  padding-top: ${pT ? theme.measures(pT, 'rem') : '1rem'};
  padding-bottom: ${pB ? theme.measures(pB, 'rem') : '1rem'};
  padding-right: ${pR ? theme.measures(pR, 'rem') : '1rem'};
  padding-left: ${pL ? theme.measures(pL, 'rem') : '1rem'};
`