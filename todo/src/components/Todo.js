import React from 'react';
import './Todo.css';

function Todo(props) {
    return (
        <div className="todo">
            <div className="check">
                {props.Done && <span>✓</span>}
            </div>

            <div className="body">
                <div className="header">
                    <span className="date">CreatedAt: {props.CreatedAt}</span>
                    <span className="date">UpdatedAt: {props.UpdatedAt}</span>
                </div>

                <div className="content">
                    {props.Content}
                </div>
            </div>
            <button className="btn">Edit</button>
            <button className="btn">Delete</button>
        </div>
    );
}

export default Todo;