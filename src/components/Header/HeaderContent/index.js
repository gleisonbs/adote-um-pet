import React from 'react';
import HeaderMessage from './HeaderMessage'
import SearchBar from '../../SearchBar'
import Toolbar from '../../Navigation/Toolbar'
import styles from './HeaderContent.module.css'

const headerContent = () => (
    <div className={styles.HeaderContent}>
        <Toolbar />
        <HeaderMessage>Seu novo melhor amigo está aqui.</HeaderMessage>
        <SearchBar />
    </div>
  );

export default headerContent;