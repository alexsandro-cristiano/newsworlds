import styled from 'styled-components';

export const CardNewsContainer = styled.div`
  min-width: 30rem;
  padding: 1rem;
  .mask {
    display: block;
    transition: ease-in-out 0.2s;
    &:hover {
      .containerImage {
        background-size: 110%;
      }
    }
  }
  .containerImage {
    padding-top: 56.25%;
    border-radius: 5px;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    transition: 0.2s;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    padding: 0 1rem;
    .source {
      margin-top: 1rem;
      font-weight: 500;
      font-size: 1.3rem;
    }
    .title {
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 1.3;
    }
    .date {
      font-size: 1.2rem;
      font-weight: 300;
    }
  }
`;