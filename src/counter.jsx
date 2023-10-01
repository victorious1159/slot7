import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increment() {
        this.setState({count: this.state.count + 1});
    }

    decrease() {
        this.setState({count: this.state.count - 1});
    }

    render() {
        return(
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrease}>Decrease</button>
            </div>
        );
    }
}

export default Counter;