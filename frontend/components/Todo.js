import React, { useState, useEffect } from 'react';
import styles from './Todo.module.css';
import Background from './background';
import { AiFillDelete } from 'react-icons/ai';

export const Todo = ({ setPage }) => {
  const [todos, setTodos] = useState([]);
  const [pushTodo, setPushTodo] = useState('');
  const [description, setDescription] = useState("");
  const [isTodoAdded, setIsTodoAdded] = useState(false);

  const addTodo = async (todo) => {
    
    const bror = localStorage.getItem('jwt');
    const token = bror.replace(/['"]+/g, '');
    
    if (!token) {
      setPage(0);
      return;
    }
    try {
      const response = await fetch('http://localhost:8080/api/todo/addNewTodo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ description }),
      });
      if (response.status === 403) {
        localStorage.removeItem('jwt');
        setPage(0);
      }
      const data = await response.json();
      setTodos([...todos, data]);
      setTodos([...todos, { id: data.id, description: todo }]);
      setIsTodoAdded(true);
    } catch (error) {
      if(error instanceof SyntaxError){
        setIsTodoAdded(true);
      }
      else {
        localStorage.removeItem('jwt');
        setPage(0);
      }
      
      console.error(error);
    }
  };

  const deleteTodo = async (id) => {
    const bror = localStorage.getItem('jwt');
      const token = bror.replace(/['"]+/g, '');
      if (!token) {
        setPage(0);
        return;
      }
    try {
      const response = await fetch(`http://localhost:8080/api/todo/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.status === 404) {
        throw new Error('Todo not found');
      }
  
      setTodos(todos.filter(todo => todo.id !== id));
      setIsTodoAdded(true);
    } catch (error) {
      if(error instanceof SyntaxError){
        setIsTodoAdded(true);
      }
      else {
        localStorage.removeItem('jwt');
        setPage(0);
      }
      console.error(error);
    }
  }

  const [editing, setEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todos.description);

  const handleInputChange = (event) => {
    setUpdatedTodo(event.target.value);
  };

  const handleEditTodo = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setUpdatedTodo(todos.description);
    setEditing(false);
  };

  const handleSaveEdit = async () => {
    try {
      const bror = localStorage.getItem('jwt');
      const token = bror.replace(/['"]+/g, '');
      if (!token) {
        setPage(0);
        return;
      }

      const response = await fetch(`http://localhost:8080/api/todo/${todo.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ description: updatedTodo }),
      });

      if (response.status === 403) {
        localStorage.removeItem('jwt');
        setPage(0);
      }

      editTodo({
        ...todos,
        description: updatedTodo,
      });
      setEditing(false);
    } catch (error) {
      console.error(error);
    }
  };


 

  useEffect(() => {
    async function fetchTodos() {
      const bror = localStorage.getItem('jwt');
      const token = bror.replace(/['"]+/g, '');
      
      if (!token) {
        setPage(0);
        return;
      }
      try {
        const response = await fetch('http://localhost:8080/api/todo/getAllTodos', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTodos();
    
    if (isTodoAdded) {
      
      setIsTodoAdded(false);
    }
  }, [isTodoAdded]);

  return (
    <>
      <Background />
      <div className={styles.addNote}>
        <input
          className={styles.noteInput}
          type="text"
          placeholder="Enter todo"
          onChange={(event) => setDescription(event.target.value)}
        />
        <button className={styles.addBtn} onClick={() => addTodo()}>
          ADD
        </button>
      </div>

      <div className={styles.boxes}>
        {todos.map((todo) => (
          <div className={styles.box1} key={todo.id}>
            <AiFillDelete style={{
              marginTop: "10px",
              marginLeft: "150px",
            }}
            onClick={() => deleteTodo(todo.id)}
            />
            <p>{todo.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
