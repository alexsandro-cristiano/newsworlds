import styled from 'styled-components';

export const CardNewsContainer = styled.div`
  min-width: 30rem;
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
    padding-top: 52%;
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
    .tags {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      .source,
      .category {
        margin-top: 1rem;
        font-weight: 500;
        font-size: 1.3rem;
      }
      .category {
        background: #f7ecde;
        padding: 0.3rem;
        border-radius: 5px;
        text-transform: capitalize;
      }
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
