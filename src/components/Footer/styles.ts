import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 18rem;
  color: #fff;
  background: #000;
  padding: 1rem 0 0;
  .direitos {
    font-size: 1.3rem;
    text-align: center;
    order: 2;
  }
  .midiaSocial {
    h3 {
      font-weight: 400;
      font-size: 1.4rem;
      margin-bottom: 1.5rem;
    }
    ul {
      display: flex;
      justify-content: center;
      gap: 2rem;
    }
  }
  @media (min-width: 500px) {
    flex-wrap: wrap;
    align-items: flex-end;
    flex-direction: row;
    height: 10rem;
    padding-bottom: 1rem;
    .direitos {
      font-size: 1.5rem;
      order: 0;
    }
  }
`
