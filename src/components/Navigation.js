import React from "react";
import { Link } from 'react-router-dom';

function Navigation(props) {
  const handleRedirectionMovies = () => {
    props.handleRedirectionMovies();
  };
  const handleRedirectionSavedMovies = () => {
    props.handleRedirectionSavedMovies();
  };
  const handleRedirectionProfile = () => {
    props.handleRedirectionProfile();
  };

  return(
    <div className="navigation">
      {
        props.isLoggedIn
          ?
        <>
          <Link className="button button_action_movies" onClick={handleRedirectionMovies}>
            Фильмы
          </Link>
          <Link className="button button_action_saved-movies" onClick={handleRedirectionSavedMovies}>
            Сохранённые фильмы
          </Link>
          <Link className="button button_action_profile" onClick={handleRedirectionProfile}>
            Аккаунт
            <div className="navigation__profile-button" />
          </Link>
        </>
          :
        <>
          <Link className="button button_action_register">
            Регистрация
          </Link>
          <Link className="button button_action_login">
            Войти
          </Link>
        </>
      }
    </div>
  );
};

export default Navigation;
