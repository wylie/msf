import React from 'react';
import PropTypes from "prop-types";
import cn from "classnames";
import { Helmet } from "react-helmet";

import { Particle17Styled } from "./styled.js";

const Particle17 = ({ children, className }) => {
  return (
    <Particle17Styled className={cn(className)} data-element="particle-17">
      <Helmet title={"Mark S. Fisher - Particle 17"} />
      {children}
    </Particle17Styled>
  );
}

Particle17.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Particle17.defaultProps = {};

export default Particle17;
