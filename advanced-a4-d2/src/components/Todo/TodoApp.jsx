import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import API from "../../API/todoAPI";
import { TodoContext } from "../../context/TodoContext";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Counter from "../Counter/Counter";

export default function TodoApp() {

    const [todos, setTodos] = useState([]);
    const [show, setShow] = useState(true);
    // const [count, setCount] = useState(0);

    // use memo caches the result of the function
    // use callback caches the function itself

    // use reducer is a hook that is used to manage state
    // it uses a pure function to update the state

    // these are async functions

    const countReducer = (state, action) => {
        switch (action.type) {
            case 'add':
                return state + 1;
            case 'minus':
                return state - 1;
            default:
                return state;
        }
    }

    const [count, dispatch] = useReducer(countReducer, 0)

    // this could potentially be a performance issue
    // since it will run on every render
    const evenTodos = todos.filter((todo, index) => {
        //console.log('even todos filter', index);
        return index % 2 === 0;
    })

    // by using useMemo we can prevent the function from running on every render
    // and only run when the dependencies change
    const evenTodosMemo = useMemo(() => {
        return todos.filter((todo, index) => {
            //console.log('memo even todos filter', index);
            return index % 2 === 0;
        })
    }, [todos])

    const addNewTodo = (inputValue) => {

        API.createTodo({ title: inputValue }).then((todo) => {
            console.log(`new todo added:`, todo);
            setTodos([...todos, todo]);
        }).catch((err) => {
            console.log(err);
        })

    }
    const flag = true;

    const deleteHandler = useCallback((todoId) => {

        API.deleteTodo(todoId).then(() => {
            let newTodos = todos.filter((todo, index) => {
                return todo.id !== todoId;
            });
            setTodos(newTodos);
            console.log(`delete button clicked for id: ${todoId}`, todos);
        }).catch((err) => {
            console.log(err);
        })

    }, [todos])

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
                <button onClick={() => { dispatch({ type: 'add' }) }}>Increment</button>
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