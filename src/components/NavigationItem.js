import React from 'react';
import { NavLink } from 'react-router-dom'
import styles from '../styles/NavigationItem.module.css'

const navigationItem = props => (
  <div className={styles.NavigationItem}>
    <NavLink to={props.uri}>
      {props.children}
    </NavLink>
  </div>
);

export default navigationItem;