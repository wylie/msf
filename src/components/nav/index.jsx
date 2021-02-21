import React from "react";
import {
  Link
} from "react-router-dom";
import PropTypes from "prop-types";

import { nav } from "../../assets/data/nav.js";

import "./_index.scss";

const Nav = () => {
  return (
    <ul className="Nav">
      {nav.map(item => (
        <Link to={item.url} key={item.text}>
          <li className="NavItem" key={item.text}>{item.text}</li>
        </Link>
      ))}
    </ul>
  );
}

Nav.propTypes = {
  className: PropTypes.string
};

Nav.defaultProps = {};

export default Nav;
