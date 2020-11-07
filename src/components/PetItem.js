import React from 'react';
import styles from '../styles/Item.module.css'

const item = props => (
    <div className={styles.Item}>
      <img src={props.imageURL} alt={props.type} />
      <div>{props.name}</div>
    </div>
  );

export default item;
