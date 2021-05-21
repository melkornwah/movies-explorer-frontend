import React from "react";
import { Link } from 'react-router-dom';

function PageNotFound(props) {
  return(
    <section className="not-found">
      <span className="not-found__heading">
        404
      </span>
      <p className="not-found__text">
        Страница не найдена
      </p>
      <Link className="not-found__button">
        Назад
      </Link>
    </section>
  );
};

export default PageNotFound;
