import React from 'react';
import AddTodoForm from './damateba';
import TodoList from './toDoList';

function App() {
  return (
    <div>
      <AddTodoForm />
      <TodoList />
      {/* axios gamovikene mara mgoni leqciashi ar iko, just ese memartiveboda (stone man's emoji) */}
    </div>
  );
}

export default App;

