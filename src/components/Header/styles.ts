import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: #2fa5d4;
  height: 7rem;
  display: flex;
  align-items: center;
  box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.4);
  .logo {
    color: #f9f9f9;
    font-weight: 700;
    font-size: 2.4rem;
    text-align: center;
    margin: 0 auto;
  }
  button {
    color: #f9f9f9;
    border: none;
    background: none;
    margin-left: 3.2rem;
    visibility: visible;
  }
  @media screen and (min-width: 768px) {
    button {
      visibility: hidden;
      display: none;
    }
  }
`

export const NavBarContainer = styled.nav`
  visibility: hidden;
  display: none;

  @media screen and (min-width: 768px) {
    visibility: visible;
    display: block;
    padding: 0.8rem 2.4rem;
    background-color: #f9f9f9;
    color: #2fa5d4;
    box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.8);
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
        }
      }
    }
  }
`
