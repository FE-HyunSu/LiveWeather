import styled, { keyframes } from 'styled-components';

const loadingMotion = keyframes`
  0%{transform:rotate(0deg);}
  100%{transform:rotate(360deg);}
`;
const viewMotion = keyframes`
  0%{top:calc(50% - .1rem); opacity:0;}
  100%{top:calc(50% + 1rem); opacity:1;}
`;

export const LoadingBox = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
  z-index: 10;
  p {
    position: absolute;
    top: calc(50% - 0.1rem);
    width: 100%;
    font-weight: 300;
    font-size: 1.3rem;
    color: #fff;
    opacity: 0;
    animation: ${viewMotion} 2s 2s forwards;
    z-index: 2;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 3rem;
    left: 0;
    width: 3rem;
    height: 3rem;
    margin: auto;
    border-top: 0.1rem solid #fff;
    border-right: 0.1rem solid #fff;
    border-radius: 100%;
    animation: ${loadingMotion} 1s linear infinite;
  }
`;
