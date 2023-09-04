import React, { Component } from 'react';

class Count extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    handlechange() {
        this.setState({ count: this.state.count + 1 }, () => {
            console.log(this.state.count); 
        });
    }

    render() {
        return (
            <div>
                Count - {this.state.count}
                <button onClick={() => this.handlechange()}>Increment</button>
            </div>
        );
    }
}

export default Count;
