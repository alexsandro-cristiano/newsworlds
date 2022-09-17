import { News } from 'pages/News';
import { Route, Routes, useParams } from 'react-router-dom';

export function DefaultLayoutNews() {
  const { name } = useParams();

  return (
    <Routes>
      <Route path="*">
        <Route index element={<News title={name} />} />
      </Route>
    </Routes>
  );
}
