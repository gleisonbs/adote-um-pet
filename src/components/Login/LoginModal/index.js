import React from 'react';
import { Modal } from 'semantic-ui-react';
import styles from './LoginModal.module.css'

function LoginModal({ id = 'modal', onClose = () => {}}) {

    const handleOutsideClick = (e) => {
        if(e.target.id === id) onClose();
    }

    return (
        <div id={id} className={styles.Modal} onClick={handleOutsideClick}>
            <div className={styles.Container}>
                <button className={styles.CloseBtn} onClick={onClose} />
                <div className={styles.Content}>
                    <h3>Hora de fazer a diferença!</h3>
                    <button className={styles.Btn} onClick={onClose} />
                    <button className={styles.Btn} onClick={onClose} />
                    <button className={styles.Btn} onClick={onClose} />
                    <button className={styles.Btn} onClick={onClose} />
                </div>
            </div>
        </div>
    );
}

export default LoginModal;