import React from "react";
import NavTab from "./NavTab";

function Promo(props) {
  return(
    <section className="promo">
      <h1 className="promo__heading">
        Учебный проект студента факультета <nobr>Веб-разработки</nobr>.
      </h1>
      <NavTab />
    </section>
  );
};

export default Promo;
