import React from 'react';
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import cn from "classnames";

import './_index.scss';

const Particle17 = ({ className, children }) => {
  const outputClassName = cn(className, Particle17);
  return (
    <div className={outputClassName}>
      <Helmet title="MARK S. FISHER: PARTICLE 17" />
      Particle17 here
    </div>
  );
}

Particle17.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string
};

Particle17.defaultProps = {};

export default Particle17;
