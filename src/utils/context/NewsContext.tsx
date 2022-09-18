import { createContext, ReactNode, useEffect, useState } from 'react';
import axios from 'axios';
import { INews } from 'utils/types/INews';
import { LOCAL_STORAGE_KEY } from 'utils/http';

interface NewsContextType {
  news: INews[];
}

interface INewsContextProviderProps {
  children: ReactNode;
}

export const NewsContext = createContext({} as NewsContextType);

export function NewsContextProvider({ children }: INewsContextProviderProps) {
  const [news, setNews] = useState<INews[]>([]);

  function setNewsAndSave(listNews: INews[]) {
    setNews(listNews);
    sessionStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(listNews));
  }

  function loadingNews() {
    const newSaved = sessionStorage.getItem(LOCAL_STORAGE_KEY);
    if (newSaved) {
      const intermediario = JSON.parse(newSaved);
      setNews(intermediario.data);
    } else {
      getNews();
    }
  }

  function getNews() {
    axios
      .get(
        `http://api.mediastack.com/v1/news?access_key=a790a145c6e3f299dea7474ec4b01f7d&limit=100&languages=pt,-ar`
      )
      .then(response => {
        setNewsAndSave(response.data.data);
      });
  }

  useEffect(() => {
    loadingNews();
  }, []);

  return (
    <NewsContext.Provider value={{ news }}>{children}</NewsContext.Provider>
  );
}
