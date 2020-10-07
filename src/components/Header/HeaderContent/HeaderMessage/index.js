import React from 'react';
import styles from './HeaderMessage.module.css'

const headerMessage = props => (
    <div className={styles.HeaderMessage}>
        <div>{props.message}</div>
    </div>
  );

export default headerMessage;