import React from 'react';
import classes from './Item.module.css'

const item = props => (
    <div className={classes.Item}>
      <img src={props.imageURL} />
      <div>{props.name}</div>
    </div>
  );

export default item;