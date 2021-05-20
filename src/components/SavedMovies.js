import React from "react";
import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";

function SavedMovies(props) {
  return(
    <section className="saved-movies">
      <SearchForm name="saved-movies" />
      <MoviesCardList
        moviesArray={props.moviesArray}
        currentRoute={props.currentRoute}
      />
    </section>
  );
};

export default SavedMovies;
