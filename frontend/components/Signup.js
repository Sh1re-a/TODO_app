import React from 'react'
import Background from './Background'
import styles from './Signup.module.css'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'


export const Signup = () => {
  return (
    <>
        <Background/>
        
        <div className={styles.fuckYou}>Sign up</div>

        <div className={styles.login}>
        <AiOutlineUser style={{
            position: 'absolute',
            top: '275px',
            left: '319px',
            color: '#E69023',
            width: "19px",
            height: "19px",
        }}></AiOutlineUser>
        <input className={styles.emailInput} placeholder="Email Address"></input>
        <input className={styles.passwordInput} placeholder="DisplayName"></input>
        <input className={styles.passwordInput} placeholder="Password"></input>
        <input className={styles.passwordInput} placeholder="Confirm Password"></input>
       </div>

       <AiOutlineArrowLeft
        style={{
            color: "white",
            width: "30px",
            height: "30px",
            position: "absolute",
            top: "789px",
            left: "67px"

        }}></AiOutlineArrowLeft>

       <div className={styles.nextBtn}> Sign Up</div>
       </>
  )
}
