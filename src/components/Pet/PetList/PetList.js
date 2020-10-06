import React from 'react';
import PetItem from '../PetItem/PetItem'
import classes from './PetList.module.css'

const petList = () => (
    <div className={classes.PetList}>
      <PetItem name='Fido'/>
      <PetItem name='Rex'/>
      <PetItem name='Bola de neve'/>
    </div>
  );

export default petList;