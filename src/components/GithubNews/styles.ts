import styled from 'styled-components';

export const Container = styled.section`
  margin: 2rem 0;
  width: 30rem;
  border: 1px solid #eefe;
  a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;

    img {
      display: block;
      max-width: 25vw;
      max-height: 25vh;
      border-radius: 5px;
    }
  }
`;

export const TextContainer = styled.div`
  margin-top: 1.2rem;
  width: 20rem;
  p {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.6;
  }
`;
