import { useContext } from 'react';
import { CardNewsMini } from 'components/CardNews';
import { GithubNews } from 'components/GithubNews';
import { GridLayoutNewsHome } from 'layouts/GridLayoutForPage/styles';
import { NewsContext } from 'utils/context/NewsContext';

import { GridContainer, SidebarNews, Text } from './styles';

export function Home() {
  const { news } = useContext(NewsContext);
  console.log('Estou na HOME  tipo de news => ' + typeof news);
  return (
    <>
      <GridContainer>
        <GridLayoutNewsHome>
          {news.map(newsItem => {
            return (
              <CardNewsMini
                key={newsItem.published_at}
                title={newsItem.title}
                url={newsItem.url}
                category={newsItem.category}
                image={newsItem.image}
                published_at={newsItem.published_at}
                source={newsItem.source}
              />
            );
          })}
        </GridLayoutNewsHome>
        <SidebarNews>
          <Text>Leia Também</Text>
          <GithubNews user="RafaelVargas29" />
          <GithubNews user="suzanaslc" />
          <GithubNews user="alexsandro-cristiano" />
        </SidebarNews>
      </GridContainer>
    </>
  );
}
