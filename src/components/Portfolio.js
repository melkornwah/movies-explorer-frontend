import React from "react";

function Portfolio(props) {
  return(
    <div className="portfolio">
      <h3 className="portfolio__heading">
        Портфолио
      </h3>
      <ul className="portfolio__link-list">
        <li className="portfolio__link-item">
          <a className="portfolio__link-ref" href="https://github.com/melkornwah/how-to-learn">
            Статичный сайт
            <div className="portfolio__link-icon" />
          </a>
        </li>
        <li className="portfolio__link-item">
          <a className="portfolio__link-ref" href="https://github.com/melkornwah/russian-travel">
            Адаптивный сайт
            <div className="portfolio__link-icon" />
          </a>
        </li>
        <li className="portfolio__link-item">
          <a className="portfolio__link-ref" href="https://github.com/melkornwah/react-mesto-api-full">
            Одностраничное приложение
            <div className="portfolio__link-icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
