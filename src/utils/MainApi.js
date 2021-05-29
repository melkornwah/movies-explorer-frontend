const BASE_URL = "https://api-diploma.melkornwah.nomoredomains.icu";

const getOptions = (data) => {
  const options = {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }
  return options;
};

export const signUp = (data) => {
  const body = {
    "name": data.name,
    "email": data.email,
    "password": data.password
  };

  return fetch(`${BASE_URL}/signup`, getOptions(body))
  .then((response) => {
    try {
      if (response.status === 200){
        return response.json();
      }
    } catch(err){
      return (err);
    }
  })
  .catch(err => console.log(err));
};

export const signIn = (data) => {
  const body = {
    "email": data.email,
    "password": data.password
  };

  return fetch(`${BASE_URL}/signin`, getOptions(body))
  .then((response => response.json()))
  .then((res) => {
    if (res.token){
      localStorage.setItem('jwt', res.token);
      return res;
    }
  })
  .catch(err => console.log(err))
};

export const authenticate = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  .then(res => {
    return res.json();
  })
  .catch(err => console.log(err))
};

export const updateUser = (data, token) => {
  const body = {
    "name": data.name,
    "email": data.email
  };

  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: body
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err))
};

export const getCurrentUser = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err))
};
