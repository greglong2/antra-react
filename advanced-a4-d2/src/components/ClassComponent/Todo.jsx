import { Component } from "react";

export default class Todo extends Component {

    render() {
        return (
            <div>
                <span>{this.props.todo.title}</span>
                <button onClick={() => { this.props.editHandler(this.props.todo.id) }}>Edit</button>
                <button onClick={() => { this.props.deleteHandler(this.props.todo.id) }}> Delete</button>
                {
                    // <div>todo count is {count}</div> 
                }
            </div >
        );
    }


}