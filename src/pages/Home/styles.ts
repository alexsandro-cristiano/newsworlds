import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  grid-gap: 1.5rem;
  padding: 0 2rem;
  padding-bottom: 3rem;
`;

export const BoxNews = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;
  div > h2 {
    font-size: 1.5rem;
    font-weight: 500;
    color: gray;
    margin-bottom: -1rem;
  }
`;
