import styled, { keyframes } from 'styled-components';
import { media } from '../../styles/theme';

const viewMotion = keyframes`
  0%{opacity:0; transform:translateX(-3rem);}
  100%{opacity:1; transform:translateX(0);}
`;

const turnMotion = keyframes`
  0%{transform:rotate(0deg);}
  100%{transform:rotate(-360deg);}
`;

export const GroupBox = styled.section`
  display: block;
  height: 52rem;
  overflow: hidden;
`;

export const DataInfoBox = styled.div`
  display: block;
  position: relative;
  max-width: 75rem;
  margin: auto;
  padding: 4rem 4rem 2rem 4rem;
  text-align: center;
  animation: ${viewMotion} 1s forwards;
  opacity: 0;
  transform: translateX(-3rem);
  z-index: 5;
  &:after {
    content: '';
    position: absolute;
    top: 2rem;
    right: 0;
    left: 0;
    width: calc(100% - 4rem);
    height: calc(100% - 2rem);
    margin: auto;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 1.6rem;
  }
  dl {
    dt {
      em {
        display: inline-block;
        position: relative;
        padding-right: 2rem;
        font-weight: 100;
        font-size: 8rem;
        color: rgba(255, 255, 255, 0.9);
        text-transform: uppercase;
        z-index: 2;
        &:after {
          content: '';
          position: absolute;
          top: 0.8rem;
          right: 0.4rem;
          width: 0.6rem;
          height: 0.6rem;
          border: 0.2rem solid rgba(255, 255, 255, 0.9);
          border-radius: 100%;
        }
      }
      strong {
        display: block;
        position: relative;
        padding-top: 1rem;
        font-weight: 200;
        font-size: 3.8rem;
        color: rgba(255, 255, 255, 0.9);
        text-transform: uppercase;
        word-break: keep-all;
        z-index: 2;
      }
      span {
        display: inline-block;
        position: relative;
        padding-top: 0.5rem;
        font-weight: 400;
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.9);
        z-index: 2;
      }
    }
    dd {
      strong {
        display: block;
        position: relative;
        font-weight: 200;
        font-size: 4rem;
        color: rgba(255, 255, 255, 0.9);
        text-transform: uppercase;
        z-index: 2;
      }
      span {
        display: inline-block;
        position: relative;
        padding: 0.5rem 0 1rem;
        font-weight: 400;
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.9);
        z-index: 2;
      }
    }
  }
  .multi-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-reflesh {
    position: relative;
    width: 5rem;
    height: 5rem;
    text-indent: -9999rem;
    animation: ${turnMotion} 5s linear infinite;
    z-index: 2;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 60%;
      height: 60%;
      margin: auto;
      border-top: 0.1rem solid rgba(255, 255, 255, 0.9);
      border-bottom: 0.1rem solid rgba(255, 255, 255, 0.9);
      border-left: 0.1rem solid rgba(255, 255, 255, 0.9);
      border-radius: 100%;
    }
    &:after {
      content: '';
      position: absolute;
      top: 1.6rem;
      right: 0;
      bottom: 0;
      left: 2.5rem;
      width: 1rem;
      height: 1rem;
      margin: auto;
      border-top: 0.1rem solid rgba(255, 255, 255, 0.9);
      border-right: 0.1rem solid rgba(255, 255, 255, 0.9);
      transform: rotate(-15deg);
    }
  }
  .etc-info-slide {
    flex: 1 1;
    height: 5rem;
    overflow: hidden;
  }
  .swiper-slide {
    text-align: left;
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding-left: 4rem;
      font-weight: 200;
      font-size: 2rem;
      color: rgba(255, 255, 255, 0.9);
      transition: 0.3s;
      ${media.tablet} {
        padding-left: 2rem;
        justify-content: flex-start;
      }
      span {
        display: inline-block;
        position: relative;
        &:after {
          content: '';
          position: absolute;
          top: -0.2rem;
          right: -0.6rem;
          width: 0.2rem;
          height: 0.2rem;
          border: 0.1rem solid rgba(255, 255, 255, 0.9);
          border-radius: 100%;
        }
      }
    }
  }
`;
