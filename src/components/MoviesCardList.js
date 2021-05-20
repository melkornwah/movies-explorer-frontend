import React from "react";
import Preloader from "./Preloader";
import MoviesCard from "./MoviesCard";

function MoviesCardList(props) {
  return(
    <>
      <ul className="movies-card-list">
        {
          Array.isArray(props.moviesArray)
            ?
          props.moviesArray.map((movie, i) => {
            return <MoviesCard
              item={movie}
              key={i}
            />
          })
          :
          console.log("Фильмов пока что нет")
        }
      </ul>
      <button className="button button_action_more">
        Ещё
      </button>
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
