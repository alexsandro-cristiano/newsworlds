import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

import { GlobalStyle } from 'styles/global';
import { Home } from 'pages/Home';
export function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
      <GlobalStyle />
    </>
  );
}
