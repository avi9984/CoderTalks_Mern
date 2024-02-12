import React, { useState } from 'react'
import Phone from './Phone/Phone.jsx';
import Email from './Email/Email.jsx';
import style from './StepEmail.module.css'
const phoneEmailMap = {
    phone: Phone,
    email: Email
}
const StepPhoneEmail = ({ onNext }) => {
    const [type, setType] = useState('phone');
    const Component = phoneEmailMap[type];
    return (
        <>
            <div className={style.cardWrapper}>
                <div>
                    <div className={style.buttonWrapper}>
                        <button onClick={() => setType('phone')}>Phone</button>
                        <button onClick={() => setType('email')}>Email</button>
                    </div>
                    <Component onNext={onNext} />
                </div>
            </div>
        </>
    )
}

export default StepPhoneEmail
