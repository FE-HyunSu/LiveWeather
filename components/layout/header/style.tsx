import styled from 'styled-components';

export const HeaderBox = styled.header`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 5rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.2);
  z-index: 5;
  h1 {
    font-weight: 200;
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    text-transform: uppercase;
  }
`;
