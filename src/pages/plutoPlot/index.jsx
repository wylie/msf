import React from 'react';
import PropTypes from "prop-types";
import cn from "classnames";
// import { Helmet } from "react-helmet";

import Helmet from "../../components/helmet/index.jsx";

import { plutoplot } from "../../assets/data/plutoplot.js";

import { PlutoPlotStyled } from "./styled.js";

const PlutoPlot = ({ children, className}) => {
  console.log("data", plutoplot);
  return (
    <PlutoPlotStyled className={cn(className)} data-element="pluto-plot">
      <Helmet data={plutoplot} />
      {children}
    </PlutoPlotStyled>
  );
}

PlutoPlot.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

PlutoPlot.defaultProps = {};

export default PlutoPlot;
