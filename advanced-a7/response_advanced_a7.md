## What is FLUX?

> Flux is an application architecture utilizing a unidirectional data flow and can utilize multiple states. The dispatcher manages the data flow to the stores (and subsequent views) of the application. It is used to manage the state of the application and to handle the data flow between components.
>
> Using FLUX, the data flow looks like this: `View -> Action -> Dispatcher -> Store -> View`. While in React using Redux the data flow looks like this: `Action -> Reducer -> Store -> View`.

## What is Redux?

> Redux is a library for managing global state for JavaScript applications. Although it is commonly used with React, it can be used with any JavaScript framework. 

## How do you use it with React components?

> First, you need to create a store that holds the state of the application. Then, you will need to create actions that describe the changes to the state and reducers that specify how the state changes in response to actions. Finally, you will need to connect the component to the store using the `connect` function from `react-redux`.

## What is a reducer?

> A reducer is a `pure` fuction that takes the current state and an action as arguments, parses and executes the action, and returns the new state. It is used to specify how the state changes in response to actions.

## How do you choose between ContextAPI and Redux for state management?

> ContextAPI is a built-in feature of React. It can be simpler to use than Redux and scales well for smaller applications or applications that don't utilize many state changes.
> 
> Redux can be powerful for handling complex state management and is more suitable for larger applications with a lot of state changes due to supporting middleware and holding a single source for state.

## What is redux thunk and why would you use it?

> A Redux thunk is a middleware that enables the writing of action creators. These creators can return a function instead of an action object. It can be useful for handling asynchronous actions, such as fetching data from an API.

```js
const fetchTodo = () => {
    return async (dispatch) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const todo = await response.json();
        // Dispatch action with fetched data
        dispatch({ type: 'FETCH_TODO', payload: todo });
    }};
```

> In this example, `fetchTodo` is a thunk action creator that fetches a todo item from an API and dispatches an action with the fetched data.
>
> It can be used like this:

```js
useEffect(() => {
    // update the state with the fetched data
    // when the component mounts
    dispatch(fetchTodo());
}, []);

// do something after the data is fetched
```
