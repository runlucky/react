import React, { useState } from "react";
import uuid from "uuid";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  const [todoes, setTodos] = useState([
    {
      ID: uuid.v4(),
      Content: "hoge",
      Done: true,
      CreatedAt: new Date().toISOString(),
      UpdatedAt: new Date().toISOString()
    }
  ]);

  const handleCreate = todo => {
    todo.ID = uuid.v4();

    const now = new Date().toISOString();

    todo.CreatedAt = now;
    todo.UpdatedAt = now;

    setTodos([...todoes, todo]);
  };

  const handleDelete = id => {
    const index = todoes.findIndex(todo => todo.ID === id);
    if (index < 0) return;

    const newList = [...todoes];
    newList.splice(index, 1);
    setTodos(newList);
  };

  const handleUpdate = data => {};

  return (
    <div className="App">
      <TodoForm onSave={handleCreate} />
      {todoes.map(todo => (
        <Todo key={todo.ID} {...todo} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default App;
