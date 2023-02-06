import React from 'react'
import Background from './Background'
import styles from './Signup.module.css'


export const Signup = () => {
  return (
    <>
        <Background/>
        
        <div className={styles.fuckYou}>Sign up</div>

        <div className={styles.login}>
        <input className={styles.emailInput} placeholder="Email Address"></input>
        <input className={styles.passwordInput} placeholder="DisplayName"></input>
        <input className={styles.passwordInput} placeholder="Password"></input>
        <input className={styles.passwordInput} placeholder="Confirm Password"></input>
       </div>

       
       
       <div className={styles.nextBtn}> Sign Up</div>
       </>
  )
}
