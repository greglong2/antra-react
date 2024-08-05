import { useState } from "react";

export default function TodoForm({ addNewTodo }) {

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
