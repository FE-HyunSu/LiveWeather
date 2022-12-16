import styled from 'styled-components';

export const DataInfoBox = styled.div`
  display: block;
  position: relative;
  max-width: 75rem;
  margin: auto;
  padding: 4rem 4rem 2rem 4rem;
  text-align: center;
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
        font-weight: 100;
        font-size: 8rem;
        color: #fff;
        text-transform: uppercase;
        &:after {
          content: '';
          position: absolute;
          top: 0.5rem;
          right: -1.5rem;
          width: 0.6rem;
          height: 0.6rem;
          border: 0.1rem solid #fff;
          border-radius: 100%;
        }
      }
      strong {
        display: block;
        font-weight: 200;
        font-size: 4rem;
        color: #fff;
        text-transform: uppercase;
      }
      span {
        display: inline-block;
        padding-top: 0.5rem;
        font-weight: 400;
        font-size: 1.2rem;
        color: #fff;
      }
    }
    dd {
      strong {
        display: block;
        font-weight: 200;
        font-size: 4rem;
        color: #fff;
        text-transform: uppercase;
      }
      span {
        display: inline-block;
        padding-top: 0.5rem;
        font-weight: 400;
        font-size: 1.2rem;
        color: #fff;
      }
    }
  }
`;
