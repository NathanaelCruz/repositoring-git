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
  background-color: transparent;
  font-weight: 700;
  transition: .3s ease-in-out;

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
    border: 1px solid ${props => props.theme.colors.warning.bgDarkColor};
    color: ${props => props.theme.colors.warning.bgDarkColor};

    &:hover{
      background-color: ${props => props.theme.colors.warning.bgLightColor};
      color: ${props => props.theme.colors.warning.font};
    }
  }

  &.fork{
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    cursor: point;

    &:hover{
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.white};
    }
  }

  &.language{
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    
    &:hover{
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.white};
    }
  }
`

export const RepositoryContent = styled.div`
  ${Flex({d: 'column'})}
  ${PaddingMixin({})}
  width: 100%;
`

export const ContentTop = styled.div`
  ${Flex({aI: 'flex-start'})}
  width: 100%;
  grid-gap: 1rem;
  margin-bottom: ${props => props.theme.measures(1.4, 'rem')};
`

export const ContentTopText = styled.div`
  ${Flex({jC: 'flex-start', d: 'column', aI: 'flex-start'})}
`

export const TitleRepository = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  word-break: break-all;
  font-weight: 700;
  margin-bottom: ${props => props.theme.measures(1, 'rem')};
  font-size: ${props => props.theme.fonts.sizes.lg};
`

export const ContentImage = styled.img`
  display: block;
  width: ${props => props.theme.measures(5, 'rem')};
  height: ${props => props.theme.measures(5, 'rem')};
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.primary};
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