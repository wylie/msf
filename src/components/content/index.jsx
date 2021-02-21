import React from 'react';
import PropTypes from "prop-types";
import cn from "classnames";

import './_index.scss';

const Content = ({ className, children }) => {
  const outputClassName = cn(className, Content);
  return (
    <div className={outputClassName}>
      {children}
    </div>
  );
}

Content.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string
};

Content.defaultProps = {};

export default Content;
