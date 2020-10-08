import React from 'react';
import styles from './NavigationItem.module.css'
import { NavLink } from 'react-router-dom'

const navigationItem = props => (
    <NavLink to={props.uri}>
      {props.children}
    </NavLink>
  );

export default navigationItem;