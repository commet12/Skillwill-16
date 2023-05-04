import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const salah = async () => {
      const response = await axios.get(
        'https://api.crudapi.co.uk/v1/d7C33d-i0SfQPRtqpBj_-MnY2iz24Vf-5YTgp2H1otprPcr30g/todos'
      );
      setTodos(response.data);
    };
    salah();
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          {todo.name} - {todo.isCompleted ? 'Completed' : 'Not Completed'}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
