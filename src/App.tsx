import { GlobalStyle } from 'styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from 'routes/Router'
import { NewsContextProvider } from 'utils/context/NewsContext'

export function App() {
  return (
    <>
      <BrowserRouter>
        <NewsContextProvider>
          <Router />
        </NewsContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}
