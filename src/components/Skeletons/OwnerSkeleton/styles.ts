import styled from "styled-components";
import { Flex } from "../../../assets/styles/FlexMixin";
import { PaddingMixin } from "../../../assets/styles/PaddingMixin";
import { ShimmerBackground } from "../../../assets/styles/ShimmerMixin";

export const OwnerWrapper = styled.header`
  ${Flex({d: 'column'})}
  ${PaddingMixin({})}
  width: 100%;
  max-width: 120rem;

  @media(min-width: 767px){
    ${Flex({d: 'row', jC: 'flex-start'})}
  }
`

export const OwnerInfo = styled.div`
  ${Flex({d: 'column', aI: 'flex-start'})}
  width: 100%;
  gap: 1rem;

  @media(min-width: 767px){
    margin-left: 1rem;
    width: calc(100% - 15rem);
  }
`

export const SpinnerShimer = styled.div`
  ${ShimmerBackground}
  background-size: 800px 300px; 
  width: ${props => props.theme.measures(14, 'rem')};
  height: ${props => props.theme.measures(14, 'rem')};
  display: block;
  border-radius: 50%;
  margin-bottom: 2rem;

  @media(min-width: 767px){
    margin-bottom: 0;
  }
`

export const LineShimmer = styled.div`
  ${ShimmerBackground}
  height: ${props => props.theme.measures(2, 'rem')};
  width: 100%;
  border-radius: ${props => props.theme.measures(2.6, 'rem')};
  margin-left: .4rem;
`