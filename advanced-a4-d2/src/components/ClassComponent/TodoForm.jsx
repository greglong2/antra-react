import { Component } from "react";

export default class TodoForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: 'some input'
        }
    }

    handleInputChange = (e) => {

        console.log(e)

        let target = e.target;
        let value = target.value;

        this.setState({ inputValue: value })

    }

    render() {
        console.log(this.props)
        return (
            <div>
                <input value={this.state.inputValue} onChange={this.handleInputChange} />
                <button onClick={() => { this.props.addNewTodo(this.state.inputValue) }}>add todo</button>
            </div>
        );
    }

}