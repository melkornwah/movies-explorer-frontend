import React from "react";
import { Link } from "react-router-dom";
import { handleFormValueChange, checkFormValidity } from "../utils/ulits";

function Register(props) {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isInputsValid, setIsInputValid] = React.useState({
    name: true,
    email: true,
    password: false
  });
  const [isFormValid, setIsFormValid] = React.useState(false);

  const options = {
    values,
    errors,
    isInputsValid,
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
    props.handleSignUp({
      name: values.name,
      email: values.email,
      password: values.password
    });
  };

  const handleRedirect = () => {
    props.setIfFetchFailed(false);
  };

  React.useEffect(() => {
    checkFormValidity(options);
  }, [isInputsValid]);

  React.useEffect(() => {
    props.ifFetchFailed
      ?
    setIsFormValid(false)
      :
    setIsFormValid(true);
  }, [props.ifFetchFailed]);

  React.useEffect(() => {
    setIsFormValid(false);
  }, []);

  React.useEffect(() => {}, [isFormValid, props.isInputBlocked]);

  return(
    <section className="register">
      <form name="register" className="auth-form" onSubmit={handleSubmit}>
        {
          props.isInputBlocked
            ?
          <>
            <fieldset className="auth-form__inputs">
              <label className="auth-form__label">
                <p className="auth-form__input-name">
                  Имя
                </p>
                <input className="auth-form__input" type="text" name="name" blocked />
              </label>
              <label className="auth-form__label">
                <p className="auth-form__input-name">
                  E-mail
                </p>
                <input className="auth-form__input" type="email" name="email" blocked />
              </label>
              <label className="auth-form__label">
                <p className="auth-form__input-name">
                  Пароль
                </p>
                <input className="auth-form__input" type="password" name="password" blocked />
              </label>
            </fieldset>
            <button className="auth-form__submit-button auth-form__submit-button_inactive" type="button" blocked>
              Зарегистрироваться
            </button>
          </>
            :
          <>
            <fieldset className="auth-form__inputs">
              <label className="auth-form__label">
                <p className="auth-form__input-name">
                  Имя
                </p>
                {
                  isInputsValid.name
                    ?
                  <>
                    <input className="auth-form__input" type="text" name="name" onChange={handleChange} required />
                    <span className="auth-form__error-message">{errors.password}</span>
                  </>
                    :
                  <>
                    <input className="auth-form__input auth-form__input-error" type="text" name="name" onChange={handleChange} required />
                    <span className="auth-form__error-message auth-form__error-message_active">{errors.name}</span>
                  </>
                }
              </label>
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
                  props.ifFetchFailed
                    ?
                  <>
                    <input className="auth-form__input auth-form__input-error" type="password" name="password" onChange={handleChange} required />
                    <span className="auth-form__error-message auth-form__error-message_active">Что-то пошло не так...</span>
                  </>
                    :
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
              <button className="auth-form__submit-button" type="submit">
                Зарегистрироваться
              </button>
                :
              <button className="auth-form__submit-button auth-form__submit-button_inactive" type="button">
                Зарегистрироваться
              </button>
            }
          </>
        }
        <div className="auth-form__redirect">
          <p className="auth-form__redirect-text">
            Уже зарегистрированы?
          </p>
          <Link className="auth-form__redirect-button" onClick={handleRedirect} to="/signin">
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Register;
