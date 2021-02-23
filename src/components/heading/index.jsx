import React from 'react';
import PropTypes from "prop-types";
import cn from "classnames";

import { HeadingStyled } from "./styled.js";

const Heading = ({ bgImage, children, className }) => {
  return (
    <HeadingStyled bgImage={bgImage} className={cn(className)} data-element="heading">
      {children}
    </HeadingStyled>
  );
}

Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Heading.defaultProps = {};

export default Heading;
