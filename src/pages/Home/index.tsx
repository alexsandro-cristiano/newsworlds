import axios from 'axios'
import { CardNewsMini } from 'components/CardNews'
import { GithubNews } from 'components/GithubNews'
import { GridLayoutNewsHome } from 'layouts/GridLayoutForPage/styles'
import { useEffect, useState } from 'react'
import { INews } from 'types/INews'
import { AsideNews, GridContainer, Text } from './styles'

export function Home() {
  const [listNews, setListNews] = useState<INews[]>([])

  useEffect(() => {
    axios.get('http://localhost:8080/datanews').then(response => {
      setListNews(response.data)
    })
  }, [])
  return (
    <>
      <GridContainer>
        <GridLayoutNewsHome>
          {listNews.map(news => {
            console.log(typeof news)

            return (
              <CardNewsMini
                title={news.title}
                url={news.url}
                category={news.category}
                image={news.image}
                published_at={news.published_at}
                source={news.source}
              />
            )
          })}
        </GridLayoutNewsHome>
        <AsideNews>
          <Text>Leia Também</Text>

          <GithubNews user="RafaelVargas29" />
          <GithubNews user="suzanaslc" />
          <GithubNews user="alexsandro-cristiano" />
        </AsideNews>
      </GridContainer>
    </>
  )
}
