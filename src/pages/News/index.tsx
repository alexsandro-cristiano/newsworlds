import { useContext } from 'react'
import { NewsContext } from 'utils/context/NewsContext'
import { INewsParams } from 'utils/types/INews'
import { GridLayoutNewsPage } from 'layouts/GridLayoutForPage/styles'
import { CardNewsMini } from 'components/CardNews'
import { ContainerNews, ContainerNewsCategory } from './styles'

export function News({ category }: INewsParams) {
  const { news } = useContext(NewsContext)
  const filteredNews = news.filter(newsItem => {
    return newsItem.category === category
  })

  return (
    <>
      <ContainerNewsCategory>{category}</ContainerNewsCategory>
      <ContainerNews>
        <GridLayoutNewsPage>
          {filteredNews.map(newsItem => {
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
            )
          })}
        </GridLayoutNewsPage>
      </ContainerNews>
    </>
  )
}
