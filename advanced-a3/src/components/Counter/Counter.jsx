import React, { useState, useEffect, useRef } from "react";
import useCounter from "../../hooks/useCounter";

// if a parent gets rendered, the child gets rendered as well
// if the props change, the component gets re-rendered
// if the state changes, the component gets re-rendered

export default function Counter(props) {

    // let count = 0;
    const [count, setCount] = useCounter(1);

    function addOne() {

        countRef.current += 1
        setCount((prev) => {
            return prev + 1;
        });
        console.log('addOne', count);
        console.log('addOne cr', countRef.current);
    }

    // useRef is used to store a value that persists
    // between renders. It does not cause a re-render
    const countRef = useRef(0);

    // empty dependency array means that the 
    // useEffect will only run once when the 
    // component is mounted or updated

    // no dependency array means that the
    // useEffect will run every time the component
    // is mounted

    // non empty is triggered when the value in the
    // dependency array changes
    // useEffect(() => {
    //     console.log("useEffect called");
    //     console.log('useEffect', count)
    // }, [count])



    // useEffect(() => {
    //     // since this is empty, it is good for fetching data
    //     // from an API because it only runs once
    //     setInterval(() => {
    //         console.log(count)
    //     }, 1000)
    // }, [])

    // side effects are things that happen outside of the component
    // for example, fetching data from an API. This is where
    // useEffect comes in.

    // pure logic is things that happen inside the component
    // aka no side effects. The same input will always return
    // the same output
    return (
        <div>
            <div>Counter: {count}</div>
            <button onClick={addOne}>Add one</button>
        </div>
    )
}