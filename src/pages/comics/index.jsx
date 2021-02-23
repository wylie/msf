import React from 'react';
import PropTypes from "prop-types";
import cn from "classnames";
import { Helmet } from "react-helmet";

import { ComicsStyled } from "./styled.js";

const Comics = ({ children, className }) => {
  return (
    <ComicsStyled className={cn(className)} data-element="comics">
      <Helmet title={"Mark S. Fisher - Comics"} />
      {children} Comics Page
    </ComicsStyled>
  );
}

Comics.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Comics.defaultProps = {};

export default Comics;
