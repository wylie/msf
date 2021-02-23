import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { nav } from "../../assets/data/nav.js";

import { NavStyled, NavItemStyled, NavLinkStyled } from "./styled.js";

const Nav = ({className}) => {
  return (
    <NavStyled className={cn(className)}data-element="nav">
      {nav.map(item => (
        <NavItemStyled key={item.text}>
          <NavLinkStyled to={item.url} key={item.text}>
            {item.text}
          </NavLinkStyled>
        </NavItemStyled>
      ))}
    </NavStyled>
  );
}

Nav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  to: PropTypes.string
};

Nav.defaultProps = {};

export default Nav;
