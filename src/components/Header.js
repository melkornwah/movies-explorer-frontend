import React from "react";

function Header(props) {
  return(
    <header className="header">
      <button className="header__logo" />
      <div className="header__menu">
        <button className="button button_action_register">
          Регистрация
        </button>
        <button className="button button_action_login">
          Войти
        </button>
      </div>
    </header>
  );
};

export default Header;
