import React from 'react';
import NavigationItems from '../NavigationItems'
import NavigationItem from '../NavigationItems/NavigationItem'
import styles from './Toolbar.module.css'
import Logo from '../../UI/Logo';

const toolbar = () => (
    <div className={styles.Toolbar}>
      <Logo />
      <NavigationItems />
      <NavigationItem style={styles.FloatRight} uri="/signin">
        Login
      </NavigationItem>
    </div>
  );

  export default toolbar;