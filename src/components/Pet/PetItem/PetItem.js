import React from 'react';
import classes from './PetItem.module.css'

const petItem = props => (
    <div className={classes.PetItem}>
      <p>PetItem: {props.name}</p>
    </div>
  );

export default petItem;