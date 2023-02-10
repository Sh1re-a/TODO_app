import fetch from 'unfetch';
import { Todo } from './Todo';

const checkStatus = response => {
    if (response.ok) {
        return response;
    }
    // convert non-2xx HTTP responses into errors:
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}

export const getAllTodos = () =>
    fetch("api/todo/")
        .then(checkStatus);

export const addNewTodo = Todo => {
    fetch("api/todo/", {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'Post',
        body: JSON.stringify(Todo)
    });
}           