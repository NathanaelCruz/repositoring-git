import styled from "styled-components";
import { Flex } from "../../../assets/styles/FlexMixin";
import { PaddingMixin } from "../../../assets/styles/PaddingMixin";

export const RepositoryListContent = styled.ul`
  ${Flex({jC: 'flex-start', aI: 'flex-start'})}
  ${PaddingMixin({})}
  width: 100%;
  max-width: 120rem;
  flex-wrap: wrap;
  list-style: none;
  grid-gap: 2rem;
  margin-top: ${props => props.theme.measures(2, 'rem')};
`