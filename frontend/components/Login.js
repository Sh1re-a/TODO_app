import React, { useState } from 'react'
import Background from './Background'
//import { useAuth } from '../context/AuthContext'
import styles from './Login.module.css'


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [isLoggingIn, setIsLoggingIn] = useState(true)

    

    async function submitHandler() {
        if (!email || !password) {
            setError('Please enter email and password')
            return
        }
        if (isLoggingIn) {
            try {
                await login(email, password)
            } catch (err) {
                setError('Incorrect email or password')
            }
            return
        }
        await signup(email, password)
    }

    return (
        <>
        <Background/>
        
        <div className={styles.fuckYou}>Welcome</div>

        <div className={styles.login}>
        <input className={styles.emailInput} placeholder="Email Address"></input>
        <input className={styles.passwordInput} placeholder="Password"></input>
       </div>

       <div className={styles.fortgotBtn}>FORGOT PASSWORD?</div>
       <div className={styles.signupBtn}>Sign Up</div>
       <div className={styles.nextBtn}></div>
       </>
       
    )
}