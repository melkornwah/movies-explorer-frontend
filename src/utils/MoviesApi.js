export const getMovies = () => {
  return fetch("https://api.nomoreparties.co/beatfilm-movies", {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err))
};
