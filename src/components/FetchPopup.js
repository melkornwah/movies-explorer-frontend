import React from "react";

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
                <h2 className="popup__heading">Профиль успешно изменён!</h2>
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
