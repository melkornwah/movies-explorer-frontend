import React from "react";
import { BASE_URL } from "../utils/ulits";

const FetchPopup = (props) => {
  const closePopup = () => {
    props.setIsPopupOpened(false);
  };

  return(
    <>
      {
        props.isPopupOpened
          ?
        <div className="popup popup_is-opened">
          <div className="popup__overlay" onClick={closePopup} />
          <div className="popup__container">
            {
              props.ifFetchFailed
                ?
              <>
                <p className="popup__icon">❌</p>
                <h2 className="popup__heading">Что-то пошло не так!</h2>
              </>
                :
              <>
                <p className="popup__icon">✔</p>
                  {
                    window.location.href === `${BASE_URL}/signup`
                      ?
                    <h2 className="popup__heading">Вы успешно зарегистрировались!</h2>
                      :
                    window.location.href === `${BASE_URL}/signin`
                      ?
                    <h2 className="popup__heading">Вы успешно авторизировались!</h2>
                      :
                    <h2 className="popup__heading">Профиль успешно изменён!</h2>
                  }
              </>
            }

          </div>
        </div>
          :
        <></>
      }
    </>
  );
};

export default FetchPopup;
