import styled from 'styled-components';

export const DataInfoBox = styled.div`
  display: block;
  position: relative;
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
  h1 {
    strong {
      display: block;
      font-weight: 200;
      font-size: 4rem;
      color: #fff;
      text-transform: uppercase;
    }
    span {
      font-weight: 400;
      font-size: 1.2rem;
      color: #fff;
    }
  }
`;
