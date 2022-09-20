import styled from 'styled-components';

export const CardNewsContainer = styled.div`
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
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    flex-direction: column;
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
      height: 9rem;
    }
    .date {
      font-weight: 500;
      font-size: 1.2rem;
      width: 100%;
      text-align: right;
    }
  }
`;
