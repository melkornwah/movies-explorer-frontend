import React from "react";

function NavTab(props) {
  return(
    <nav className="nav-tab">
      <a className="nav-tab__link" href="http://localhost:3000/#about-project">
        О проекте
      </a>
      <a className="nav-tab__link" href="http://localhost:3000/#techs">
        Технологии
      </a>
      <a className="nav-tab__link" href="http://localhost:3000/#about-me">
        Студент
      </a>
    </nav>
  );
};

export default NavTab;
