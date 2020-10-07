import React from 'react';
import classes from './SearchOption.module.css'

const searchOption = props => (
  <div className={classes.SearchOption}>
    <div>{props.children}</div>
  </div>
);

export default searchOption;