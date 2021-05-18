import React from "react";

function NavTab(props) {
  return(
    <nav className="nav-tab">
      <a className="nav-tab__link" href="#project">
        О проекте
      </a>
      <a className="nav-tab__link" href="#tech">
        Технологии
      </a>
      <a className="nav-tab__link" href="#student">
        Студент
      </a>
    </nav>
  );
};

export default NavTab;
