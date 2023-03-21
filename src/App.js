import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import MoviesPage from './pages/moviesPage';
import SeriesPage from './pages/seriesPage';
import 'bootstrap/dist/css/bootstrap.min.css'; // import Bootstrap Css

function App() {
  return (
    <>
      {/* it renders URL of 'series' and 'movies' respectively Home element which has  a path as:  '/'   */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="series" element={<SeriesPage />} />
          <Route path="movies" element={<MoviesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
