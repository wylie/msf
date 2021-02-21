import React from 'react';
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import cn from "classnames";

import './_index.scss';

const Illustration = ({ className, children }) => {
  const outputClassName = cn(className, Illustration);
  return (
    <div className={outputClassName}>
      <Helmet title="MARK S. FISHER: ILLUSTRATION" />
      Illustrations here
    </div>
  );
}

Illustration.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string
};

Illustration.defaultProps = {};

export default Illustration;
