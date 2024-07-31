import React from "react";

export default function Todo(props) {

    const { deleteHandler, title } = props;

    return (
        <div>
            <span>{title}</span>
            <button onClick={deleteHandler}> Delete</button>
        </div >
    );
}