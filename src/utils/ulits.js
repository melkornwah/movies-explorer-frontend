export const BASE_URL = "http://localhost:3000";

export const MOVIE_URL = "https://api.nomoreparties.co";

export const nameRegex = /^[a-zа-яё -]+$/gmui;
export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

export  const handleFormValueChange = (evt, options) => {
  const name = evt.target.name;
  const value = evt.target.value;

  options.setValues({...options.values, [name]: value});

  if (name === "name") {
    if (value.length === 0) {
      options.setErrors({...options.errors, [name]: "Поле не может быть пустым..."});
      options.setIsInputValid({...options.isInputsValid, [name]: false});
    } else if (!value.match(nameRegex) || value.length < 2) {
      options.setErrors({...options.errors, [name]: "Введены некорректные данные..."});
      options.setIsInputValid({...options.isInputsValid, [name]: false});
    } else {
      options.setIsInputValid({...options.isInputsValid, [name]: true});
    }
  } else if (name === "email") {
    if (value.length === 0) {
      options.setErrors({...options.errors, [name]: "Поле не может быть пустым..."});
      options.setIsInputValid({...options.isInputsValid, [name]: false});
    } else if (!value.match(emailRegex)) {
      options.setErrors({...options.errors, [name]: "Введены некорректные данные..."});
      options.setIsInputValid({...options.isInputsValid, [name]: false});
    } else {
      options.setIsInputValid({...options.isInputsValid, [name]: true});
    }
  } else if (name === "password") {
    if (value.length === 0) {
      options.setErrors({...options.errors, [name]: "Поле не может быть пустым..."});
      options.setIsInputValid({...options.isInputsValid, [name]: false});
    } else if (value.length < 8) {
      options.setErrors({...options.errors, [name]: "Пароль должен состоять из минимум 8 символов..."});
      options.setIsInputValid({...options.isInputsValid, [name]: false});
    } else {
      options.setIsInputValid({...options.isInputsValid, [name]: true});
    }
  }
};

export const checkFormValidity = (options) => {
  if (options.isInputsValid.name && options.isInputsValid.email && options.isInputsValid.password) {
    options.setIsFormValid(true);
  } else {
    options.setIsFormValid(false);
  }
};
