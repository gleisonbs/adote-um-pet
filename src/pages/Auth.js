import React, { useState } from 'react';
import styles from '../styles/Login.module.css';

import LoginModal from '../components/LoginModal';

const Auth = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className={styles.Login}>
      <button
        type="button"
        onClick={() => setIsModalVisible(true)}
        className={styles.LoginBtn}
      >
        Login
      </button>
      {isModalVisible ? (
        <LoginModal onClose={() => setIsModalVisible(false)} />
      ) : null}
    </div>
  );
};

export default Auth;
