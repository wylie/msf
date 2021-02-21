import React from 'react';
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import cn from "classnames";

import './_index.scss';

const JupiterJak = ({ className, children }) => {
  const outputClassName = cn(className, JupiterJak);
  return (
    <div className={outputClassName}>
      <Helmet title="MARK S. FISHER: JUPITER JAK" />
      JupiterJak here
    </div>
  );
}

JupiterJak.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string
};

JupiterJak.defaultProps = {};

export default JupiterJak;
