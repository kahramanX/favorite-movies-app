import React from "react";
import ReactDOM from "react-dom";

//Import files
import App from "./App";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import MoviePage from "../src/components/MoviePage/MoviePage.js";

// SASS
import "../src/Assets/Styles/index.scss";
import "../src/Assets/Styles/reset.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <>
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <Header />
          <App />
        </Route>
        <Route strict path={"/movie"}>
          <Header />
          <MoviePage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </>,
  document.getElementById("root")
);
