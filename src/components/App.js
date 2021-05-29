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
import movies from "../utils/ulits";
import Register from "./Register";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import { CurrentUserContext} from "../contexts/CurrentUserContext";
import {
  signUp,
  signIn,
  authenticate,
  updateUser,
  getCurrentUser
} from "../utils/MainApi";

function App() {
  const history = useHistory();
  const BASE_URL = "http://localhost:3000";
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
  const [formError, setFormErrorState] = React.useState(false);
  const [token, setTokenValue] = React.useState("");

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
    updateUser(formData)
      .then(res => {
        if (!(res === undefined)) {
          setUser(res);
        }
      })
      .catch(err => {
        setFormErrorState(true);
        console.log(err);
      })
  };

  const handleSignUp = (data) => {
    signUp(data)
      .then(res => {
        if (!(res === undefined)) {
          handleSignIn(data);
        }
      })
      .catch(err => {
        setFormErrorState(true);
        console.log(err)
      })
  };

  const handleSignIn = (data) => {
    signIn(data)
      .then(res => {
        if (!(res === undefined)) {
          changeToken(res.token);
        }
      })
      .then(() => {
        handleLogIn();
      })
      .catch(err => {
        setFormErrorState(true);
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
          setIsLoggedInState(true);
          setUser(res);
        })
        .catch(err => console.log(err))
    }
  };

  React.useEffect(() => {
    getUser();
  }, [isLoggedIn]);

  React.useEffect(() => {
    tokenCheck();
  }, []);

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
            exact path="/movies"
            component={Movies}
            isLoggedIn={isLoggedIn}
            preloaderState={preloaderState}
            moviesArray={movies}
            currentRoute={currentRoute}
          />
          <ProtectedRoute
            exact path="/saved-movies"
            component={SavedMovies}
            isLoggedIn={isLoggedIn}
            preloaderState={preloaderState}
            moviesArray={movies}
            currentRoute={currentRoute}
          />
          <ProtectedRoute
            exact path="/profile"
            component={Profile}
            isLoggedIn={isLoggedIn}
            handleUserUpdate={handleUserUpdate}
            handleLogout={handleLogout}
            formError={formError}
          />
          <Route exact path={"/signup"}>
            <Register
              handleLogIn={handleSignUp}
              formError={formError}
            />
          </Route>
          <Route exact path={"/signin"}>
            <Login
              handleLogIn={handleSignIn}
              formError={formError}
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
          currentRoute={currentRoute}
        />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
