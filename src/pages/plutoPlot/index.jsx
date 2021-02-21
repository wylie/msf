import React from 'react';
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import cn from "classnames";

import './_index.scss';

const PlutoPlot = ({ className, children }) => {
  const outputClassName = cn(className, PlutoPlot);
  return (
    <div className={outputClassName}>
      <Helmet title="MARK S. FISHER: PLUTO PLOT" />
      Pluto Plot here
    </div>
  );
}

PlutoPlot.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string
};

PlutoPlot.defaultProps = {};

export default PlutoPlot;
