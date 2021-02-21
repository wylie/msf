import React from 'react';
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import cn from "classnames";

import './_index.scss';

const Comics = ({ className, children }) => {
  const outputClassName = cn(className, Comics);
  return (
    <div className={outputClassName}>
      <Helmet title="MARK S. FISHER: COMICS" />
      Comics here
    </div>
  );
}

Comics.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string
};

Comics.defaultProps = {};

export default Comics;
