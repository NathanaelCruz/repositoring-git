import { css } from "styled-components";

//#cdcdcd
export const ShimmerBackground = css`
  background: #eaeaea;
  background-image: linear-gradient(to right, #eaeaea 0%, #c5c2c2 20%, #eaeaea 40%, #eaeaea 100%);
  background-repeat: no-repeat;
  background-size: 800px 104px; 
  display: inline-block;
  position: relative; 
  animation-duration: 1s;
  animation-fill-mode: forwards; 
  animation-iteration-count: infinite;
  animation-name: placeholderShimmer;
  animation-timing-function: linear;

  @keyframes placeholderShimmer {
    0% {
      background-position: -468px 0;
    }
    
    100% {
      background-position: 468px 0; 
    }
  }
`