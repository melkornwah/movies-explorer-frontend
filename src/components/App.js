import "./App.css";
import React from "react";
import { Route, useHistory } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Movies from "./Movies";
import ProtectedRoute from "./ProtectedRoute";
import movies from "../utils/ulits";

function App() {
  const [isLoggedIn, setIsLoggedInState] = React.useState(true);
  const [unrenderMain, setUnrenderMainState] = React.useState(true);
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
      <ProtectedRoute
        path="/movies"
        component={Movies}
        isLoggedIn={isLoggedIn}
        preloaderState={preloaderState}
        moviesArray={movies}
      />
      <Footer />
    </div>
  );
};

export default App;
