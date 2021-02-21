import React from 'react';
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import cn from "classnames";

import './_index.scss';

const Home = ({ className, children }) => {
  const outputClassName = cn(className, Home);
  return (
    <div className={outputClassName}>
      <Helmet title="MARK S. FISHER" />
      Home
    </div>
  );
}

Home.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string
};

Home.defaultProps = {};

export default Home;
