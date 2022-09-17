import styled from 'styled-components';

export const Container = styled.header`
  padding: 2.5rem 0 0;
  background: #f9f9f9;
  border-bottom: 1px solid black;
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 2.4rem;
  }
`;

export const NavBar = styled.nav`
  padding: 1.5rem 3rem 3rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    li {
      font-size: 1.4rem;
      font-weight: 500;
      a {
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
