
// React.memo is a higher order component (HOC) that will prevent the component from re-rendering
// this is similar to a custom hook
export default function Todo(props) {

    const { deleteHandler, editHandler, todo } = props;

    return (
        <div>
            <span>{todo.title}</span>
            <button onClick={() => { editHandler(todo.id) }}>Edit</button>
            <button onClick={() => { deleteHandler(todo.id) }}> Delete</button>
            {
                // <div>todo count is {count}</div> 
            }
        </div >
    );
}
