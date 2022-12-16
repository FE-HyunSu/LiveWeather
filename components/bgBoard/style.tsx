import styled, { keyframes } from 'styled-components';

const bgMotion = keyframes`
  0%{background-position:0;}
  100%{background-position:100%;}
`;

export const BgBoardBox = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #000;
  transition: 1s;
  z-index: 2;
`;

export const BgBoardImgBox = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  &.sky-is-clear {
    background: url(./images/bg_skyisclear.png) repeat-x 0 0 / cover;
    animation: ${bgMotion} 30s infinite;
  }
  &.few-clouds {
    background: url(./images/bg_fewclouds.png) repeat-x 0 0 / cover;
    animation: ${bgMotion} 30s infinite;
  }
  &.overcast-clouds {
    background: url(./images/bg_overcastclouds.png) repeat-x 0 0 / cover;
    animation: ${bgMotion} 30s infinite;
  }
  &.broken-clouds {
    background: url(./images/bg_brokenclouds.png) repeat-x 0 0 / cover;
    animation: ${bgMotion} 30s infinite;
  }

  // * sky-is-clear
  // * few-clouds
  // * scattered-clouds
  // * broken-clouds
  // * overcast-clouds
  //shower-rain
  //light-rain
  //moderate-rain
  //rain
  //thunderstorm
  //snow
  //mist
`;
