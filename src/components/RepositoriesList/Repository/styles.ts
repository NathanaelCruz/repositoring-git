import styled from "styled-components";
import { BoxShadow } from "../../../assets/styles/BoxShadowMixin";
import { Flex } from "../../../assets/styles/FlexMixin";
import { PaddingMixin } from "../../../assets/styles/PaddingMixin";

export const RepositoryWrapper = styled.li`
  ${Flex({d: 'column', jC: 'space-between'})}
  ${BoxShadow}
  width: 100%;
  min-width: 10rem;
  min-height: ${props => props.theme.measures(21.2, 'rem')};
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.measures(1, 'rem')};
  overflow: hidden;
  transition: .3s ease-in-out;

  &:hover{
    transform: scale(1.05);
  }

  @media(min-width: 480px){
    width: calc(50% - 1rem);
  }

  @media(min-width: 801px){
    max-width: calc(33.33% - 2rem);
  }

  @media(min-width: 1200px){
    max-width: calc(25% - 2rem);
  }
`

export const RepositoryHeader = styled.header`
  ${Flex({jC: 'flex-end'})}
  ${PaddingMixin({pT: 0.4, pB: 0.4})}
  width: 100%;
  margin-bottom: ${props => props.theme.measures(1, 'rem')};
  background-color: ${props => props.theme.colors.gray.light};
  flex-wrap: wrap;
  grid-gap: .4rem;

  a{
    text-decoration: none;
  }
`

export const RepositoryTag = styled.span`
  ${Flex({})}
  ${PaddingMixin({pB: 0.4, pT: 0.4})}
  border-radius: ${props => props.theme.measures(2.6, 'rem')};
  font-size: ${props => props.theme.fonts.sizes.sm};

  &.private{
    background-color: ${props => props.theme.colors.alert.bgLightColor};
    border: 1px solid ${props => props.theme.colors.alert.bgDarkColor};
    color: ${props => props.theme.colors.alert.font};
  }

  &.public{
    background-color: ${props => props.theme.colors.success.bgLightColor};
    border: 1px solid ${props => props.theme.colors.success.bgDarkColor};
    color: ${props => props.theme.colors.success.font};
  }

  &.license{
    background-color: ${props => props.theme.colors.warning.bgLightColor};
    border: 1px solid ${props => props.theme.colors.warning.bgDarkColor};
    color: ${props => props.theme.colors.warning.font};
  }

  &.language{
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    transition: .3s ease-in-out;
    
    &:hover{
      background-color: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const RepositoryContent = styled.div`
  ${Flex({d: 'column'})}
  ${PaddingMixin({})}
  width: 100%;
`

export const TitleRepository = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  word-break: break-all;
  font-weight: 700;
  margin-bottom: ${props => props.theme.measures(1.2, 'rem')};
  font-size: ${props => props.theme.fonts.sizes.lg};
`

export const RepositoryFooter = styled.footer`
  ${Flex({jC: 'flex-start'})}
  ${PaddingMixin({})}
  width: 100%;
  flex-wrap: wrap;

  &.no__language{
    ${Flex({})}
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`