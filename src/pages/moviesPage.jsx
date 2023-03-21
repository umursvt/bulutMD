import React, { useState } from 'react';
import DataJson from '../components/common/dataJson.jsx';
import Navbar from '../components/common/navbar.jsx';
import Footer from '../components/common/footer.jsx';
import SearchAndFilter from '../components/common/searchAndFilter.jsx';

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  return (
    <>
      {/* Navbar component */}
      <Navbar />
      {/* Search and filter component with props */}
      <SearchAndFilter placeholder="Film / Oyuncu Ara" setMovies={setMovies} />
      {/* it renders searched movie or all movies if search is empty */}
      <DataJson movies={movies} />
      <Footer />
    </>
  );
}

export default MoviesPage;
