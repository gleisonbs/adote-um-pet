import React from 'react';
import styles from './NavigationItem.module.css'

const navigationItem = props => (
    <div className={styles.NavigationItem}>
      <div>{props.children}</div>
    </div>
  );

export default navigationItem;