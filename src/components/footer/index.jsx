import React from 'react';
import PropTypes from "prop-types";
import cn from "classnames";

import { FooterStyled } from "./styled.js";

const Footer = ({ children, className }) => {
  return (
    <FooterStyled className={cn(className)} data-element="footer">
      {children}
    </FooterStyled>
  );
}

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Footer.defaultProps = {};

export default Footer;
