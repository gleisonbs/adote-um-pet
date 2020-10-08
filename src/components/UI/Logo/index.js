import React from 'react';
import { NavLink } from 'react-router-dom'
import styles from './Logo.module.css'

const logo = () => (
  <div className={styles.Logo}>
    <NavLink to="/">
      LOGO
    </NavLink>
  </div>
);

export default logo;