import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([
    {
      ID: 1,
      Content: 'hoge',
      Done: true,
      CreatedAt: (new Date()).toISOString(),
      UpdatedAt: (new Date()).toISOString(),
    },
    {
      ID: 2,
      Content: 'hoge2',
      Done: true,
      CreatedAt: new Date().toISOString(),
      UpdatedAt: (new Date()).toISOString(),
    },
    {
      ID: 3,
      Content: 'hoge3',
      Done: true,
      CreatedAt: (new Date()).toISOString(),
      UpdatedAt: (new Date()).toISOString(),
    },
    {
      ID: 4,
      Content: 'hoge4',
      Done: false,
      CreatedAt: (new Date()).toISOString(),
      UpdatedAt: (new Date()).toISOString(),
    },
  ]);

  return (
    <div className="App">
      {todos.map(todo => <Todo key={todo.ID} {...todo} />)}
    </div>
  );
}

export default App;
