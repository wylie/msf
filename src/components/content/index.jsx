import React from 'react';
import PropTypes from "prop-types";
import cn from "classnames";

import { ContentStyled } from "./styled.js";

const Content = ({ children, className }) => {
  const outputClassName = cn(className, Content);
  return (
    <ContentStyled className={cn(className)} data-element="content">
      {children}
    </ContentStyled>
  );
}

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Content.defaultProps = {};

export default Content;
