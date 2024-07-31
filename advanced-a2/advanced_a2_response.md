## What is useState?

> useState is a method that allows you to add state to a functional component. It returns an array with two elements: the current state value and a function that lets you update it. The state of the contained component is preserved between re-renders.

## What is props drilling and state lifting?

> Prop drilling is the process of passing props from a parent component to a child component, and then to another child coponent, and another, so on. Prop drilling can lead to complex and hard-to-maintain code.
>
> State lifting is the inverse process of prop drilling, where the state is lifted from a child component to a parent component. This is not a recommended practice, as it can also lead to complex and hard-to-maintain code.

## What is the 'key' attribute used for in React?

> The key attribute is used as a unique identifier for each child component in a list. It helps React identify which items have changed, are added, or are removed when re-rendering a list of components.

## What is a synthetic event?

> A synthetic event is a cross-browser wrapper around the native browser event. It has the same interface as the native event, including `stopPropagation()` and `preventDefault()`, but it works identically across different browsers. It also utilizes event pooling to improve performance.

## what is a virtual dom?

> The virtual DOM is a copy of the actual DOM that is kept in memory. When a change is made to the virtual DOM, React creates a new virtual DOM and compares it with the previous one to determine the minimum number of changes needed to update the actual DOM. It also allows React to batch updates to the actual DOM, improving performance.