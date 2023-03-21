import React from 'react';
import Cards from '../components/home/card.jsx';
import jumanji from '../img/jumanji.png'; // poster of series Card

function Series({ name, description, image, url }) {
  return (
    <div>
      {/* giving prop for title img and link */}
      <Cards title="Diziler" img={jumanji} link="/series" />
    </div>
  );
}

export default Series;
