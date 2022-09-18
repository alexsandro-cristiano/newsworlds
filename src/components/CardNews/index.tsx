import { formatDistanceToNowStrict } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { INews } from 'utils/types/INews';
import imageDefault from 'assets/image/imageDefault.jpeg';

import { CardNewsContainer } from './styles';

export function CardNewsMini({
  category,
  image,
  published_at,
  source,
  title,
  url
}: INews) {
  const currentImage = image ? image : imageDefault;
  return (
    <CardNewsContainer>
      <a href={url} target="_blank" rel="noreferrer" className="mask">
        <section
          className="containerImage"
          style={{ backgroundImage: `url(${currentImage})` }}
        ></section>
        <section className="content">
          <div className="tags">
            <span className="source">{source}</span>
            <span className="category">{category}</span>
          </div>
          <p className="title">{title}</p>
          <span className="date">
            {formatDistanceToNowStrict(new Date(published_at), {
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
