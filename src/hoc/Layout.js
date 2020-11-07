import React from 'react';
import styles from '../styles/Layout.module.css'

const layout = props => (
    <div className={styles.Layout}>
      {props.children}
    </div>
  );

export default layout;