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

function App() {
  const history = useHistory();

  const [isLoggedIn, setIsLoggedInState] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("/");
  const [currentRouteHeading, setCurrentRouteHeading] = React.useState("");
  const [preloaderState, setPreloaderState] = React.useState(false);

  const handleRedirectionAuth = () => {
    if (currentRoute === "/signup") {
      history.push("/signin");
      setCurrentRoute("/signin");
      setCurrentRouteHeading("Рады видеть!");
    }
    else if (currentRoute === "/signin") {
      history.push("/signup");
      setCurrentRoute("/signup");
      setCurrentRouteHeading("Добро пожаловать!");
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

  return (
    <div className="App">
      <Header
        isLoggedIn={isLoggedIn}
        currentRoute={currentRoute}
        currentRouteHeading={currentRouteHeading}
        handleRedirectionMain={handleRedirectionMain}
        handleRedirectionMovies={handleRedirectionMovies}
        handleRedirectionSavedMovies={handleRedirectionSavedMovies}
        handleRedirectionProfile={handleRedirectionProfile}
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
        />
        <Route exact path={"/signup"}>
          <Register
            handleRedirectionAuth={handleRedirectionAuth}
          />
        </Route>
        <Route exact path={"/signin"}>
          <Login
            handleRedirectionAuth={handleRedirectionAuth}
          />
        </Route>
        <Route path="*" component={PageNotFound} />
      </Switch>
      {
        <Footer
          currentRoute={currentRoute}
        />
      }
    </div>
  );
};

export default App;
