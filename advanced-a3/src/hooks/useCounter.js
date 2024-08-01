import React, { useState, useEffect, useRef } from "react";

export default function useCounter(initialValue = 0) {

    let [count, setCount] = useState(initialValue);

    const intervalRef = useRef(null);

    useEffect(() => {
        // every time this component is rendered, this will run
        // each time count increases, it will run a
        // new interval
        // let interval = setInterval(() => {
        //     console.log(count)
        // }, 1000)

        intervalRef.current = setInterval(() => {
            console.log(count)
        }, 1000)

        // this is a cleanup function
        // it will run when the component is unmounted
        // or when the dependency array changes (in this case, count)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [count])

    return [count, setCount];
}