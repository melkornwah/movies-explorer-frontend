import React from "react";
import { Link } from 'react-router-dom';
import { handleFormValueChange, checkFormValidity } from "../utils/ulits";

function Login(props) {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isInputsValid, setIsInputValid] = React.useState({
    email: true,
    password: false
  });
  const [isFormValid, setIsFormValid] = React.useState(false);

  const options = {
    values,
    errors,
    isInputsValid,
    isFormValid,
    setValues,
    setErrors,
    setIsInputValid,
    setIsFormValid
  };

  const handleChange = (evt) => {
    handleFormValueChange(evt, options);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleSignIn({
      email: values.email,
      password: values.password
    });
  };

  React.useEffect(() => {
    checkFormValidity(options);
  }, [isInputsValid]);

  return(
    <section className="login">
      <form name="login" className="auth-form" onSubmit={handleSubmit}>
        <fieldset className="auth-form__inputs">
          <label className="auth-form__label">
            <p className="auth-form__input-name">
              E-mail
            </p>
            {
              isInputsValid.email
                ?
              <>
                <input className="auth-form__input" type="email" name="email" onChange={handleChange} required />
                <span className="auth-form__error-message">{errors.email}</span>
              </>
                :
              <>
                <input className="auth-form__input auth-form__input-error" type="email" name="email" onChange={handleChange} required />
                <span className="auth-form__error-message auth-form__error-message_active">{errors.email}</span>
              </>
            }
          </label>
          <label className="auth-form__label">
            <p className="auth-form__input-name">
              Пароль
            </p>
            {
              isInputsValid.password
                ?
              <>
                <input className="auth-form__input" type="password" name="password" onChange={handleChange} required />
                <span className="auth-form__error-message">{errors.password}</span>
              </>
                :
              <>
                <input className="auth-form__input auth-form__input-error" type="password" name="password" onChange={handleChange} required />
                <span className="auth-form__error-message auth-form__error-message_active">{errors.password}</span>
              </>
            }
          </label>
        </fieldset>
        {
          isFormValid
            ?
          <button className="auth-form__submit-button auth-form__submit-button_login" type="submit">
            Войти
          </button>
            :
          <button className="auth-form__submit-button auth-form__submit-button_inactive auth-form__submit-button_login" type="button">
            Войти
          </button>
        }
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
