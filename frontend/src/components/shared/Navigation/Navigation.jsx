import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'
const Navigation = () => {

    const brandStyle = {
        color: '#fff',
        textDecoration: "none",
        fontWeight: 'bold',
        fontSize: '22px',
        display: 'flex',
        alignItems: "center"
    };


    return (
        <nav className={`${styles.navbar} container`}>
            <Link style={brandStyle} to="/">
                <img src="/images/logo.png" alt="logo" />
                <span>CoderTalks</span>
            </Link>
        </nav>
    )
}

export default Navigation
