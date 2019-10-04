import React, { useState } from 'react';
import './App.css';

const Todo = ({ todo, index }) => {
  return <div className="todo">{todo.text}</div>;
};

function App() {
  const [todos, setTodo] = useState([
    {
      text: 'Start working on graduation project',
      complete: false,
    },
    {
      text: 'Start a new job',
      complete: false,
    },
    {
      text: 'Get out of deppression!',
      complete: false,
    },
  ]);
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
