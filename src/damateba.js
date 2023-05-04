import React, { useState } from 'react';
import axios from 'axios';

function AddTodoForm() {
  const [name, setName] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newTodo = {
      name,
      isCompleted: false,
      tags: tags.split(',').map((tag) => tag.trim()),
    };
    await axios.post('https://api.crudapi.co.uk/v1/d7C33d-i0SfQPRtqpBj_-MnY2iz24Vf-5YTgp2H1otprPcr30g/todos', newTodo);
    setName('');
    setTags('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">rame saxeli</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <label htmlFor="tags">Tagebi:</label>
      <input
        type="text"
        id="tags"
        name="tags"
        value={tags}
        onChange={(event) => setTags(event.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTodoForm;
