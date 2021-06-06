import React from "react";

function FilterCheckbox(props) {
  const [checkbox, setCheckbox] = React.useState(false);

  const handleCheckboxClick = () => {
    if (checkbox) {
      setCheckbox(false);
      props.setShortFilmsState(false);
    } else {
      setCheckbox(true);
      props.setShortFilmsState(true);
    }
  };

  return(
    <div className="filter-checkbox">
      <label className="switch">
        <input type="checkbox" className="switch__checkbox" onClick={handleCheckboxClick} />
        <span className="switch__slider" />
      </label>
      <p className="filter-checkbox__text">
        Короткометражки
      </p>
    </div>
  );
};

export default FilterCheckbox;
