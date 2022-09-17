import styled from 'styled-components';

export const Container = styled.section`
  margin-bottom: 3rem;

  a {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.6rem;
    img {
      display: block;
      width: 40%;
      border-radius: 5px;
    }
    p {
      font-size: 1.2rem;
      span {
        display: block;
        text-decoration: underline;
      }
    }
  }
`;
