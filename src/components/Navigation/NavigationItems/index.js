import React from 'react';
import NavigationItem from './NavigationItem'
import styles from './NavigationItems.module.css'

const navigationItems = () => (
    <div className={styles.NavigationItems}>
      <NavigationItem url="/about">Sobre nós</NavigationItem>
      <NavigationItem url="/donate">Seja um doador</NavigationItem>
    </div>
  );

export default navigationItems;