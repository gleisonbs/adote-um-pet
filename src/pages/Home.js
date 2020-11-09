import React from 'react';
import PetList from '../containers/PetList';
import styles from '../styles/Home.module.css';

const home = (props) => (
  <div className={styles.Home}>
    {props.count > 0 ? (
      <h3>Mais de {props.count - 1} bichinhos a procura de um lar</h3>
    ) : (
      <></>
    )}
    <PetList />
  </div>
);

export default home;
