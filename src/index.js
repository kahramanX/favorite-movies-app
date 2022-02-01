import React from "react";
import ReactDOM from "react-dom";

//Import files
import App from "./App";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import MoviePage from "../src/components/Movie Page/MoviePage.js";

// SASS
import "../src/Assets/Styles/index.scss";
import "../src/Assets/Styles/reset.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <>
    <Router>
      <Header />
      <Route exact strict path={"/"}>
        <App />
      </Route>
      <Route path={`/movie/`}>
        <MoviePage />
      </Route>
      <Footer />
    </Router>
  </>,
  document.getElementById("root")
);
