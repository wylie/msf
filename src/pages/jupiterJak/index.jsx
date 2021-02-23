import React from 'react';
import PropTypes from "prop-types";
import cn from "classnames";
import { Helmet } from "react-helmet";

import { JupiterjakStyled } from "./styled.js";

const JupiterJak = ({ children, className}) => {
  return (
    <JupiterjakStyled className={cn(className)} data-element="jupiter-jak">
      <Helmet title={"Mark S. Fisher - Jupiter Jak"} />
      {children}
    </JupiterjakStyled>
  );
}

JupiterJak.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

JupiterJak.defaultProps = {};

export default JupiterJak;
