import styled from "styled-components";
import { Flex } from "../../assets/styles/FlexMixin";
import { PaddingMixin } from "../../assets/styles/PaddingMixin";

export const Wrapper = styled.main`
  ${Flex({d: 'column'})}
  ${PaddingMixin({pT: 2, pB: 4})}
  width: 100%;
`