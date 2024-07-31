import React, { useState } from "react";

// if a parent gets rendered, the child gets rendered as well
// if the props change, the component gets re-rendered
// if the state changes, the component gets re-rendered

export default function Counter(props) {

    // let count = 0;

    let [count, setCount] = useState(0);

    function addOne() {
        setCount((prev) => {
            return prev + 1;
        });
        console.log(count);
    }

    return (
        <div>
            <div>Counter: {count}</div>
            <button onClick={addOne}>Add one</button>
        </div>
    )
}