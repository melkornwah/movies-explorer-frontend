import React from "react";

function Profile(props) {
  return(
    <section className="profile">
      <h2 className="profile__heading">
        Привет, Владимир!
      </h2>
      <form className="profile__form">
        <fieldset className="profile__form-inputs">
          <label className="profile__form-label">
            <p className="profile__form-placeholder">
              Имя
            </p>
            <input className="profile__form-input" name="name" type="text" value="Владимир" />
          </label>
          <label className="profile__form-label">
            <p className="profile__form-placeholder">
              Почта
            </p>
            <input className="profile__form-input" name="email" type="email" value="v.chistyi@gmail.com" />
          </label>
        </fieldset>
        <div className="profile__form-buttons">
          <button className="button button_action_edit" type="submit">
            Редактировать
          </button>
          <button className="button button_action_logout" type="button">
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </section>
  );
};

export default Profile;
