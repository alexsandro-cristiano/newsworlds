import axios from 'axios'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { BASE_URL } from 'utils/http'
import { INews } from 'utils/types/INews'

interface NewsContextType {
  news: INews[]
}

interface INewsContextProviderProps {
  children: ReactNode
}

export const NewsContext = createContext({} as NewsContextType)

export function NewsContextProvider({ children }: INewsContextProviderProps) {
  const [news, setNews] = useState<INews[]>([])

  function salvarEmCache(data: INews[]) {
    const filteredNews = data.filter(newsItem => {
      return newsItem.image !== null
    })
    console.log('salvei lá')
    setNews(filteredNews)
  }

  useEffect(() => {
    axios.get(`${BASE_URL}`).then(response => {
      salvarEmCache(response.data)
    })
  }, [])

  return (
    <NewsContext.Provider value={{ news }}>{children}</NewsContext.Provider>
  )
}
