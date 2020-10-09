import React from 'react';
import styles from './HeaderMessage.module.css'

const headerMessage = props => (
    <div className={styles.HeaderMessage}>{props.message}</div>
  );

export default headerMessage;