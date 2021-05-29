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
import { signUp, signIn, authenticate } from "../utils/MainApi";

function App() {
  const history = useHistory();

  const [isLoggedIn, setIsLoggedInState] = React.useState(false);
  const [currentRoute, setCurrentRoute] = React.useState("/");
  const [preloaderState, setPreloaderState] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [token, setTokenValue] = React.useState("");

  const handleRedirectionAuth = () => {
    if (currentRoute === "/signup") {
      setCurrentRoute("/signin");
      history.push("/signin");
    }
    else if (currentRoute === "/signin") {
      setCurrentRoute("/signup");
      history.push("/signup");
    }
  };
  const handleRedirectionMain = () => {
    history.push("/");
    setCurrentRoute("/");
  };
  const handleRedirectionMovies = () => {
    setCurrentRoute("/movies");
    history.push("/movies");
  };
  const handleRedirectionSavedMovies = () => {
    setCurrentRoute("/saved-movies");
    history.push("/saved-movies");
  };
  const handleRedirectionProfile = () => {
    setCurrentRoute("/profile");
    history.push("/profile");
  };
  const handleRedirectionNotFound = () => {
    history.push(currentRoute);
  };
  const handleRedirectionLogout = () => {
    localStorage.removeItem("jwt");
    setCurrentRoute("/");
    setIsLoggedInState(false);
    history.push("/");
  };
  const handleRedirectionSignIn = () => {
    setCurrentRoute("/signin");
    history.push("/signin");
  };
  const handleRedirectionSignUp = () => {
    setCurrentRoute("/signup");
    history.push("/signup");
  };
  const handleLogIn = (formData) => {
    setUser(formData);
    setIsLoggedInState(true);
    setCurrentRoute("/movies");
    history.push("/movies");
  };

  const handleUserUpdate = (formData) => {
    setUser(formData);
  };

  const handleSignUp = (data) => {
    signUp(data)
      .then(res => {
        if (!(res === undefined)) {
          handleLogIn(res);
        }
      })
      .catch(err => console.log(err))
  };

  const handleSignIn = (data) => {
    signIn(data)
      .then(res => {
        if (!(res === undefined)) {
          handleLogIn(data);
        }
      })
      .catch(err => console.log(err))
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
    tokenCheck();
  }, []);

  return (
    <CurrentUserContext.Provider value={user}>
      <div className="App">
        <Header
          isLoggedIn={isLoggedIn}
          currentRoute={currentRoute}
          handleRedirectionMain={handleRedirectionMain}
          handleRedirectionMovies={handleRedirectionMovies}
          handleRedirectionSavedMovies={handleRedirectionSavedMovies}
          handleRedirectionProfile={handleRedirectionProfile}
          handleRedirectionSignIn={handleRedirectionSignIn}
          handleRedirectionSignUp={handleRedirectionSignUp}
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
            handleRedirectionLogout={handleRedirectionLogout}
          />
          <Route exact path={"/signup"}>
            <Register
              handleRedirectionAuth={handleRedirectionAuth}
              handleLogIn={handleSignUp}
            />
          </Route>
          <Route exact path={"/signin"}>
            <Login
              handleRedirectionAuth={handleRedirectionAuth}
              handleLogIn={handleSignIn}
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
