import "./App.css";
import React from "react";
import { Route, useHistory } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Movies from "./Movies";
import SavedMovies from "./SavedMovies";
import Profile from "./Profile";
import ProtectedRoute from "./ProtectedRoute";
import movies from "../utils/ulits";

function App() {
  const [isLoggedIn, setIsLoggedInState] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("saved");
  const [unrenderMain, setUnrenderMainState] = React.useState(true);
  const [unrenderMovies, setUnrenderMoviesState] = React.useState(true);
  const [unrenderSavedMovies, setUnrenderSavedMoviesState] = React.useState(true);
  const [unrenderFooter, setUnrenderFooterState] = React.useState(true);
  const [unrenderProfile, setUnrenderProfileState] = React.useState(true);
  const [preloaderState, setPreloaderState] = React.useState(false);

  return (
    <div className="App">
      <Header />
      {
        unrenderMain
          ?
        <></>
          :
        <Route path={"/"}>
          <Main />
        </Route>
      }
      {
        unrenderMovies
          ?
        <></>
          :
        <ProtectedRoute
          path="/movies"
          component={Movies}
          isLoggedIn={isLoggedIn}
          preloaderState={preloaderState}
          moviesArray={movies}
          currentRoute={currentRoute}
        />
      }
      {
        unrenderSavedMovies
          ?
        <></>
          :
        <ProtectedRoute
          path="/saved-movies"
          component={SavedMovies}
          isLoggedIn={isLoggedIn}
          preloaderState={preloaderState}
          moviesArray={movies}
          currentRoute={currentRoute}
        />
      }
      {
        unrenderProfile
          ?
        <></>
          :
        <ProtectedRoute
          path="/profile"
          component={Profile}
          isLoggedIn={isLoggedIn}
        />
      }
      {
        unrenderFooter
          ?
        <></>
          :
        <Footer />
      }
    </div>
  );
};

export default App;
