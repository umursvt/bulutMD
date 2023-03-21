import React, { useState } from 'react';
import DropButton from './drop';
import dataJson from '../../data/data.json'; // json file
import DataJson from '../common/dataJson.jsx';

function SearchAndFilter({ placeholder }) {
  const [text, setText] = useState('');
  // 'dataJson.entries' must be inside of useState otherwise movies dont show when the page uploaded for the first time

  //hook for searching movies
  const [filteredMovie, setFilteredMovie] = useState(dataJson.entries);

  // hook for sorting movies
  const [sortBy, setSortBy] = useState(dataJson.entries);

  // handle searching input function
  const handleText = (event) => {
    const inputText = event.target.value;
    setText(inputText);

    if (inputText === '') {
      // this part should work fine but somehow after cleaning search box
      // this code shows only 18 movies on the page
      setFilteredMovie(dataJson.entries.slice(0, 18));
    } else {
      //if user search any input
      const filteredMovie = dataJson.entries.filter((movie) =>
        movie.title.toLowerCase().includes(inputText.toLowerCase())
      );
      setFilteredMovie(filteredMovie);
    }
  };

  const handleOrderBy = (parameter) => {
    //to sort movies coming from filtered one
    let sortedMovies = [...filteredMovie];
    switch (parameter) {
      // Order by Title
      case 'title':
        sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
        break;
      // Order by description
      case 'description':
        sortedMovies.sort((a, b) => a.description.localeCompare(b.description));
        break;
      // Order by Year
      case 'releaseYear':
        sortedMovies.sort(
          (a, b) => parseInt(a.releaseYear) - parseInt(b.releaseYear)
        );
        break;
      default:
        break;
    }
    setSortBy(parameter);
    setFilteredMovie(sortedMovies);
  };

  return (
    <div className=" ms-lg-5 mt-3 ">
      <div className=" d-flex justify-content-between">
        <div className="search">
          <input
            value={text}
            onChange={handleText}
            className=" form-control-lg"
            type="search"
            name="search"
            id="search"
            //sent a prop for different components
            placeholder={placeholder}
          />
        </div>
        <div className="drop me-5 pe-4  ">
          {/* sending handleOrderBy func as a prop */}
          <DropButton handleOrderBy={handleOrderBy} />
        </div>
        {/* sending movies as a prop to DataJson */}
      </div>
      <DataJson movies={filteredMovie} sortBy={sortBy} />
    </div>
  );
}

export default SearchAndFilter;
