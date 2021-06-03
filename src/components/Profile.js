import React from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { handleFormValueChange, checkFormValidity } from "../utils/ulits";

function Profile(props) {
  const user = React.useContext(CurrentUserContext);

  const [values, setValues] = React.useState({
    name: user.name,
    email: user.email
  });
  const [errors, setErrors] = React.useState({});
  const [isInputsValid, setIsInputValid] = React.useState({
    name: true,
    email: true,
    password: true
  });
  const [isFormValid, setIsFormValid] = React.useState(true);

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

  const handleLogout = () => {
    props.handleLogout();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleUserUpdate({
      name: values.name,
      email: values.email
    })
  };

  React.useEffect(() => {
    checkFormValidity(options);
  }, [isInputsValid]);

  React.useEffect(() =>{}, [user]);

  return(
    <section className="profile">
      <h2 className="profile__heading">
        Привет, {user.name}!
      </h2>
      <form className="profile__form" onSubmit={handleSubmit}>
        <fieldset className="profile__form-inputs">
          <label className="profile__form-label">
            <p className="profile__form-placeholder">
              Имя
            </p>
            <input className="profile__form-input" name="name" type="text" value={values.name} onChange={handleChange} />
          </label>
          <label className="profile__form-label">
            <p className="profile__form-placeholder">
              Почта
            </p>
            <input className="profile__form-input" name="email" type="email" value={values.email} onChange={handleChange} />
          </label>
        </fieldset>
        <div className="profile__form-buttons">
          {
            isFormValid
              ?
            <button className="button button_action_edit" type="submit">
              Редактировать
            </button>
              :
            <button className="button button_action_edit button_action_edit-inactive" type="button">
              Редактировать
            </button>
          }
          <Link className="button button_action_logout" to="/" onClick={handleLogout}>
            Выйти из аккаунта
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Profile;
