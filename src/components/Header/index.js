import React from 'react';
import styles from './Header.module.css'
import HeaderMessage from './HeaderMessage'
import SearchBar from '../SearchBar'

import Toolbar from '../Navigation/Toolbar'

const header = () => (
    <div className={styles.Header}>
        <Toolbar />
        <HeaderMessage message="Seu novo melhor amigo está aqui."/>
        <SearchBar />
    </div>
  );

export default header;