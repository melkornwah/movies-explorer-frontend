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

function App() {
  const history = useHistory();

  const [isLoggedIn, setIsLoggedInState] = React.useState(false);
  const [currentRoute, setCurrentRoute] = React.useState("/");
  const [preloaderState, setPreloaderState] = React.useState(false);
  const [user, setUser] = React.useState({});

  const handleRedirectionAuth = () => {
    if (currentRoute === "/signup") {
      history.push("/signin");
      setCurrentRoute("/signin");
    }
    else if (currentRoute === "/signin") {
      history.push("/signup");
      setCurrentRoute("/signup");
    }
  };
  const handleRedirectionMain = () => {
    history.push("/");
    setCurrentRoute("/");
  };
  const handleRedirectionMovies = () => {
    history.push("/movies");
    setCurrentRoute("/movies");
  };
  const handleRedirectionSavedMovies = () => {
    history.push("/saved-movies");
    setCurrentRoute("/saved-movies");
  };
  const handleRedirectionProfile = () => {
    history.push("/profile");
    setCurrentRoute("/profile");
  };
  const handleRedirectionNotFound = () => {
    history.push(currentRoute);
  };
  const handleRedirectionLogout = () => {
    history.push("/");
    setCurrentRoute("/");
    setIsLoggedInState(false);
  };
  const handleRedirectionSignIn = () => {
    history.push("/signin");
    setCurrentRoute("/signin");
  };
  const handleRedirectionSignUp = () => {
    history.push("/signup");
    setCurrentRoute("/signup");
  };
  const handleLogIn = (formData) => {
    history.push("/movies");
    setCurrentRoute("/movies");
    setIsLoggedInState(true);
    setUser(formData);
  };

  const handleUserUpdate = (formData) => {
    setUser(formData);
  };

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
              handleLogIn={handleLogIn}
            />
          </Route>
          <Route exact path={"/signin"}>
            <Login
              handleRedirectionAuth={handleRedirectionAuth}
              handleLogIn={handleLogIn}
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
