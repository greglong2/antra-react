import React, { Component, createRef } from "react";
import Counter from "./Counter";

export default class ClassComponent extends Component {

    constructor(props) {
        // pass props to Component constructor
        super(props);

        //useState()
        this.state = {
            value1: 0,
            value2: 1,
            count: [0, 0, 0],
            intervalId: null
        };
    }

    addOneToCounter = (index) => {
        this.setState(() => {
            count: this.state.count.map((counter, i) => {
                if (index === i) {
                    return counter + 1;
                }
                else return counter;
            })
        });
    }

    intervalId = createRef(null)

    handleAddOne = () => {
        this.setState({ value1: this.state.value1 + 1 })
    }


    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Class Component</h1>
                <button onClick={this.handleAddOne}>Add One</button>
                {
                    this.state.count.map((counter, index) => {
                        return <Counter count={counter} index={index} addOneToCounter={() => this.addOneToCounter(counter)} />
                    })
                }
            </div>
        );
    }

    componentDidMount() {
        console.log("componentDidMount")
        // this.intervalId.current = setInterval(() => {
        //     console.log(1)
        // }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.value1 !== this.state.value1) {
            console.log("component updated value1")
        }
        if (prevState.value2 !== this.state.value2) {
            console.log("component updated value2")
        }
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        // clearInterval(this.intervalId.current);
        console.log("componentWillUnmount")
    }

    // immutability makes it easier for react to
    // detect changes in components.
    // when updating the state, we create
    // a new object with the updated values
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate")

        if (nextProps.todo === this.props.todo) { }
        return true;
    }

}