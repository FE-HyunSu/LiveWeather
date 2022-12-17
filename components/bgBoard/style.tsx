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
    animation: ${bgMotion} 40s linear infinite;
  }
  &.few-clouds {
    background: url(./images/bg_fewclouds.png) repeat-x 0 0 / cover;
    animation: ${bgMotion} 40s linear infinite;
  }
  &.overcast-clouds {
    background: url(./images/bg_overcastclouds.png) repeat-x 0 0 / cover;
    animation: ${bgMotion} 40s linear infinite;
  }
  &.broken-clouds {
    background: url(./images/bg_brokenclouds.png) repeat-x 0 0 / cover;
    animation: ${bgMotion} 40s linear infinite;
  }
  &.shower-rain {
    background: url(./images/bg_showerrain.png) repeat-x 0 0 / cover;
    animation: ${bgMotion} 40s linear infinite;
  }
  &.light-rain {
    background: url(./images/bg_lightrain.png) repeat-x 0 0 / cover;
    animation: ${bgMotion} 40s linear infinite;
  }
  &.moderate-rain {
    background: url(./images/bg_moderaterain.png) repeat-x 0 0 / cover;
    animation: ${bgMotion} 40s linear infinite;
  }
  &.rain {
    background: url(./images/bg_rain.png) repeat-x 0 0 / cover;
    animation: ${bgMotion} 40s linear infinite;
  }
  &.thunderstorm {
    background: url(./images/bg_thunderstorm.png) repeat-x 0 0 / cover;
    animation: ${bgMotion} 40s linear infinite;
  }
  &.snow {
    background: url(./images/bg_snow.png) repeat-x 0 0 / cover;
    animation: ${bgMotion} 40s linear infinite;
  }
  &.light-snow {
    background: url(./images/bg_lightsnow.png) repeat-x 0 0 / cover;
    animation: ${bgMotion} 40s linear infinite;
  }
  &.mist {
    background: url(./images/bg_mist.png) repeat-x 0 0 / cover;
    animation: ${bgMotion} 40s linear infinite;
  }
`;
