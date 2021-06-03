import React from "react";
import Navigation from "./Navigation";
import { Link } from 'react-router-dom';

function Header(props) {
  React.useEffect(() => {}, [props.currentRoute, props.isAuth]);

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
              <Link className="header__logo" to="/" />
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
              <Link className="header__logo" to="/" />
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
