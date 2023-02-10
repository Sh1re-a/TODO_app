import React, { useEffect, useState } from 'react'
import Background from './Background'
import { getAllTodos } from './client'
import styles from './Todo.module.css'
import TodoCard from './TodoCard'
import { addNewTodo } from './client'


function App(){
  
  const [todos, setTodos] = useState([])

  const fetchTodos = () =>
  getAllTodos()
  .then(res => res.json())
  .then(data => {
    console.log(data);
    setTodos(data);
  })

  useEffect(() => {
    console.log("component is mounted")
    fetchTodos();
  }, []);
  
  if(todos.length <= 0) {
    return "no data"
  }

  return todos.map((todos, index) => {
    return <p key={index}>{todos.id}</p>
  })
}


export const Todo = () => {

  return (
    <>
    <Background/>
    <div className={styles.addNote}>
    <input className={styles.noteInput}  type='text' placeholder="Enter todo"  ></input>

    <button className={styles.addBtn}  >ADD</button>   
     
    </div>

  
    
    
    <div className={styles.boxes}>
    <div className={styles.box1}></div>
    </div>
    
    </>
  )
  
}
