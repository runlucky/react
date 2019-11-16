import React, { useState } from "react";
import uuid from "uuid";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  const [todoes, setTodoes] = useState([
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

    setTodoes([...todoes, todo]);
  };

  const handleDelete = id => {
    const index = todoes.findIndex(todo => todo.ID === id);
    if (index < 0) return;

    const newList = [...todoes];
    newList.splice(index, 1);
    setTodoes(newList);
  };

  const handleUpdate = target => {
    target.UpdatedAt = new Date().toISOString();

    setTodoes(todoes.map(todo => {
      if (todo.ID === target.ID) {
        return target;
      }
      return todo;
    }));
  };

  return (
    <div className="App">
      <TodoForm onSave={handleCreate} />
      {todoes.map(todo => (
        <Todo key={todo.ID} {...todo}
          onSave={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default App;
