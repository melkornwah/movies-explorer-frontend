import React from "react";

function Footer(props) {
  const currentRoute =
    window.location.href === `${props.BASE_URL}/`
      ||
    window.location.href === `${props.BASE_URL}/movies`
      ||
    window.location.href === `${props.BASE_URL}/saved-movies`

  React.useEffect(() => {}, [currentRoute]);

  return(
    <>
      {
        currentRoute
          ?
        <footer className="footer">
          <p className="footer__text">
            Учебный проект Яндекс.Практикум х BeatFilm.
          </p>
          <div className="footer__main-container">
            <p className="footer__copyright">
              © 2021
            </p>
            <ul className="footer__links">
              <li className="footer__link-item">
                <a className="footer__link-ref" href="https://praktikum.yandex.ru">
                  Яндекс.Практикум
                </a>
              </li>
              <li className="footer__link-item">
                <a className="footer__link-ref" href="https://github.com/melkornwah">
                  Github
                </a>
              </li>
              <li className="footer__link-item">
                <a className="footer__link-ref" href="https://vk.com/melkornwah">
                  VK
                </a>
              </li>
            </ul>
          </div>
        </footer>
          :
        <></>
      }
    </>
  );
};

export default Footer;
