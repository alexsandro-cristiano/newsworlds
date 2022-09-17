import { Container, NavBar } from './styles';

export function Header() {
  return (
    <Container>
      <h2 className="logo">News Worlds</h2>
      <NavBar>
        <ul>
          <li>
            <a href="#">General</a>
          </li>
          <li>
            <a href="#">Negocios</a>
          </li>
          <li>
            <a href="#">entreterimento</a>
          </li>
          <li>
            <a href="#">saúde</a>
          </li>
          <li>
            <a href="#">ciência</a>
          </li>
          <li>
            <a href="#">esportes</a>
          </li>
          <li>
            <a href="#">tecnologia</a>
          </li>
        </ul>
      </NavBar>
    </Container>
  );
}
