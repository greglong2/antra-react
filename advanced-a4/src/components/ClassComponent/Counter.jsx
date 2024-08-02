import { PureComponent } from "react";

export default class Counter extends PureComponent {

    // shouldComponentUpdate(nextProps, nextState) {

    //     if (nextProps.count === this.props.count) {
    //         return false;
    //     }
    //     return true;

    // }

    render() {
        return (
            <div>
                <div> Counter: {this.count} </div>
                <button onClick={this.props.addOneToCounter}>Increment</button>
            </div>
        );
    }
}