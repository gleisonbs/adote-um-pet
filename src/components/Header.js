import React from 'react';
import HeaderMessage from './HeaderMessage'
import SearchBar from './SearchBar'
import Toolbar from './Toolbar'
import styles from '../styles/Header.module.css'

const header = () => (
    <div className={styles.Header}>
        <Toolbar />
        <HeaderMessage message="Seu novo melhor amigo está aqui."/>
        <SearchBar />
    </div>
  );

export default header;