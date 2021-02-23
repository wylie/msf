import React from "react";
import PropTypes from "prop-types";
import { Helmet as ReactHelmet } from "react-helmet";

const Helmet = ({data}) => {
  return (
    <ReactHelmet title={data.page.title} />
  );
}

Helmet.propTypes = {
  data: PropTypes.object
};

Helmet.defaultProps = {};

export default Helmet;
