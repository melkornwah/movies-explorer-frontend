import React from "react";
import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";

function Movies(props) {
  return(
    <section className="movies">
      <SearchForm name="name" />
      <MoviesCardList
        moviesArray={props.moviesArray}
      />
    </section>
  );
};

export default Movies;
