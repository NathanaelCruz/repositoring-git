import styled from "styled-components";
import { BoxShadow } from "../../../../assets/styles/BoxShadowMixin";
import { Flex } from "../../../../assets/styles/FlexMixin";
import { PaddingMixin } from "../../../../assets/styles/PaddingMixin";
import { ShimmerBackground } from "../../../../assets/styles/ShimmerMixin";


export const RepositorySkeleton = styled.li`
  ${Flex({d: 'column', jC: 'space-between'})}
  ${PaddingMixin({})}
  ${BoxShadow}
  width: 100%;
  min-width: 10rem;
  min-height: ${props => props.theme.measures(21.2, 'rem')};
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.measures(1, 'rem')};

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
  width: 100%;
  margin-bottom: ${props => props.theme.measures(1, 'rem')};
  flex-wrap: wrap;
  grid-gap: .4rem;
`
export const RepositoryContent = styled.div`
  ${Flex({d: 'column'})}
  ${PaddingMixin({})}
  width: 100%;
`
export const ContentTop = styled.div`
  ${Flex({aI: 'flex-start', jC: 'flex-start'})}
  width: 100%;
  grid-gap: 1rem;
  margin-bottom: ${props => props.theme.measures(1.2, 'rem')};
`

export const ContentTopText = styled.div`
  ${Flex({jC: 'flex-start', d: 'column', aI: 'flex-start'})}
  width: calc(100% - 6rem);

  & > *{
    margin-bottom: .4rem;
  }
`

export const RepositoryFooter = styled.footer`
  ${Flex({jC: 'flex-start'})}
  ${PaddingMixin({})}
  width: 100%;
  flex-wrap: wrap;
`

export const SpinnerShimer = styled.div`
  ${ShimmerBackground}
  display: block;
  width: ${props => props.theme.measures(5, 'rem')};
  height: ${props => props.theme.measures(5, 'rem')};
  border-radius: 50%;

`

export const LineShimmer = styled.div`
  ${ShimmerBackground}
  height: ${props => props.theme.measures(2, 'rem')};
  border-radius: ${props => props.theme.measures(2.6, 'rem')};
  margin-left: .4rem;

  &.small{
    width: 20%;
  }

  &.medium{
    width: 50%;
  }

  &.longer{
    width: 100%;
  }

`