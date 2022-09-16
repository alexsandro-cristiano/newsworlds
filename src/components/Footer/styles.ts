import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-wrap: wrap;
  padding: 2rem 0;
  height: 9rem;
  color: #fff;
  background: #000;
  .direitos {
    font-size: 1.6rem;
  }
  .midiaSocial {
    h3 {
      font-weight: 400;
      font-size: 1.4rem;
      margin-bottom: 0.8rem;
    }
    ul {
      display: flex;
      gap: 1rem;
    }
  }
`;
