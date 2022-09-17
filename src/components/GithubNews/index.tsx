import axios from 'axios';
import { useEffect, useState } from 'react';
import { IGithub, IGithubData } from 'types/Github';
import { Container, TextContainer } from './styles';

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
        <div className="containerI">
          <img
            src={userGithub?.avatar_url}
            alt={userGithub?.name}
            title={userGithub?.name}
          />
        </div>
        <TextContainer>
          <p>
            Homem do {userGithub?.location} é identificado como{' '}
            {userGithub?.name} e se atuo intitula como
            {userGithub?.bio}.
          </p>
          <p>
            Atualmente ele possui {userGithub?.public_repos} repositorios em uma
            rede social chamada Github.
          </p>
        </TextContainer>
      </a>
    </Container>
  );
}
