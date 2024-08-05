import './App.css';
import { useState } from 'react';
import TodoApp from './components/Todo/TodoApp';
import ClassComponent from './components/ClassComponent/ClassComponent';
// import TodoApp from './components/ClassComponent/TodoApp';

export default function App() {

  const [show, setShow] = useState(false);

  return (
    <div>
      {show ? <ClassComponent /> : <></>}
      <button onClick={() => setShow(!show)}>Toggle</button>
      {
        // <TodoApp />
      }
      <TodoApp />

    </div>
  )
}
