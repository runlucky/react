import React, { useState } from "react";
import "./Todo.css";
import TodoFrom from "./TodoForm";

function Todo(props) {
  const [edit, setEdit] = useState(false);

  if (edit) {
    return (
      <TodoFrom {...props} onSave={() => {}} onCancel={() => setEdit(false)} />
    );
  }

  return (
    <div className="todo">
      <div className="check">{props.Done && <span>✓</span>}</div>

      <div className="body">
        <div className="header">
          <span className="date">CreatedAt: {props.CreatedAt}</span>
          <span className="date">UpdatedAt: {props.UpdatedAt}</span>
        </div>

        <div className="content">{props.Content}</div>
      </div>
      <button className="btn" onClick={() => setEdit(true)}>
        Edit
      </button>
          <button className="btn" onClick={() => props.onDelete(props.ID)}>
        Delete
      </button>
    </div>
  );
}

export default Todo;
