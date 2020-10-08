import React from 'react';
import classes from './Home.module.css'
import PetList from '../Pet/PetList/PetList';

const home = () => (
    <div className={classes.Home}>
      <p>Home</p>
      <PetList />
    </div>
  );

export default home;