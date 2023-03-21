import React, { useState } from 'react';
import DataJson from '../components/common/dataJson';
import Footer from '../components/common/footer';
import Navbar from '../components/common/navbar';
import SearchAndFilter from '../components/common/searchAndFilter';

function SeriesPage() {
  const [movies, setMovies] = useState([]);
  return (
    <>
      {/* Navbar component */}
      <Navbar />
      {/* Search and filter component with props */}
      <SearchAndFilter placeholder="Dizi / Oyuncu Ara" setMovies={setMovies} />
      {/* it renders searched movie or all movies if search is empty */}
      <DataJson movies={movies} />
      {/* Footer Component */}
      <Footer />
    </>
  );
}

export default SeriesPage;
