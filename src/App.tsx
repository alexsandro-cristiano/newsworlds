import { Header } from 'components/Header';
import { ListCardNews } from 'components/ListCardNwes';
import { Footer } from 'components/Footer';

import { GlobalStyle } from 'styles/global';
export function App() {
  return (
    <>
      <Header />
      <ListCardNews/>
      <Footer />
      <GlobalStyle />
    </>
  );
}
