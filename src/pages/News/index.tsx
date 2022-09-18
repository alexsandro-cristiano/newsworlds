import axios from 'axios'
import { CardNewsMini } from 'components/CardNews'
import { GridLayoutNewsPage } from 'layouts/GridLayoutForPage/styles'
import { useEffect, useState } from 'react'
import { BASE_URL } from 'utils/http'
import { INews, INewsParams } from 'utils/types/INews'
import { ContainerNews, ContainerNewsCategory } from './styles'

export function News({ category }: INewsParams) {
  const [allnews, setAllNews] = useState<INews[]>([])

  useEffect(() => {
    axios.get(`${BASE_URL}`).then(response => {
      setAllNews(response.data)
    })
  }, [category])
  return (
    <>
      <ContainerNewsCategory>{category}</ContainerNewsCategory>
      <ContainerNews>
        <GridLayoutNewsPage>
          {allnews.map(news => {
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
        </GridLayoutNewsPage>
      </ContainerNews>
    </>
  )
}
