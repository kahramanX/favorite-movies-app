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
  <Router>
    <Header />
    <Switch>
      <Route exact path={"/"}>
        <App />
        <Footer />
      </Route>
      <Route strict path={"/movie"}>
        <MoviePage />
      </Route>
      <Route path="/watchlist"></Route>
      <Route path="/user"></Route>
      <Route path="/filter"></Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
