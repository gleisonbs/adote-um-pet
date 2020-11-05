import React from 'react';
import styles from './LoginModal.module.css'

import fbLogo from '../../../images/fbLogo.png';
import glLogo from '../../../images/glLogo.png';

function LoginModal({ id = 'modal', onClose = () => {}}) {

    const handleOutsideClick = (e) => {
        if(e.target.id === id) onClose();
    }

    return (
        <div id={id} className={styles.Modal} onClick={handleOutsideClick}>
            <div className={styles.Container}>
                <button className={styles.CloseBtn} onClick={onClose} />
                <div className={styles.Content}>
                    <h3>Hora de fazer a diferença.</h3>
                    <div className={styles.SocialMediaContainer}>
                        <div className={styles.SocialMediaDiv}>
                            <button className={styles.FacebookButton}>
                                <img src={fbLogo} alt="Facebook icon" className={styles.socialMediaIconFacebook}/>
                                Entrar com o facebook
                            </button>
                        </div>
                        <div className={styles.SocialMediaDiv}>
                            <button className={styles.GoogleButton}>
                                <img src={glLogo} alt="Google icon" className={styles.socialMediaIconGoogle}/>
                                Entrar com o Google
                            </button>
                        </div>
                    </div>
                    <div className={styles.LoginSplitter}>
                        <hr/>
                        ou
                        <hr/>
                    </div>
                    <div className={styles.FormContainer}>
                        <form>
                            <input placeholder="Email"/>
                            <input placeholder="Senha"/>
                            <button type="submit" value="Entrar">
                                Entrar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;