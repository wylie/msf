import React from 'react';
import PropTypes from "prop-types";
import cn from "classnames";

import { jupiterjak } from "../../assets/data/jupiterjak.js";

import styles from './_index.css';

const ThumbList = ({ className }) => {
  const outputClassName = cn(className, styles.ThumbList);
  const thumbs = jupiterjak.map((item) => <img src={item.thumb} alt="" />);
  return (
    <div className={outputClassName}>
      {thumbs}
    </div>
  );
}

ThumbList.propTypes = {
  className: PropTypes.string
};

ThumbList.defaultProps = {};

export default ThumbList;
