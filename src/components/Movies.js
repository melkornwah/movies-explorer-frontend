import React from "react";
import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";

function Movies(props) {
  React.useEffect(() => {}, [props.preloaderState, props.isNothingFound, props.isMoviesArrayEmpty]);

  return(
    <section className="movies">
      <SearchForm name="movies"
        searchMovies={props.searchMovies}
        screenType={props.screenType}
        setShortFilmsState={props.setShortFilmsState}
        initialMovies={props.initialMovies}
        setPreloaderState={props.setPreloaderState}
      />
      {
        !props.isMoviesArrayEmpty && !props.isNothingFound
          ?
        <MoviesCardList
          BASE_URL={props.BASE_URL}
          searchMovies={props.searchMovies}
          searchedMovies={props.searchedMovies}
          savedMovies={props.savedMovies}
          screenType={props.screenType}
          moreButtonState={props.moreButtonState}
          setMoreButtonState={props.setMoreButtonState}
          handleSaveMovie={props.handleSaveMovie}
          handleDeleteMovie={props.handleDeleteMovie}
          sortedMovies={props.sortedMovies}
          ifSortedMoviesState={props.ifSortedMoviesState}
          preloaderState={props.preloaderState}
        />
        :
        <></>
      }
      {
        props.isNothingFound
          ?
        <h2 className="movies__heading">Ничего не найдено</h2>
          :
        props.isMoviesArrayEmpty
          ?
        <h2 className="movies__heading">Введите ключевое слово</h2>
          :
        <></>
      }
    </section>
  );
};

export default Movies;
