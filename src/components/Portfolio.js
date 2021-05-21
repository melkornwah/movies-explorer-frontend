import React from "react";
import { Link } from 'react-router-dom';

function Portfolio(props) {
  return(
    <div className="portfolio">
      <h3 className="portfolio__heading">
        Портфолио
      </h3>
      <ul className="portfolio__link-list">
        <li className="portfolio__link-item">
          <Link className="portfolio__link-ref" href="https://github.com/melkornwah/how-to-learn">
            Статичный сайт
            <div className="portfolio__link-icon" />
          </Link>
        </li>
        <li className="portfolio__link-item">
          <Link className="portfolio__link-ref" href="https://github.com/melkornwah/russian-travel">
            Адаптивный сайт
            <div className="portfolio__link-icon" />
          </Link>
        </li>
        <li className="portfolio__link-item">
          <Link className="portfolio__link-ref" href="https://github.com/melkornwah/react-mesto-api-full">
            Одностраничное приложение
            <div className="portfolio__link-icon" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
