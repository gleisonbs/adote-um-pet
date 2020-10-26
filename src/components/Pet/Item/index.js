import React from 'react';
import classes from './Item.module.css'

const item = props => (
    <div className={classes.Item}>
      <img src={props.imageURL} alt={props.type} />
      <div>{props.name}</div>
    </div>
  );

export default item;
