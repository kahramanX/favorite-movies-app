import React from "react";
import ReactDOM from "react-dom";

//Import files
import App from "./App";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";

// SASS
import "../src/Assets/Styles/index.scss";

ReactDOM.render(
  <>
    <Header />
    <App />
    <Footer />
  </>,
  document.getElementById("root")
);
