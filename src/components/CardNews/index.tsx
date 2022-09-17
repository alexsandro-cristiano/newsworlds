import { formatDistanceToNowStrict } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { CardNewsContainer } from './styles';

const dados = {
  author: 'TMZ Staff',
  title: 'Rafael Nadal Pulls Out Of U.S. Open Over COVID-19 Concerns',
  description:
    'Rafael Nadal is officially OUT of the U.S. Open ... the tennis legend said Tuesday it\'s just too damn unsafe for him to travel to America during the COVID-19 pandemic. "The situation is very complicated worldwide," Nadal wrote in a statement. "The…',
  url: 'https://www.tmz.com/2020/08/04/rafael-nadal-us-open-tennis-covid-19-concerns/',
  source: 'TMZ.com',
  image:
    'https://imagez.tmz.com/image/fa/4by3/2020/08/04/fad55ee236fc4033ba324e941bb8c8b7_md.jpg',
  category: 'general',
  language: 'en',
  country: 'us',
  published_at: '2020-09-16T05:47:24+00:00'
};

export function CardNews() {
  return (
    <CardNewsContainer>
      <a href={dados.url} target="_blank" rel="noreferrer" className="mask">
        <section
          className="containerImage"
          style={{ backgroundImage: `url(${dados.image})` }}
        ></section>
        <section className="content">
          <div className="tags">
            <span className="source">{dados.source}</span>
            <span className="category">{dados.category}</span>
          </div>
          <p className="title">{dados.title}</p>
          <span className="date">
            {}

            {formatDistanceToNowStrict(new Date(dados.published_at), {
              addSuffix: true,
              unit: 'month',
              locale: ptBR
            })}
          </span>
        </section>
      </a>
    </CardNewsContainer>
  );
}
