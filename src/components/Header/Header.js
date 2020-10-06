import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from './Header.module.css'

const header = () => (
    <div className={classes.Header}>
        <Toolbar />
        <SearchBar />
    </div>
  );

export default header;