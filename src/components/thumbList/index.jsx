import React from 'react';
import PropTypes from "prop-types";
import cn from "classnames";

import { jupiterjak } from "../../assets/data/jupiterjak.js";

import { ThumbListStyled } from "./styled.js";

const ThumbList = ({ children, className }) => {
  const thumbs = jupiterjak.map((item) => <img src={item.thumb} alt="" />);
  return (
    <ThumbListStyled className={cn(className)} data-element="thumb-list">
      {thumbs}
      {children}
    </ThumbListStyled>
  );
}

ThumbList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

ThumbList.defaultProps = {};

export default ThumbList;
