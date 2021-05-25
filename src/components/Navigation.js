import React from "react";
import { Link } from 'react-router-dom';

function Navigation(props) {
  const [isNavOpened, setIsNavOpenedState] = React.useState(false);

  const handleRedirectionMovies = () => {
    props.handleRedirectionMovies();
    handleCloseMenuClick();
  };

  const handleRedirectionSavedMovies = () => {
    props.handleRedirectionSavedMovies();
    handleCloseMenuClick();
  };

  const handleRedirectionProfile = () => {
    props.handleRedirectionProfile();
    handleCloseMenuClick();
  };

  const handleRedirectionSignIn = () => {
    props.handleRedirectionSignIn();
  };

  const handleRedirectionSignUp = () => {
    props.handleRedirectionSignUp();
  };

  const handleRedirectionMain = () => {
    props.handleRedirectionMain();
    handleCloseMenuClick();
  };

  const handleOpenMenuClick = () => {
    setIsNavOpenedState(true);
  };

  const handleCloseMenuClick = () => {
    setIsNavOpenedState(false);
  };

  React.useEffect(() => {}, [isNavOpened]);

  return(
    <nav className="navigation">
      {
        props.isLoggedIn
          ?
        <>
          {
            isNavOpened
              ?
            <>
              <div className="navigation__overlay navigation__overlay_is-active" onClick={handleCloseMenuClick} />
              <div className="navigation__menu navigation__menu_is-opened">
                <div className="navigation__main-links">
                  <button className="navigation__close-button" type="button" onClick={handleCloseMenuClick} />
                  <Link className="button button_action_to-main" to="/" onClick={handleRedirectionMain}>
                    Главная
                  </Link>
                  <Link className="button button_action_to-movies" to="/movies" onClick={handleRedirectionMovies}>
                    Фильмы
                  </Link>
                  <Link className="button button_action_to-saved-movies" to="/saved-movies" onClick={handleRedirectionSavedMovies}>
                    Сохранённые фильмы
                  </Link>
                </div>
                <Link className="button button_action_to-profile" to="/profile" onClick={handleRedirectionProfile}>
                  Аккаунт
                  <div className="navigation__profile-button" />
                </Link>
              </div>
              <button className="navigation__open-button" type="button" onClick={handleOpenMenuClick} />
            </>
              :
            <>
              <div className="navigation__overlay" />
              <div className="navigation__menu">
                <div className="navigation__main-links">
                  <button className="navigation__close-button" type="button" onClick={handleCloseMenuClick} />
                  <Link className="button button_action_to-main" to="/" onClick={handleRedirectionMain}>
                    Главная
                  </Link>
                  <Link className="button button_action_to-movies" to="/movies" onClick={handleRedirectionMovies}>
                    Фильмы
                  </Link>
                  <Link className="button button_action_to-saved-movies" to="/saved-movies" onClick={handleRedirectionSavedMovies}>
                    Сохранённые фильмы
                  </Link>
                </div>
                <Link className="button button_action_to-profile" to="/profile" onClick={handleRedirectionProfile}>
                  Аккаунт
                  <div className="navigation__profile-button" />
                </Link>
              </div>
              <button className="navigation__open-button" type="button" onClick={handleOpenMenuClick} />
            </>
          }
        </>
          :
        <>
          <Link className="button button_action_to-register" to="/signup" onClick={handleRedirectionSignUp}>
            Регистрация
          </Link>
          <Link className="button button_action_to-login" to="/signin" onClick={handleRedirectionSignIn}>
            Войти
          </Link>
        </>
      }
    </nav>
  );
};

export default Navigation;
