import React from 'react';
import { NavLink } from 'react-router-dom'
import styles from './Login.module.css'

const login = props => (
    <div className={styles.Login}>
        <NavLink to={props.uri}>
            {props.children}
        </NavLink>
    </div>
);

export default login;