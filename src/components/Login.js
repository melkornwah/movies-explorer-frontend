import React from "react";
import { Link } from 'react-router-dom';

function Login(props) {
  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");

  const handleRedirection = () => {
    props.handleRedirectionAuth();
  };

  const handleEmailChange = (evt) => {
    setEmailValue(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPasswordValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleLogIn({
      email: emailValue,
      password: passwordValue
    });
  };

  return(
    <section className="login">
      <form name="login" className="auth-form" onSubmit={handleSubmit}>
        <fieldset className="auth-form__inputs">
          <label className="auth-form__label">
            <p className="auth-form__input-name">
              E-mail
            </p>
            <input className="auth-form__input" type="email" name="e-mail" onChange={handleEmailChange} />
          </label>
          <label className="auth-form__label">
            <p className="auth-form__input-name">
              Пароль
            </p>
            <input className="auth-form__input" type="password" name="password" onChange={handlePasswordChange} />
          </label>
        </fieldset>
        <button className="auth-form__submit-button auth-form__submit-button_login" type="submit">
          Войти
        </button>
        <div className="auth-form__redirect">
          <p className="auth-form__redirect-text">
            Ещё не зарегистрированы?
          </p>
          <Link className="auth-form__redirect-button" type="button" to="/signup">
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
