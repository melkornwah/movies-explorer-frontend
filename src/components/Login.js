import React from "react";
import { Link } from 'react-router-dom';

function Login(props) {
  const handleRedirection = () => {
    props.handleRedirectionAuth();
  };

  return(
    <section className="login">
      <form name="login" className="auth-form">
        <fieldset className="auth-form__inputs">
          <label className="auth-form__label">
            <p className="auth-form__input-name">
              E-mail
            </p>
            <input className="auth-form__input" type="email" name="e-mail" />
          </label>
          <label className="auth-form__label">
            <p className="auth-form__input-name">
              Пароль
            </p>
            <input className="auth-form__input" type="password" name="password" />
          </label>
        </fieldset>
        <button className="auth-form__submit-button" type="submit">
          Войти
        </button>
        <div className="auth-form__redirect">
          <p className="auth-form__redirect-text">
            Ещё не зарегистрированы?
          </p>
          <Link className="auth-form__redirect-button" type="button" onClick={handleRedirection}>
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
