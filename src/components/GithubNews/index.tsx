import axios from 'axios';
import { useEffect, useState } from 'react';
import { IGithub, IGithubData } from 'types/IGithub';
import { Container } from './styles';

export function GithubNews({ user }: IGithub) {
  const [userGithub, setUserGithub] = useState<IGithubData | null>(null);
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then(res => setUserGithub(res.data));
  }, []);
  return (
    <Container>
      <a href={userGithub?.html_url} target="_blank" rel="noreferrer">
        <img
          src={userGithub?.avatar_url}
          alt={userGithub?.name}
          title={userGithub?.name}
        />
        <p>
          Participante da rede social Github com total de{' '}
          <strong>{userGithub?.public_repos} </strong> repositorios.{' '}
          <strong>{userGithub?.name}</strong> foi identificado no{' '}
          {userGithub?.location}.<span>Conheça mais sobre aqui.</span>
        </p>
      </a>
    </Container>
  );
}
