import { Component } from "react";
import API from '../../API/todoAPI';
import { TodoContext } from "../../context/TodoContext";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Counter from "../Counter/Counter";

export default class TodoApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            show: true,
            count: 0,
            flag: true
        }
    }

    addNewTodo = (inputValue) => {

        API.createTodo({ title: inputValue }).then((todo) => {
            console.log(`new todo added:`, todo);
            this.setState({ todos: [...this.state.todos, todo] });
        }).catch((err) => {
            console.log(err);
        })

    }

    deleteHandler = (todoId) => {

        API.deleteTodo(todoId).then(() => {
            let newTodos = this.state.todos.filter((todo, index) => {
                return todo.id !== todoId;
            });
            this.setState({ todos: newTodos });
            console.log(`delete button clicked for id: ${todoId}`, this.state.todos);
        }).catch((err) => {
            console.log(err);
        })

    }

    editHandler = (todoId) => {

        let newTitle = prompt("Enter new title", "new title");

        if (!newTitle) {
            return
        }

        API.editTodo(todoId, newTitle).then(() => {
            let newTodos = this.state.todos.map((todo) => {
                if (todo.id === todoId) {
                    return { ...todo, title: newTitle }
                }
                return todo
            })
            this.setState({ todos: newTodos });
            console.log(`edit button clicked for id: ${todoId}`, this.state.todos);
        }).catch((err) => {
            console.log(err);
        })

    }

    componentDidMount() {
        API.getTodos().then((todos) => {
            console.log(todos);
            this.setState({ todos: todos });
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <>
                <div>
                    <div>Todo Counter {this.state.count}</div>
                    <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Increment</button>
                    {
                        // any value within the context provider will be available
                        // to all the children of the provider
                    }
                    <TodoContext.Provider value={[{ id: 1, title: "first todo" }]}>
                        <TodoForm addNewTodo={this.addNewTodo} />
                        {
                            this.state.flag ? this.state.todos.map((todo, index) => {
                                // it is bad practice to use index as a key
                                // since the index can change for the item
                                // so it is better to use a unique id
                                return <Todo todo={todo} editHandler={this.editHandler} deleteHandler={this.deleteHandler} key={todo.id} />
                            }) : <h1>empty</h1>
                        }
                    </TodoContext.Provider>
                    <button onClick={() => { this.setState({ show: !this.state.show }) }}>toggle</button>
                    {
                        // and operator 
                        this.state.show && <Counter />
                    }
                    {/* <Todo title="first todo" />
        <Todo title="second todo" />
        <Todo title="third todo" /> */}
                </div>
            </>
        );
    }

}