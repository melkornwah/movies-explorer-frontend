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
      localStorage.setItem("jwt", res.token);
      return res;
    }
  })
  .catch(err => console.log(err))
};

export const authenticate = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
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
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(body)
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
      "Authorization": `Bearer ${token}`
    }
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err))
};

export const saveMovie = (movie, token) => {
  const imageURL = `https://api.nomoreparties.co${movie.image.url}`;

  const body = {
    "country": movie.country,
    "description": movie.description,
    "director": movie.director,
    "duration": movie.duration,
    "image": imageURL,
    "movieId": movie.id,
    "nameEN": movie.nameEN,
    "nameRU": movie.nameRU,
    "thumbnail": imageURL,
    "trailer": movie.trailerLink,
    "year": movie.year
  };

  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};

export const getSavedMovies = (token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};

export const deleteMovie = (movieId, token) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};
