import React from 'react';
import styles from './NavigationItem.module.css'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

const navigationItem = props => (
  <Router className={styles.NavigationItem}>
    <NavLink to={props.uri}>
      {props.children}
    </NavLink>
  </Router>
  );

export default navigationItem;