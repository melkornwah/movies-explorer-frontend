import React from "react";
import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";

function SavedMovies(props) {
  React.useEffect(() => {
    props.renderSavedMovies()
  }, []);

  return(
    <section className="saved-movies">
      <SearchForm name="saved-movies"
        screenType={props.screenType}
        setShortFilmsState={props.setShortFilmsState}
      />
      <MoviesCardList
        savedMovies={props.savedMovies}
        handleDeleteMovie={props.handleDeleteMovie}
        sortedMovies={props.sortedMovies}
      />
    </section>
  );
};

export default SavedMovies;
