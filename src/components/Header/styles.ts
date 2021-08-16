import styled from "styled-components";
import { Flex } from "../../assets/styles/FlexMixin";

export const HeaderRepositoring = styled.header`
  ${Flex({})}
  width: 100%;
  padding: ${props => props.theme.measures(1.4, 'rem')};
  margin-bottom: 1rem;
`

export const NavigatorHeader = styled.nav`
  ${Flex({d: 'column'})}
  width: 100%;
  max-width: ${props => props.theme.measures(120, 'rem')};
  min-height: 8rem;

  @media(min-width: 767px){
    ${Flex({jC: 'space-between', d: 'row'})}
  }
`