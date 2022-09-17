import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Outlet } from 'react-router-dom';

export function PageDeafult() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
