import styled from 'styled-components';

export const CardNewsContainer = styled.div`
  min-width: 30rem;
  .mask {
    display: block;
    transition: ease-in-out 0.2s;
    filter: grayscale(100%);
    &:hover {
      filter: grayscale(0%);
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
    border: 2px solid red;
  }
`;
