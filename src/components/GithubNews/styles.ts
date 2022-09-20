import styled from 'styled-components';

export const Container = styled.article`
  margin-bottom: 1.5rem;
  a {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.7rem;
    padding: 0.2rem;
    border-radius: 5px;
    img {
      display: block;
      max-width: 25vw;
      max-height: 25vh;
      border-radius: 5px;
    }
    p {
      font-size: 1.3rem;
      line-height: 1.3;
      font-weight: 500;
      span {
        display: block;
        text-decoration: underline;
      }
    }
  }

  @media (min-width: 425px) {
    a {
      p {
        font-size: 1.6rem;
        line-height: 1.6;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    display: flex;
    flex: 1;
  }
  @media (min-width: 992px) {
    a {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 0.6rem;
      border: none;
      img {
        max-width: 15vw;
        max-height: 15vh;
      }
      p {
        font-size: 1.3rem;
        span {
          display: block;
          text-decoration: underline;
        }
      }
    }
  }
`;
