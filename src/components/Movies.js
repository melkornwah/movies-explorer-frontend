import React from "react";
import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";

function Movies(props) {
  return(
    <section className="movies">
      <SearchForm name="movies" />
      <MoviesCardList
        moviesArray={props.moviesArray}
        currentRoute={props.currentRoute}
      />
    </section>
  );
};

export default Movies;
