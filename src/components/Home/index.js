import React from 'react';
import classes from './Home.module.css'

const home = (props) => (
    <div className={classes.Home}>
      {
      props.count > 0 ?
        <h3>Mais de  bichinhos a procura de um lar</h3> :
        <></>
      }
    </div>
  );

export default home;