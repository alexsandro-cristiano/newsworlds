import styled from 'styled-components';

export const Container = styled.header`
  background: #2fa5d4;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: #f9f9f9;
    font-weight: 700;
    font-size: 2.4rem;
    padding: 2.5rem 0;
    border-bottom: 1px solid black;
  }
`;

export const NavBar = styled.nav`
  padding: 0.8rem 3rem;
  background-color: #f9f9f9;
  color: #2fa5d4;
  box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.6);
  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;

    li {
      font-size: 1.6rem;
      a {
        font-weight: 600;
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        text-transform: capitalize;
        a:hover {
          border-bottom: 3px solid #d800a6;
        }
      }
    }
  }
`;
