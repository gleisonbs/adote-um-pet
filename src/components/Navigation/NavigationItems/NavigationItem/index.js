import React from 'react';
import styles from './NavigationItem.module.css'
import { NavLink } from 'react-router-dom'

const navigationItem = props => (
  <div className={styles.navigationItem}>
    <NavLink to={props.uri}>
      {props.children}
    </NavLink>
  </div>
);

export default navigationItem;