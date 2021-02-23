import React from "react";
import {
  BrowserRouter as Router,
  Route
 } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./index.css";

import Heading from "./components/heading";
import Nav from "./components/nav";
import Footer from "./components/footer"; 

import { nav } from "./assets/data/nav.js";

import starImage from "./assets/image/stars.png";
// import bokehImage from "./assets/image/bokeh.jpg";

import { AppContainer, AppLinkStyled, AppContent } from "./App.styled.js";

class App extends React.Component {
  render() {
    const name = "Mark S. Fisher";
    const routesComponents = nav.map(item =>
      <Route exact path={item.url} key={item.text} component={item.component} />
    );

    return (
      <Router>
        <AppContainer data-element="app-container">
          <Helmet title={name} />
          <Heading bgImage={starImage} data-element="app-heading">
            <AppLinkStyled to="/">{name}</AppLinkStyled>
          </Heading>
          <Nav children="Nav" data-element="app-nav" />
          <AppContent data-element="app-content">
            {routesComponents}
          </AppContent>
          <Footer children={`all artwork © ${name}`} data-element="app-footer" />
        </AppContainer>
      </Router>
    );
  }
}

export default App;
