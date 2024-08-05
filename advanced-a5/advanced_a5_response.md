## How do you decide when to split a component into subcomponents?

> When a component becomes too complex or too large to manage, I would consider splitting it into subcompnents. This is because it is easier to manage smaller components and it makes the code more readable and maintainable.

## What is the difference between state and props?

> State is mutable and managed by the component itself, while props are immutable and managed by the parent component.

## How to trigger rerender in a component?

> You can trigger a render by changing the state of the component using `setState` or by passing new props to the component.

## Why do you like react over other front-end libraries and frameworks?

> I like React because of how it allows you to build reusable components and manage the state of the application. It is pretty mature for a framework and has a large community which makes it easy to find solutions to problems.

## What’s the difference between controlled components and uncontrolled components?

> Controlled components are components where the value is controlled by React state, while uncontrolled components are components where the value is controlled by the DOM itself.

## How to prevent components from unnecessary rerendering?

> You can prevent components from unnecessary rerendering by using `React.memo` or `PureComponent` to memoize the component and only rerender when the props or state change.

## Why are props needed to be immutable?

> Props need to be immutable because React uses props to determine when to rerender a component. If props are mutable, React may not be able to detect changes and rerender the component when necessary.

## Explain the Virtual DOM and how React uses it to improve performance.

> The virtual DOM is a copy of the actual DOM that is kept in memory. When a change is made to the virtual DOM, React creates a new virtual DOM and compares it with the previous one to determine the minimum number of changes needed to update the actual DOM. It also allows React to batch updates to the actual DOM, improving performance.

## Can you explain the useMemo and useCallback hooks and provide examples of when you might use them?

> `useMemo` is used to memoize the result of a function so that it is only recalculated when the dependencies change. This is useful when you have a computationally expensive function that you want to cache the result of.

## Explain the concept of Higher-Order Components (HOCs) and provide an example use case.

> Higher-Order Components are functions that take a component and return a new component with additional functionality. They are used to share logic between components. For example, you can create a HOC that adds authentication to a component.

## Discuss the differences between React's class components and functional components. Which one do you prefer and why?

> Class components are ES6 classes that can have state and lifecycle methods, such as `componentDidMount`. It requires the use of `this` keyword to access props and state.
>
> Functional components are functions that take in props and return JSX. They do not have state or lifecycle methods. They instead use hooks to manage state and lifecycle.


## How do you ensure your code is maintainable and scalable?

> You can ensure your code is maintainable and scalable by writing clean and modular code, following design patterns, and using the current best practices. Testing your code also helps with maintainability.