import axios from 'axios';
import { useEffect, useState } from 'react';
import { CardNewsMini } from 'components/CardNews';
import { GithubNews } from 'components/GithubNews';
import { GridLayoutThreeColumns } from 'layouts/Girds/GridThreeColumns/styles';
import { INews } from 'types/INews';
import { BoxNews, GridContainer, Text } from './styles';

export function Home() {
  const [listNews, setListNews] = useState<INews[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8080/datanews').then(response => {
      setListNews(response.data);
    });
  }, []);
  return (
    <>
      <GridContainer>
        <GridLayoutThreeColumns>
          {listNews.map(news => {
            console.log(typeof news);

            return (
              <CardNewsMini
                title={news.title}
                url={news.url}
                category={news.category}
                image={news.image}
                published_at={news.published_at}
                source={news.source}
              />
            );
          })}
        </GridLayoutThreeColumns>
        <BoxNews>
          <Text>Leia Também</Text>

          <GithubNews user="RafaelVargas29" />
          <GithubNews user="suzanaslc" />
          <GithubNews user="alexsandro-cristiano" />
        </BoxNews>
      </GridContainer>
    </>
  );
}
