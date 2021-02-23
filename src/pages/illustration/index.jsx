import React from 'react';
import PropTypes from "prop-types";
import cn from "classnames";
import { Helmet } from "react-helmet";

import { IllustrationStyled } from "./styled.js";

const Illustration = ({ children, className }) => {
  return (
    <IllustrationStyled className={cn(className)} data-element="illustration">
      <Helmet title={"Mark S. Fisher - Illustration"} />
      {children}
    </IllustrationStyled>
  );
}

Illustration.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Illustration.defaultProps = {};

export default Illustration;
