import React from "react";
import { Link } from 'react-router-dom';

function Register(props) {
  const [nameValue, setNameValue] = React.useState("");
  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");

  const handleRedirection = () => {
    props.handleRedirectionAuth();
  };

  const handleNameChange = (evt) => {
    setNameValue(evt.target.value);
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
      name: nameValue,
      email: emailValue,
      password: passwordValue
    });
  };

  return(
    <section className="register">
      <form name="register" className="auth-form" onSubmit={handleSubmit}>
        <fieldset className="auth-form__inputs">
          <label className="auth-form__label">
            <p className="auth-form__input-name">
              Имя
            </p>
            <input className="auth-form__input" type="text" name="name" onChange={handleNameChange} />
          </label>
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
            <input className="auth-form__input auth-form__input_error" type="password" name="password" onChange={handlePasswordChange} />
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
          <Link className="auth-form__redirect-button" type="button" to="/signin">
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Register;
