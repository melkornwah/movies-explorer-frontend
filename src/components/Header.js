import React from "react";
import Navigation from "./Navigation";

function Header(props) {
  const handleRedirectionMain = () => {
    props.handleRedirectionMain();
  };

  return(
    <>
      {
        props.currentRoute
          ?
        <>
          {
            props.isAuth
              ?
            <header className="header header_route_auth">
              <button className="header__logo" onClick={handleRedirectionMain} />
                {
                  window.location.href === `${props.BASE_URL}/signup`
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
