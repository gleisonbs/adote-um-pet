import React from 'react';
import SearchOption from './SearchOption'
import classes from './SearchBar.module.css'

const searchBar = () => (
    <div className={classes.SearchBar}>
        <input type="text" placeholder="Como será seu próximo pet?"></input>
        <SearchOption>Cachorro</SearchOption>
        <SearchOption>São Paulo</SearchOption>
        <button>Pesquisar</button>
    </div>
  );

export default searchBar;