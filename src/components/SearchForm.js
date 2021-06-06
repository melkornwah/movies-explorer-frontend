import React from "react";
import FilterCheckbox from "./FilterCheckbox";

function SearchForm(props) {
  const [inputValue, setInputValue] = React.useState("");
  const [inputValidity, setInputValidity] = React.useState(false);

  const handleInputChange = (evt) => {
    setInputValue(evt.target.value);
    if (evt.target.value.length === 0) {
      setInputValidity(false);
    } else {
      setInputValidity(true);
    }
  };

  const handleSubmit = (evt) => {
    props.setPreloaderState(true);
    evt.preventDefault();
    props.searchMovies(inputValue, props.initialMovies);
    props.setPreloaderState(false);
  };

  React.useEffect(() => {}, [inputValidity]);

  return(
    <form className="search-form" name={props.name} onSubmit={handleSubmit}>
      <div className="search-form__main-container">
        <label className="search-form__label">
          <div className="search-form__icon" />
          <input className="search-form__input" type="text" placeholder="Фильм" onChange={handleInputChange} />
        </label>
        {
          inputValidity
            ?
          <button className="button button_action_submit" type="submit">
            Найти
          </button>
            :
          <button className="button button_action_submit button_action_submit-inactive" type="button">
            Найти
          </button>
        }
      </div>
      <FilterCheckbox
        setShortFilmsState={props.setShortFilmsState}
      />
    </form>
  );
};

export default SearchForm;
