import axios from 'axios'
import { CardNewsMini } from 'components/CardNews'
import { GithubNews } from 'components/GithubNews'
import { GridLayoutNewsHome } from 'layouts/GridLayoutForPage/styles'
import { useEffect, useState } from 'react'
import { BASE_URL } from 'utils/http'
import { INews } from 'utils/types/INews'
import { SidebarNews, GridContainer, Text } from './styles'

export function Home() {
  const [listNews, setListNews] = useState<INews[]>([])

  useEffect(() => {
    axios.get(`${BASE_URL}`).then(response => {
      setListNews(response.data)
    })
  }, [])
  return (
    <>
      <GridContainer>
        <GridLayoutNewsHome>
          {listNews.map(news => {
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
        <SidebarNews>
          <Text>Leia Também</Text>
          <GithubNews user="RafaelVargas29" />
          <GithubNews user="suzanaslc" />
          <GithubNews user="alexsandro-cristiano" />
        </SidebarNews>
      </GridContainer>
    </>
  )
}
