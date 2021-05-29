import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { Link } from "react-router-dom";

function Profile(props) {
  const user = React.useContext(CurrentUserContext);

  const [nameValue, setNameValue] = React.useState(`${user.name}`);
  const [emailValue, setEmailValue] = React.useState(`${user.email}`);

  const handleNameChange = (evt) => {
    setNameValue(evt.target.value);
  };

  const handleEmailChange = (evt) => {
    setEmailValue(evt.target.value);
  };

  const handleLogout = () => {
    props.handleLogout();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleUserUpdate({
      name: nameValue,
      email: emailValue
    })
  };

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
            <input className="profile__form-input" name="name" type="text" value={nameValue} onChange={handleNameChange} />
          </label>
          <label className="profile__form-label">
            <p className="profile__form-placeholder">
              Почта
            </p>
            <input className="profile__form-input" name="email" type="email" value={emailValue} onChange={handleEmailChange} />
          </label>
        </fieldset>
        <div className="profile__form-buttons">
          <button className="button button_action_edit" type="submit">
            Редактировать
          </button>
          <Link className="button button_action_logout" to="/" onClick={handleLogout}>
            Выйти из аккаунта
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Profile;
