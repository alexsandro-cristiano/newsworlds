import { Route, Routes, useParams } from 'react-router-dom';
import { News } from 'pages/News';

export function DefaultLayoutNews() {
  const { name } = useParams();

  return (
    <Routes>
      <Route path="*">
        <Route index element={<News category={name} />} />
      </Route>
    </Routes>
  );
}
