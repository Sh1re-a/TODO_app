import React from 'react'
import Background from './Background'
import styles from './Todo.module.css'
import TodoCard from './TodoCard'

export const Todo = () => {
  return (
    <>
    <Background/>
    <div className={styles.addNote}>
    <input className={styles.noteInput}></input>
    <div className={styles.addBtn}>ADD</div>
    </div>
    
    
    <div className={styles.boxes}>
    <div className={styles.box1}></div>
    </div>
    <TodoCard/>
    </>
  )
}
