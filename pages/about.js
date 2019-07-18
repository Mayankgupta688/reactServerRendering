import React from "react";
import Router from 'next/router';

class AboutComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        } 
    }

    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div style={{"color": "red", "paddingLeft": "15px"}}>
                <h1>The Counter Value is: {this.state.counter}</h1>
                <input type="button" onClick={this.incrementCounter} value="Click to Add Counter" /><br></br><br></br>
                <span onClick={() => Router.push('/')} >Click To Redirect to Home</span>
            </div>
        )
    }
}

export default AboutComponent;