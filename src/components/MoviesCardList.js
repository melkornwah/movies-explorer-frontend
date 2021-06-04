import React from "react";
import Preloader from "./Preloader";
import MoviesCard from "./MoviesCard";
import { BASE_URL } from "../utils/ulits";

function MoviesCardList(props) {
  const handleMoviesCounterChange = () => {
    if (props.screenType === "Desktop") {
      setMovieCounter(13);
    } else if (props.screenType === "Tablet") {
      setMovieCounter(9);
    } else {
      setMovieCounter(6);
    }
  };

  const [moreButtonState, setMoreButtonState] = React.useState(() => {
    if (window.location.href === `${BASE_URL}/movies`) {
      if ((props.sortedMovies.length || props.searchedMovies.length) < 6) {
        return false;
      } else {
        return true;
      }
    } else {
      if (props.savedMovies.length < 6) {
        return false;
      } else {
        return true;
      }
    }
  });

  const [movieCounter, setMovieCounter] = React.useState(() => {
    if (props.screenType === "Desktop") {
      return 13;
    } else if (props.screenType === "Tablet") {
      return 9;
    } else {
      return 6;
    }
  });

  const handleMoreClick = () => {
    if (props.screenType === "Desktop") {
      setMovieCounter(movieCounter + 3);
    } else {
      setMovieCounter(movieCounter + 2);
    }
  };

  const handleLessenCounter = () => {
    setMovieCounter(movieCounter - 1);
  };

  const movieButtonRenderer = () => {
    if (window.location.href === `${BASE_URL}/movies`) {
      if (movieCounter > props.searchedMovies.length && props.sortedMovies.length === 0) {
        setMoreButtonState(false);
      } else if (movieCounter > props.sortedMovies.length && !(props.sortedMovies.length === 0)) {
        setMoreButtonState(false);
      } else {
        setMoreButtonState(true);
      }
    }
  };

  React.useEffect(() => {
    handleMoviesCounterChange();
  }, [props.screenType]);

  React.useEffect(() => {
    if (window.location.href === `${BASE_URL}/movies`) {
      if ((props.sortedMovies.length || props.searchedMovies.length) > 5) {
        movieButtonRenderer();
      }
    } else {
      if (props.savedMovies.length > 5) {
        movieButtonRenderer();
      }
    }
  }, [movieCounter]);

  React.useEffect(() => {}, [props.ifSortedMoviesState]);

  return(
    <>
      <ul className="movies-card-list">
        {
          props.ifSortedMoviesState
            ?
          Array.isArray(props.sortedMovies)
            ?
          props.sortedMovies.map((movie, i) => {
            const num = i;

            return <MoviesCard
              item={movie}
              key={i}
              movieCounter={movieCounter}
              num={num}
              savedMovies={props.savedMovies}
              handleSaveMovie={props.handleSaveMovie}
              handleDeleteMovie={props.handleDeleteMovie}
              handleLessenCounter={handleLessenCounter}
              ifSortedMovies={props.ifSortedMovies}
            />
          })
            :
          <></>
            :
          window.location.href === `${BASE_URL}/saved-movies`
            ?
          Array.isArray(props.savedMovies)
            ?
          props.savedMovies.map((movie, i) => {
            const num = i;

            return <MoviesCard
              item={movie}
              key={i}
              movieCounter={movieCounter}
              num={num}
              handleDeleteMovie={props.handleDeleteMovie}
              handleLessenCounter={handleLessenCounter}
              ifSortedMovies={props.ifSortedMovies}
            />
          })
            :
            <></>
            :
          Array.isArray(props.searchedMovies)
            ?
          props.searchedMovies.map((movie, i) => {
            const num = i;

            return <MoviesCard
              item={movie}
              key={i}
              movieCounter={movieCounter}
              num={num}
              handleSaveMovie={props.handleSaveMovie}
              handleDeleteMovie={props.handleDeleteMovie}
              savedMovies={props.savedMovies}
              handleLessenCounter={handleLessenCounter}
              ifSortedMovies={props.ifSortedMovies}
            />
          })
          :
          <></>
        }
      </ul>
      {
        window.location.href === `${BASE_URL}/saved-movies`
          ?
        <></>
          :
        moreButtonState
          ?
        <button className="button button_action_more" onClick={handleMoreClick}>
          Ещё
        </button>
          :
        <></>
      }
      {
        props.preloaderState
          ?
        <Preloader />
          :
        <>
        </>
      }
    </>
  );
};

export default MoviesCardList;
