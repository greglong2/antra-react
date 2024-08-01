import React from "react";

export default function Todo(props) {

    const { deleteHandler, editHandler, todo } = props;

    return (
        <div>
            <span>{todo.title}</span>
            <button onClick={() => { editHandler(todo) }}>Edit</button>
            <button onClick={() => { deleteHandler(todo.id) }}> Delete</button>
            {
                // <div>todo count is {count}</div> 
            }
        </div >
    );
}