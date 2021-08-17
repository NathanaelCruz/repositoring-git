import styled from "styled-components";
import { Flex } from "../../assets/styles/FlexMixin";
import { PaddingMixin } from "../../assets/styles/PaddingMixin";

export const OwnerWrapper = styled.header`
  ${Flex({d: 'column'})}
  ${PaddingMixin({})}
  width: 100%;
  max-width: 120rem;

  @media(min-width: 767px){
    ${Flex({d: 'row', jC: 'flex-start'})}
  }
`

export const OwnerLinkImage = styled.a`
  width: ${props => props.theme.measures(14, 'rem')};
  height: ${props => props.theme.measures(14, 'rem')};
  border-radius: 50%;
  border: 2px solid ${props => props.theme.colors.primary};
  overflow: hidden;
  margin-bottom: 2rem;

  @media(min-width: 767px){
    margin-bottom: 0;
  }
`

export const OwnerImage = styled.img`
  filter: grayscale(1);
  transition: .3s ease-in-out;
  width: 100%;

  &:hover{
    filter: grayscale(0);
  }
`

export const OwnerInfo = styled.div`
  ${Flex({d: 'column', aI: 'flex-start'})}
  gap: 1rem;

  @media(min-width: 767px){
    margin-left: 1rem;
  }
`

export const OwnerName = styled.h2`
  font: 700 ${props => props.theme.fonts.sizes.lg} 'Spartan', 'sans-serif';
  text-align: center;

  .featured{
    font-size: ${props => props.theme.measures(3, 'rem')};
  }

  @media(min-width: 767px){
    text-align: left;
  }
`

export const OwnerText = styled.h3`
  font: 400 ${props => props.theme.fonts.sizes.md} 'Spartan', 'sans-serif';
`