import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

import { GlobalStyle } from 'styles/global';
export function App() {
  const dados = {
    author: 'Susan Dominus',
    title: 'Can Coco Gauff the Tennis Prodigy Become a Tennis Legend?',
    description:
      'Since Coco Gauff went pro at 14, she has played under the weight of high expectations. Now 18, she has her own measures for greatness.',
    url: 'https://www.nytimes.com/2022/08/26/magazine/coco-gauff-us-open.html',
    source: 'The New York Times',
    image:
      'https://static01.nyt.com/images/2022/08/28/magazine/28mag-Gauff-images-02/28mag-Gauff-images-02-moth.jpg',
    category: 'sports',
    language: 'en',
    country: 'us',
    published_at: '2022-08-26T09:02:08+00:00'
  };
  return (
    <>
      <Header />
      <Footer />
      <GlobalStyle />
    </>
  );
}
