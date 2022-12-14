import { DefaultLayout } from 'layouts/DefaultLayout'
import { DefaultLayoutNews } from 'layouts/DefaultLayoutNews'
import { Home } from 'pages/Home'
import { Route, Routes } from 'react-router-dom'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="category/:name/*" element={<DefaultLayoutNews />} />
      </Route>
    </Routes>
  )
}
