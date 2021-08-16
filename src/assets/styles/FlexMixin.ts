
interface FlexMixinProps {
  jC?: string,
  aI?: string,
  d?: string
}

export const Flex = ({jC, aI, d}: FlexMixinProps) => `
  display: flex;
  justify-content: ${jC || 'center'};
  align-items: ${aI || 'center'};
  flex-direction: ${d || 'row'};
`