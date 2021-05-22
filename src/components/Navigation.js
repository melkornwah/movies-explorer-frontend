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
  const handleRedirectionSignIn = () => {
    props.handleRedirectionSignIn();
  };
  const handleRedirectionSignUp = () => {
    props.handleRedirectionSignUp();
  };

  return(
    <div className="navigation">
      {
        props.isLoggedIn
          ?
        <>
          <Link className="button button_action_movies" to="/movies" onClick={handleRedirectionMovies}>
            Фильмы
          </Link>
          <Link className="button button_action_saved-movies" to="/saved-movies" onClick={handleRedirectionSavedMovies}>
            Сохранённые фильмы
          </Link>
          <Link className="button button_action_profile" to="/profile" onClick={handleRedirectionProfile}>
            Аккаунт
            <div className="navigation__profile-button" />
          </Link>
        </>
          :
        <>
          <Link className="button button_action_register" to="/signup" onClick={handleRedirectionSignUp}>
            Регистрация
          </Link>
          <Link className="button button_action_login" to="/signin" onClick={handleRedirectionSignIn}>
            Войти
          </Link>
        </>
      }
    </div>
  );
};

export default Navigation;
