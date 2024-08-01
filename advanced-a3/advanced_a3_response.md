## What is useEffect?

>`useEffect` is a method that allows you to make side effects in components. It is called when the component is rendered and potentially after every update. 
>
> If a dependency array is provided, `useEffect` will only be called when the dependencies change. If no dependency array is provided, `useEffect` will be called after every render or mount.

## What are the different behaviors of useEffect?

> `useEffect` with a dependency array will be called every time the dependency changes and initally on mount. If the dependency array is empty, `useEffect` will be called after every render or mount.

## What is a dependency array?

> A dependency array is an array of values that `useEffect` will watch for changes. If any of the values in the dependency array change, `useEffect` will be called.

## What is useRef and when do you want to use it?

> `useRef` is a hook that allows you to create a mutable object that persists between renders. You would use `useRef` when you need to store a value that persists between renders but does not cause a re-render when it changes.

## How do you reuse hook logic in React?

> You can reuse hook logic by creating a custom hook containing the logic you want to reuse. You can then call this custom hook in any component that needs the logic. Each component that uses the custom hook will have its own instance of the hook.