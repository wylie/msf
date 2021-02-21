import React from 'react';
import PropTypes from "prop-types";

import './_index.scss';

const Heading = ({ children }) => {
  return (
    <h1 className="Heading">
      {children}
    </h1>
  );
}

Heading.propTypes = {
  children: PropTypes.string
};

Heading.defaultProps = {};

export default Heading;
