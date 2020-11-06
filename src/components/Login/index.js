import React, { useState } from 'react';
import styles from './Login.module.css'

import LoginModal from './LoginModal';

const Login = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <div className={styles.Login}>
            <button onClick={() => setIsModalVisible(true)} className={styles.LoginBtn}>
                Login
            </button>
            {isModalVisible ? <LoginModal onClose={() => setIsModalVisible(false)} /> : null}
        </div>
    );
}

export default Login;