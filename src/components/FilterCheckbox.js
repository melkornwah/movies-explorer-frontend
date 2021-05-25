import React from "react";

function FilterCheckbox(props) {
  return(
    <div className="filter-checkbox">
      <label className="switch">
        <input type="checkbox" className="switch__checkbox" />
        <span className="switch__slider" />
      </label>
      <p className="filter-checkbox__text">
        Короткометражки
      </p>
    </div>
  );
};

export default FilterCheckbox;
