import React from "react";
import Counter from '../Counter/Counter';
import { useEffect, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import API from '../../API/todoAPI';
import useCounter from "../../hooks/useCounter";

// React.memo is a higher order component (HOC) that will prevent the component from re-rendering
// this is similar to a custom hook
export function TodoApp() {

    const [todos, setTodos] = useState([]);
    const [show, setShow] = useState(true);
    const [count, setCount] = useState(0);

    const addNewTodo = (inputValue) => {

        API.createTodo({ title: inputValue }).then((todo) => {
            console.log(`new todo added:`, todo);
            setTodos([...todos, todo]);
        }).catch((err) => {
            console.log(err);
        })

    }
    const flag = true;

    const deleteHandler = (todoId) => {

        API.deleteTodo(todoId).then(() => {
            let newTodos = todos.filter((todo, index) => {
                return todo.id !== todoId;
            });
            setTodos(newTodos);
            console.log(`delete button clicked for id: ${todoId}`, todos);
        }).catch((err) => {
            console.log(err);
        })

    }

    const editHandler = (todoId) => {

        let newTitle = prompt("Enter new title", "new title");

        if (!newTitle) {
            return
        }

        API.editTodo(todoId, newTitle).then(() => {
            let newTodos = todos.map((todo) => {
                if (todo.id === todoId) {
                    return { ...todo, title: newTitle }
                }
                return todo
            })
            setTodos(newTodos);
            console.log(`edit button clicked for id: ${todoId}`, todos);
        }).catch((err) => {
            console.log(err);
        })

    }

    // fetch todos from the API
    useEffect(() => {
        API.getTodos().then((todos) => {
            console.log(todos);
            setTodos(todos);
        }).catch((err) => {
            console.log(err);
        });
    }, [])

    return (
        <>
            <div>
                <div>Todo Counter {count}</div>
                <button onClick={() => { setCount(count + 1) }}>Increment</button>
                {
                    // any value within the context provider will be available
                    // to all the children of the provider
                }
                <TodoContext.Provider value={[{ id: 1, title: "first todo" }]}>
                    <TodoForm addNewTodo={addNewTodo} />
                    {
                        flag ? todos.map((todo, index) => {
                            // it is bad practice to use index as a key
                            // since the index can change for the item
                            // so it is better to use a unique id
                            return <Todo todo={todo} editHandler={editHandler} deleteHandler={deleteHandler} key={todo.id} />
                        }) : <h1>empty</h1>
                    }
                </TodoContext.Provider>
                <button onClick={() => { setShow(!show) }}>toggle</button>
                {
                    // and operator 
                    show && <Counter />
                }
                {/* <Todo title="first todo" />
        <Todo title="second todo" />
        <Todo title="third todo" /> */}
            </div>
        </>
    );
}

function TodoForm({ addNewTodo }) {

    //const todo = useContext(TodoContext);
    //console.log(todo)
    const [inputValue, setInputValue] = useState("some input");

    const handleInputChange = (e) => {

        console.log(e)

        let target = e.target;
        let value = target.value;

        setInputValue(value)

    }

    return (
        <div>
            <input value={inputValue} onChange={handleInputChange} />
            <button onClick={() => { addNewTodo(inputValue) }}>add todo</button>
        </div>
    );
}

const Todo = React.memo(function Todo(props) {

    const { deleteHandler, editHandler, todo } = props;

    return (
        <div>
            <span>{todo.title}</span>
            <button onClick={() => { editHandler(todo.id) }}>Edit</button>
            <button onClick={() => { deleteHandler(todo.id) }}> Delete</button>
            {
                // <div>todo count is {count}</div> 
            }
        </div >
    );
})
