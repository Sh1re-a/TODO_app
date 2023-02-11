import React, { useEffect, useState } from 'react'
import Background from './Background'
//import { useAuth } from '../context/AuthContext'
import styles from './Login.module.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'



/* export const Login = ({setPage}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
      try {
    
    const response = await fetch("http://localhost:8080/api/v1/auth/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
  
      localStorage.setItem("jwt", data.jwt);
      console.log("Det gick bra bror")
      setPage(2);
    } 
    catch (error) {
      console.error(error);
      setError("Ett fel uppstod när du försökte logga in.");
    }
    
    
}
    

    return (
        <>
        <Background/>
        
        <div className={styles.fuckYou}>Welcome</div>

        <div className={styles.login}>
        <AiOutlineUser style={{
            position: 'absolute',
            top: '409px',
            left: '319px',
            color: '#E69023',
            width: "19px",
            height: "19px",
        }}></AiOutlineUser>
        <input className={styles.emailInput} placeholder="Email Address" onChange={(event) => setEmail(event.target.value)}>
        </input>
        <input className={styles.passwordInput} placeholder="Password" onChange={(event) => setPassword(event.target.value)}></input>
       </div>

       <div className={styles.accountDontExists}>{error}</div>

       <div className={styles.fortgotBtn}>FORGOT PASSWORD?</div>
       <div className={styles.signupBtn} onClick={()=>setPage(1)}>Sign Up</div>
       <div className={styles.nextBtn}  onClick={handleSubmit}>
        <AiOutlineArrowRight
        style={{
            color: "white",
            width: "24px",
            height: "24px",

        }}
        
        ></AiOutlineArrowRight>
       </div>
       </>
    
    ) 

}

 */


/* export const Login = ({ setPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!email.endsWith('.com') && !email.endsWith('.se')) {
      setError("Invalid email address, it should end with either .com or .se");
      return;
    }
    

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.status !== 200) {
        setError(data.message);
        return;
      }

      localStorage.setItem("jwt", data.jwt);
      setPage(2);
    } catch (error) {
      console.error(error);
      setError("An error occurred while trying to log in.");
    }
  }

  return (
    <>
      <Background />

      <div className={styles.fuckYou}>Welcome</div>

      <div className={styles.login}>
        <AiOutlineUser style={{
          position: 'absolute',
          top: '409px',
          left: '319px',
          color: '#E69023',
          width: "19px",
          height: "19px",
        }}></AiOutlineUser>
        <input className={styles.emailInput} placeholder="Email Address" onChange={(event) => setEmail(event.target.value)} />
        <input className={styles.passwordInput} placeholder="Password" onChange={(event) => setPassword(event.target.value)} type="password" />
      </div>

      <div className={styles.accountDontExists}>{error}</div>

      <div className={styles.fortgotBtn}>FORGOT PASSWORD?</div>
      <div className={styles.signupBtn} onClick={() => setPage(1)}>Sign Up</div>
      <div className={styles.nextBtn} onClick={handleSubmit}>
        <AiOutlineArrowRight
          style={{
            color: "white",
            width: "24px",
            height: "24px",
          }}
        ></AiOutlineArrowRight>
      </div>
    </>
  )
}
 */


export const Login = ({ setPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const localStorageToken = localStorage.getItem("jwt");
    if (localStorageToken != null) {
      setPage(2);
    }
  }, []);

  const handleSubmit = async (event) => {
    {
        event.preventDefault();
        
        if (!email.endsWith('.com') && !email.endsWith('.se')) {
          setError("Invalid email address, it should end with either .com or .se");
          return;
        }

    // validate email
    if (!email.includes("@")) {
      setError("Invalid email address");
      return;
    }

    // validate password
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      localStorage.setItem("jwt",JSON.stringify(data.token));
      console.log("Login successful");
      setPage(2);
    } catch (error) {
      console.error(error);
      setError("An error occurred while trying to log in.");
    }
  }
  }
  return (
    <>
      <Background />

      <div className={styles.fuckYou}>Welcome</div>

      <div className={styles.login}>
        <AiOutlineUser style={{
          position: 'absolute',
          top: '409px',
          left: '319px',
          color: '#E69023',
          width: "19px",
          height: "19px",
        }}></AiOutlineUser>
        <input
          className={styles.emailInput}
          placeholder="Email Address"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className={styles.passwordInput}
          placeholder="Password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div className={styles.accountDontExists}>{error}</div>

      <div className={styles.fortgotBtn}>FORGOT PASSWORD?</div>
      <div className={styles.signupBtn} onClick={() => setPage(1)}>Sign Up</div>
      <div className={styles.nextBtn} onClick={handleSubmit}>
        <AiOutlineArrowRight
          style={{
            color: "white",
            width: "24px",
            height: "24px",
          }}
        />
      </div>
    </>
  )
}
