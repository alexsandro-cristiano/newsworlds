import styled from 'styled-components'

export const Container = styled.section`
  margin-bottom: 1.5rem;
  a {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.7rem;
    padding: 0.2rem;
    border: 1px solid rgba(192, 192, 192, 0.6);
    border-radius: 5px;
    img {
      display: block;
      width: 40%;
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
      img {
        display: block;
        width: 40%;
        border-radius: 5px;
      }
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
  }
`
