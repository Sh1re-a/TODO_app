
/* export const Signup = ({setPage}) => {

  const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [error, setError] = useState("");

const handleSubmit = async (event) => {
  
  if(password === confirmPassword){
  try {
    const response = await fetch("http://localhost:8080/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, email, password }),
    });
    const data = await response.json();
    localStorage.setItem("jwt", data.jwt);
    console.log("Det gick bra bror");
    setPage(2);
  } catch (error) {
    console.error(error);
    setError("Ett fel uppstod när du försökte logga in. Vänligen försök igen senare.");
  } }
  else {
    setError("Lösenordet matchar inte!");
  }
}; */import React, { useState } from 'react'
import Background from './Background'
import styles from './Signup.module.css'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'


export const Signup = ({setPage}) => {

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!fullname) {
      setError("Full name is required");
      return;
    }
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email address");
      return;
    }
    if (!password) {
      setError("Password is required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password does not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullname, email, password }),
      });
      const data = await response.json();
      localStorage.setItem("jwt", JSON.stringify(data.token));
      console.log("Sign up successful");
      setPage(2);
    } catch (error) {
      console.error(error);
      setError("An error occurred while trying to sign up. Please try again later.");
    }
  };

  



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
        
    <input className={styles.emailInput} placeholder="Email Address" onChange={(event) => setEmail(event.target.value)}></input>
    <input className={styles.passwordInput} placeholder="Fullname"onChange={(event) => setFullName(event.target.value)}></input>
    <input type="password" className={styles.passwordInput} placeholder="Password" onChange={(event) => setPassword(event.target.value)}></input>
    <input type="password" className={styles.passwordInput} placeholder="Confirm Password" onChange={(event) => setConfirmPassword(event.target.value)}></input>
   </div>
       

       <div className={styles.couldntCreateAccount}>{error}</div>

       <AiOutlineArrowLeft
        style={{
            color: "white",
            width: "30px",
            height: "30px",
            position: "absolute",
            top: "789px",
            left: "67px"

        }}
        onClick={()=> setPage(0)}
        ></AiOutlineArrowLeft>

  <div className={styles.nextBtn} onClick={(event) => handleSubmit(event)}> Sign Up</div>
       </>
  )
}
