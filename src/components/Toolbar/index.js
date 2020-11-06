import React from 'react';
import NavigationItems from './NavigationItems'
import Login from '../Login'
import styles from './Toolbar.module.css'
import Logo from '../UI/Logo';

const toolbar = () => (
    <div className={styles.Toolbar}>
      <Logo />
      <NavigationItems />
      <Login uri="/auth">Login</Login>
    </div>
  );

  export default toolbar;