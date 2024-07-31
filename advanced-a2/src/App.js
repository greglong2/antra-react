import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo/Todo';
import Counter from './components/Counter/Counter';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([]);

  const addNewTodo = (inputValue) => {
    setTodos([...todos, { title: inputValue }]);
  }

  const flag = true;

  const deleteHandler = (todoIndex) => {
    let newTodos = todos.filter((todo, index) => {
      return index !== todoIndex;
    });
    setTodos(newTodos);
    console.log("delete button clicked");
  }

  return (
    <>
      <div>
        <TodoForm addNewTodo={addNewTodo} />
        {
          flag ? todos.map((todo, index) => {
            // it is bad practice to use index as a key
            // since the index can change for the item
            // so it is better to use a unique id
            return <Todo title={todo.title} deleteHandler={() => { deleteHandler(index) }} key={index} />
          }) : <h1>empty</h1>
        }
        <Counter />
        {/* <Todo title="first todo" />
        <Todo title="second todo" />
        <Todo title="third todo" /> */}
      </div>
    </>
  );
}

function TodoForm({ addNewTodo }) {

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

export default App;
