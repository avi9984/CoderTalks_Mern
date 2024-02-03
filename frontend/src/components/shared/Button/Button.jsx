import React from 'react'
import styles from './Button.module.css'

const Button = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className={styles.inner_box}>
            <span className={styles.btn}>{children}</span>
            <img className={styles.arrow} src="/images/right-arrow.png" alt="arrow" />
        </button>
    )
}

export default Button
