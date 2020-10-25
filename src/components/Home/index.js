import React from 'react';
import Pet from '../../containers/Pet'
import styles from './Home.module.css'

const home = (props) => (
  <div className={styles.Home}>
    {
      props.count > 0 ?
        <h3>Mais de  bichinhos a procura de um lar</h3> :
        <></>
    }
    <Pet.List />
  </div>
);

export default home;