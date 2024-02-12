import React from 'react'
import styles from './Home.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../components/shared/Card/Card'
import Button from '../../components/shared/Button/Button'

const Home = () => {
    // const signInLinkStyle = {
    //     // color: '#fff',
    //     fontWeight: 'bold',
    //     textDecoration: 'none',
    //     marginLeft: '10px'
    // };
    const navigate = useNavigate();
    function startRegister() {
        console.log('Clicked on "Let\'s Go" button');
        navigate('/authenticate')
        console.log('Navigating to /authenticate');
    }
    return (
        <div className={styles.cardwrapper}>
            <Card title="Welcome to ColderTalks!" icon="logo">
                <p className={styles.text}>
                    We're working hard to get CoderTalks ready for everyone! While we wrap up the finishing youches, we're adding people gradially to make sure nothing breaks.
                </p>
                <div className={styles.name_box}>
                    <Button className={styles.inner_box} onClick={startRegister} children="Let's Go" />
                </div>
                <div>
                    <span>Have an invite text?</span>
                    {/* <Link style={signInLinkStyle} to="/login"> Sign in</Link> */}
                </div>
            </Card>
        </div>
    )
}

export default Home
