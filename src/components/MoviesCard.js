import React from "react";
import { BASE_URL, MOVIE_URL } from "../utils/ulits";

function MoviesCard(props) {
  const movie = props.item;
  const ifSavedMoviesRoute = window.location.href === `${BASE_URL}/saved-movies`;
  const imageURL =
    ifSavedMoviesRoute
      ?
    movie.image
      :
    movie.image
      ?
    MOVIE_URL + movie.image.url
      :
    null;
  const trailer =
    ifSavedMoviesRoute
      ?
    movie.trailer
      :
    movie.trailerLink;

  const [isLiked, setIsLikedStatus] = React.useState(false);

  const handleDeleteClick = () => {
    props.handleDeleteMovie(movie);
    props.handleLessenCounter();
  };

  const handleLikeClick = () => {
    if (isLiked === false) {
      props.handleSaveMovie(movie)
      setIsLikedStatus(true);
    } else {
      if (props.savedMovies.nameRU) {
        if (props.savedMovies.nameRU === movie.nameRU) {
          props.handleDeleteMovie(props.savedMovies);
          props.handleLessenCounter();
          setIsLikedStatus(false);
        }
      } else {
        props.savedMovies.forEach(m => {
          if (m.nameRU === movie.nameRU) {
            props.handleDeleteMovie(m);
            props.handleLessenCounter();
            setIsLikedStatus(false);
          }
        });
      }
    }
  };

  const getTimeFromMins = (mins) => {
    const hours = Math.trunc(mins/60);
    const minutes = mins % 60;
    if (hours > 0) {
      return hours + "ч " + minutes + "м";
    } else {
      return minutes + "м";
    }
  };

  React.useEffect(() => {}, [props.movieCounter]);

  React.useEffect(() => {
    if (window.location.href === `${BASE_URL}/movies`) {
      if (props.savedMovies.nameRU) {
        if (props.savedMovies.nameRU === movie.nameRU) {
          setIsLikedStatus(true);
        } else {
          setIsLikedStatus(false);
        }
      } else if (props.savedMovies.length > 0) {
        props.savedMovies.forEach(m => {
          if (m.nameRU === movie.nameRU) {
            setIsLikedStatus(true);
          } else {
            setIsLikedStatus(false);
          }
        });
      } else {
        setIsLikedStatus(false);
      }
    } else {
      setIsLikedStatus(false);
    }
  }, [])

  return(
    <>
      {
        props.movieCounter > props.num + 1
          ?
        <li className="movies-card">
          <div className="movies-card__head">
            <div className="movies-card__info">
              <h2 className="movies-card__heading">
                {movie.nameRU}
              </h2>
              <p className="movies-card__length">
                {getTimeFromMins(props.item.duration)}
              </p>
            </div>
            {
              window.location.href === `${BASE_URL}/saved-movies`
                ?
              <button className="movies-card__save-button movies-card__save-button_saved" onClick={handleDeleteClick} />
                :
              isLiked
                ?
              <button className="movies-card__save-button movies-card__save-button_active" onClick={handleLikeClick} />
                :
              <button className="movies-card__save-button" onClick={handleLikeClick} />
            }
          </div>
          <a href={trailer} rel="noreferrer" target="_blank">
            <img className="movies-card__photo" src={imageURL} alt={movie.nameRU} />
          </a>
        </li>
          :
        <></>
      }
    </>
  );
};

export default MoviesCard;
