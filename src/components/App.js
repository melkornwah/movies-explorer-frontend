import "./App.css";
import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Movies from "./Movies";
import SavedMovies from "./SavedMovies";
import Profile from "./Profile";
import ProtectedRoute from "./ProtectedRoute";
import Register from "./Register";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import FetchPopup from "./FetchPopup";
import { CurrentUserContext} from "../contexts/CurrentUserContext";
import {
  signUp,
  signIn,
  authenticate,
  updateUser,
  getCurrentUser,
  saveMovie,
  getSavedMovies,
  deleteMovie
} from "../utils/MainApi";
import { getMovies } from "../utils/MoviesApi";
import { BASE_URL } from "../utils/ulits";
import { render } from "@testing-library/react";

function App() {
  const history = useHistory();

  const isAuth =
    window.location.href === `${BASE_URL}/signup`
      ||
    window.location.href === `${BASE_URL}/signin`;

  const currentRoute =
    window.location.href === `${BASE_URL}/`
        ||
    window.location.href === `${BASE_URL}/movies`
        ||
    window.location.href === `${BASE_URL}/saved-movies`
        ||
    window.location.href === `${BASE_URL}/profile`
        ||
    window.location.href === `${BASE_URL}/signup`
        ||
    window.location.href === `${BASE_URL}/signin`;

  const [isLoggedIn, setIsLoggedInState] = React.useState(false);
  const [preloaderState, setPreloaderState] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [token, setTokenValue] = React.useState("");
  const [initialMovies, setInitialMovies] = React.useState([]);
  const [searchedMovies, setSearchedMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [sortedMovies, setSortedMovies] = React.useState([]);
  const [shortFilms, setShortFilmsState] = React.useState(false);
  const [ifSortedMovies, setIfSortedMoviesState] = React.useState(false);
  const [isPopupOpened, setIsPopupOpened] = React.useState(false);
  const [ifFetchFailed, setIfFetchFailed] = React.useState(false);
  const [isNothingFound, setIsNothingFound] = React.useState(false);
  const [isMoviesArrayEmpty, setIsMoviesArrayEmpty] = React.useState(() => {
    if (searchedMovies.length > 0 || savedMovies.length > 0 || sortedMovies.length > 0) {
      return false;
    } else {
      return true;
    }
  });
  const [screenType, setScreenType] = React.useState(() => {
    if (window.innerWidth < 1279 && window.innerWidth > 767) {
      return "Tablet";
    } else if (window.innerWidth < 767){
      return "Mobile";
    } else {
      return "Desktop";
    }
  });

  const handleMoviesArray = () => {
    if (searchedMovies.length > 0 || savedMovies.length > 0) {
      setIsMoviesArrayEmpty(false);
    } else {
      setIsMoviesArrayEmpty(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedInState(false);
    history.push("/");
  };

  const handleRedirectionNotFound = () => {
    history.goBack();
  };

  const handleLogIn = () => {
    setIsLoggedInState(true);
    history.push("/movies");
  };

  const getUser = () => {
    if (isLoggedIn) {
      getCurrentUser(token)
      .then(res => {
        setUser(res);
      })
      .catch(err => console.log(err))
    }
  };

  const handleUserUpdate = (formData) => {
    updateUser(formData, token)
      .then(res => {
        if (!(res.message)) {
          setUser(res);
          setIfFetchFailed(false);
        } else {
          setIfFetchFailed(true);
        }
        setIsPopupOpened(true);
      })
      .catch(err => {
        console.log(err);
      })
  };

  const handleSignUp = (data) => {
    signUp(data)
      .then(res => {
        if (!(res === undefined) && (res.name && res.email)) {
          handleSignIn(data);
        } else {
          setIfFetchFailed(true);
        }
        setIsPopupOpened(true);
      })
      .catch(err => {
        console.log(err);
      })
  };

  const handleSignIn = (data) => {
    signIn(data)
      .then(res => {
        if (!(res === undefined) && res.token) {
          changeToken(res.token);
          setIfFetchFailed(false);
        } else {
          setIfFetchFailed(true);
        }
        setIsPopupOpened(true);
      })
      .then(() => {
        handleLogIn();
      })
      .catch(err => {
        console.log(err)
      })
  };

  const changeToken = (value) => {
    setTokenValue(`${value}`);
  };

  const tokenCheck = () => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      authenticate(jwt)
        .then(res => {
          changeToken(jwt);
          setUser(res);
          setIsLoggedInState(true);
        })
        .catch(err => console.log(err))
    }
  };

  const getInitialMovies = () => {
    getMovies()
      .then(movies => {
        setInitialMovies(movies);
      })
      .catch(err => console.log(err))
  };

  const handleSaveMovie = (movie) => {
    saveMovie(movie, token)
      .then((res) => {
        setSavedMovies(...savedMovies, res);
      })
      .catch(err => console.log(err))
  };

  const renderSavedMovies = () => {
    getSavedMovies(token)
      .then((res) => {
        setSavedMovies(res);
      })
      .then(() => {
        handleMoviesArray();
      })
      .catch(err => console.log(err))
  };

  const handleDeleteMovie = (movie) => {
    deleteMovie(movie._id, token)
      .then(() => {
        const newMovies = savedMovies.filter((m) => {
          return !(m.movieId === movie.movieId);
        });

        setSavedMovies(newMovies);
      })
      .then()
      .catch(err => console.log(err))
  };

  const handleNothingFound = (array) => {
    if (array.length === 0) {
      setIsNothingFound(true);
    } else {
      setIsNothingFound(false);
    }
  };

  const searchMovies = (formData, array) => {
    const moviesArray = [];

    array.forEach((movie) => {
      const movieNames = [movie.nameRU, movie.nameEN];

      movieNames.forEach(value => {
        if (value) {
          if (value.toLowerCase() === formData.toLowerCase() && !(moviesArray.includes(movie))) {
            moviesArray.push(movie);
          } else {
            const arr = value.split(" ");
            arr.forEach(i => {
              if (i.toLowerCase() === formData.toLowerCase() && !(moviesArray.includes(movie))) {
                moviesArray.push(movie);
              }
            })
          }
        }
      })
    });

    if (shortFilms) {
      const shortMovies = array.filter(m => {
        return !(m.duration > 40);
      });

      setSearchedMovies(shortMovies);
      handleNothingFound(shortMovies);
    } else {
      setSearchedMovies(moviesArray);
      handleNothingFound(moviesArray);
    }

    setIsMoviesArrayEmpty(false);
  };

  const sortShortFilms = () => {
    const shortMovies = searchedMovies.filter(m => {
      return !(m.duration > 40);
    });

    setSortedMovies(shortMovies);
  };

  React.useEffect(() => {
    const handleScreenChange = () => {
      setTimeout(() => {
        if (window.innerWidth < 1279 && window.innerWidth > 767) {
          setScreenType("Tablet");
        } else if (window.innerWidth < 767){
          setScreenType("Mobile");
        } else {
          setScreenType("Desktop");
        }
      }, 1000)
    };

    window.addEventListener("resize", handleScreenChange);

    return _ => {
      window.removeEventListener("resize", handleScreenChange);
    }
  });

  React.useEffect(() => {
    getUser();
  }, [isLoggedIn]);

  React.useEffect(() => {
    tokenCheck();
  }, []);

  React.useEffect(() => {
    if (localStorage.searchedMovies) {
      const savedMovies = localStorage.getItem("searchedMovies");
      const movies = JSON.parse(savedMovies);
      setSearchedMovies(movies);

      setIsMoviesArrayEmpty(false);
      setIsNothingFound(false);
    }
  }, []);

  React.useEffect(() => {
    if (searchedMovies.length > 0) {
      localStorage.setItem("searchedMovies", JSON.stringify(searchedMovies));
    }
  }, [searchedMovies]);

  React.useEffect(() => {
    if (shortFilms) {
      sortShortFilms();
      setIfSortedMoviesState(true);
    } else {
      setIfSortedMoviesState(false);
    }
  }, [shortFilms]);

  React.useEffect(() => {
    if (!(token === "")) {
      getInitialMovies();
      renderSavedMovies();
    }
  }, [token]);

  return (
    <CurrentUserContext.Provider value={user}>
      <div className="App">
        <Header
          isLoggedIn={isLoggedIn}
          currentRoute={currentRoute}
          isAuth={isAuth}
          BASE_URL={BASE_URL}
        />
        <Switch>
          <Route exact path={"/"}>
            <Main />
          </Route>
          <ProtectedRoute
            path="/movies"
            component={Movies}
            isLoggedIn={isLoggedIn}
            preloaderState={preloaderState}
            currentRoute={currentRoute}
            initialMovies={initialMovies}
            searchMovies={searchMovies}
            searchedMovies={searchedMovies}
            savedMovies={savedMovies}
            screenType={screenType}
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovie={handleDeleteMovie}
            setShortFilmsState={setShortFilmsState}
            ifSortedMoviesState={ifSortedMovies}
            sortedMovies={sortedMovies}
            isMoviesArrayEmpty={isMoviesArrayEmpty}
            isNothingFound={isNothingFound}
            setPreloaderState={setPreloaderState}
            renderSavedMovies={renderSavedMovies}
            getInitialMovies={getInitialMovies}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            isLoggedIn={isLoggedIn}
            preloaderState={preloaderState}
            BASE_URL={BASE_URL}
            screenType={screenType}
            savedMovies={savedMovies}
            handleDeleteMovie={handleDeleteMovie}
            setShortFilmsState={setShortFilmsState}
            ifSortedMoviesState={ifSortedMovies}
            sortedMovies={sortedMovies}
            isMoviesArrayEmpty={isMoviesArrayEmpty}
            renderSavedMovies={renderSavedMovies}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            isLoggedIn={isLoggedIn}
            handleUserUpdate={handleUserUpdate}
            handleLogout={handleLogout}
          />
          <Route path={"/signup"}>
            <Register
              handleSignUp={handleSignUp}
            />
          </Route>
          <Route path={"/signin"}>
            <Login
              handleSignIn={handleSignIn}
            />
          </Route>
          <Route path="*">
            <PageNotFound
              component={PageNotFound}
              handleRedirectionNotFound={handleRedirectionNotFound}
            />
          </Route>
        </Switch>
        <Footer
          BASE_URL={BASE_URL}
        />
        <FetchPopup
          isPopupOpened={isPopupOpened}
          setIsPopupOpened={setIsPopupOpened}
          ifFetchFailed={ifFetchFailed}
        />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
