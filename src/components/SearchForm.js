import React from "react";
import FilterCheckbox from "./FilterCheckbox";

function SearchForm(props) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return(
    <form className="search-form" name={props.name} onSubmit={handleSubmit}>
      <div className="search-form__main-container">
        <label className="search-form__label">
          <div className="search-form__icon" />
          <input className="search-form__input" type="text" placeholder="Фильм" />
        </label>
        <button className="button button_action_submit" type="submit">
          Найти
        </button>
      </div>
      <FilterCheckbox />
    </form>
  );
};

export default SearchForm;
