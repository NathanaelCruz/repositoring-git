import styled from "styled-components";
import { BoxShadow } from "../../assets/styles/BoxShadowMixin";
import { Flex } from "../../assets/styles/FlexMixin";
import { PaddingMixin } from "../../assets/styles/PaddingMixin";

export const WrapperSearch = styled.div`
  ${Flex({})}
  ${BoxShadow}
  position: relative;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.measures(2.6, 'rem')};
  ${PaddingMixin({pT: 0.8, pB: 0.8})};
  border: 1px solid ${props => props.theme.colors.gray.light};
`

export const SearchInput = styled.input`
  width: 100%;
  max-width: ${props => props.theme.measures(29.2, 'rem')};
  background-color: ${props => props.theme.colors.white};
  ${PaddingMixin({pR: 4.2, pL: 1.4})};
  border-radius: ${props => props.theme.measures(2.6, 'rem')};
  border: 1px solid transparent;
  transition: .3s ease-in-out;

  &::placeholder{
    color: ${props => props.theme.colors.gray.medium};
  }

  &:active,
  &:focus{
    outline: none;
    border: 1px solid ${props => props.theme.colors.gray.light};
  }

`

export const SearchButton = styled.button`
  ${Flex({})}
  position: absolute;
  right: ${props => props.theme.measures(1, 'rem')};
  top: ${props => props.theme.measures(0.8, 'rem')};
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  width: ${props => props.theme.measures(4, 'rem')};
  height: ${props => props.theme.measures(4, 'rem')};
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  transition: .3s ease-in-out;

  &:hover{
    right: -1.2rem;
    top: -0.2rem;
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.secondary};
    width: ${props => props.theme.measures(6.4, 'rem')};
    height: ${props => props.theme.measures(6.4, 'rem')};
  }
`