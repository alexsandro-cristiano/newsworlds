import axios from 'axios'
import { CardNewsMini } from 'components/CardNews'
import { GridLayoutNewsPage } from 'layouts/GridLayoutForPage/styles'
import { useEffect, useState } from 'react'
import { INews, INewsParams } from 'types/INews'
import { ContainerNews, ContainerNewsCategory } from './styles'

export function News({ category }: INewsParams) {
  const [listNews, setListNews] = useState<INews[]>([])

  useEffect(() => {
    axios.get('http://localhost:8080/datanews').then(response => {
      setListNews(response.data)
    })
  }, [])
  return (
    <>
      <ContainerNewsCategory>{category}</ContainerNewsCategory>
      <ContainerNews>
        <GridLayoutNewsPage>
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
        </GridLayoutNewsPage>
      </ContainerNews>
    </>
  )
}
