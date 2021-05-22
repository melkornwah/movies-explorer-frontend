import React from "react";
import { Link } from 'react-router-dom';

function Register(props) {
  const handleRedirection = () => {
    props.handleRedirectionAuth();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleRedirectionLogIn();
  };

  return(
    <section className="register">
      <form name="register" className="auth-form" onSubmit={handleSubmit}>
        <fieldset className="auth-form__inputs">
          <label className="auth-form__label">
            <p className="auth-form__input-name">
              Имя
            </p>
            <input className="auth-form__input" type="text" name="name" />
          </label>
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
            <input className="auth-form__input auth-form__input_error" type="password" name="password" />
            <span className="auth-form__error-message auth-form__error-message_active">
              Что-то пошло не так...
            </span>
          </label>
        </fieldset>
        <button className="auth-form__submit-button" type="submit">
          Зарегистрироваться
        </button>
        <div className="auth-form__redirect">
          <p className="auth-form__redirect-text">
            Уже зарегистрированы?
          </p>
          <Link className="auth-form__redirect-button" type="button" onClick={handleRedirection}>
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Register;
