import React from 'react';
import Cards from '../components/home/card';
import witcher from '../img/witcher.png'; // poster of series Card

function Movies() {
  return (
    <div className=" ms-5 ">
      {/* giving prop for title img and link */}
      <Cards title="Filmler" img={witcher} link="/movies" />
    </div>
  );
}

export default Movies;
