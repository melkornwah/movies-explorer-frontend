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
                  <h2 className="header__heading">
                    {props.currentRouteHeading}
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
