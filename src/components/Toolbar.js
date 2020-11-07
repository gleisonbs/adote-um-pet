import React from 'react';
import NavigationItems from './NavigationItems'
import Auth from '../pages/Auth'
import Logo from './Logo';
import styles from '../styles/Toolbar.module.css'

const toolbar = () => (
    <div className={styles.Toolbar}>
      <Logo />
      <NavigationItems />
      <Auth uri="/auth">Login</Auth>
    </div>
  );

  export default toolbar;