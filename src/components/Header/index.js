import React from 'react';
import styles from './Header.module.css'
import HeaderContent from './HeaderContent';

const header = () => (
    <div className={styles.Header}>
        <HeaderContent />
    </div>
  );

export default header;