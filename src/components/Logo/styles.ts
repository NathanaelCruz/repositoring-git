import styled from "styled-components";
import { Flex } from "../../assets/styles/FlexMixin";


export const WrapperLogo = styled.a`
  ${Flex({d: 'column'})}
  width: 100%;
  max-width: ${props => props.theme.measures(26, 'rem')};
  padding: ${props => props.theme.measures(1.4, 'rem')} ${props => props.theme.measures(1.2, 'rem')};
  text-decoration: none;

  svg{
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.primary};
    transition: .3s ease-in-out;
  }

  &:hover{
    svg{
      color: ${props => props.theme.colors.secondary};
      transform: rotate(-15deg);
    }
  }

  @media(min-width: 767px){
    ${Flex({jC: 'space-between'})}
    max-height: ${props => props.theme.measures(4, 'rem')};
    padding: ${props => props.theme.measures(1.2, 'rem')};
    svg{
      margin-bottom: 0rem;
    }
  }
`

export const LogoText = styled.h1`
  font: 400 ${props => props.theme.fonts.sizes.xl} 'Pattaya', 'sans-serif';
`