import React from "react";
import Navigation from "./Navigation";

function Header(props) {
  const isAuth =
  props.currentRoute === "/signup"
    ||
  props.currentRoute === "/signin";

  const currentRoute =
    props.currentRoute === "/movies"
      ||
    props.currentRoute === "/saved-movies"
      ||
    props.currentRoute === "/signup"
      ||
    props.currentRoute === "/signin"
      ||
    props.currentRoute === "/profile"
      ||
    props.currentRoute === "/";

  const handleRedirectionMain = () => {
    props.handleRedirectionMain();
  };

  return(
    <>
      {
        currentRoute
          ?
        <>
          {
            isAuth
              ?
            <header className="header header_route_auth">
              <button className="header__logo" onClick={handleRedirectionMain} />
                {
                  props.currentRoute === "/signup"
                    ?
                  <h2 className="header__heading">
                    Добро пожаловать!
                  </h2>
                    :
                  <h2 className="header__heading">
                    Рады видеть!
                  </h2>
                }
            </header>
              :
            <header className="header">
              <button className="header__logo" onClick={handleRedirectionMain} />
              <Navigation
                isLoggedIn={props.isLoggedIn}
                handleRedirectionMovies={props.handleRedirectionMovies}
                handleRedirectionSavedMovies={props.handleRedirectionSavedMovies}
                handleRedirectionProfile={props.handleRedirectionProfile}
                handleRedirectionSignIn={props.handleRedirectionSignIn}
                handleRedirectionSignUp={props.handleRedirectionSignUp}
                handleRedirectionMain={handleRedirectionMain}
              />
            </header>
          }
        </>
          :
        <>
        </>
      }
    </>
  );
};

export default Header;
