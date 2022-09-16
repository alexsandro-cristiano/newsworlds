import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { Container } from './styles';

export function Footer() {
  return (
    <Container>
      <section className="direitos">
        <p>&copy; 2022 | Desenvolvido por Alexsandro Silva.</p>
      </section>
      <section className="midiaSocial">
        <h3>Conecte-se</h3>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/alexsandro-cristiano"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/alexsandro-cristiano"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub size={24} />
            </a>
          </li>
        </ul>
      </section>
    </Container>
  );
}
