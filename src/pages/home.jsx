import React from 'react';
import Movies from '../components/movies';
import Series from '../components/series';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/navbar';
import NavbarSecond from '../components/common/navbarSecond';
import Footer from '../components/common/footer';

function Home() {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />
      {/* Second part of Navbar Component */}
      <NavbarSecond />

      {/* home page components for series and movies. I  gave main div flex for having in a one row Cards  */}
      {/* To fit the footer at the bottom of the page gave it a style minHeight */}
      <div className=" ms-lg-5 d-flex " style={{ minHeight: '65vh' }}>
        <Link to="/series">
          <Series />
        </Link>
        <Link to="/movies">
          <Movies />
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Home;
