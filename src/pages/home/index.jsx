import React from 'react';
import PropTypes from "prop-types";
import cn from "classnames";
import { Helmet } from "react-helmet";

import { HomeStyled } from "./styled.js";

const Home = ({ children, className }) => {
  return (
    <HomeStyled className={cn(className)} data-element="home">
      {children}
    </HomeStyled>
  );
}

Home.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Home.defaultProps = {};

export default Home;
