import React, { Component } from 'react';

class HelloWorld extends Component{
    state = {
        text : 'Hello World'
    };

    render(){
        var MyTestStyle = {
            color : 'red',
            fontSize : '20px'
        };

        return <h1 style={MyTestStyle}>{this.state.text}</h1>
    }
}

export default HelloWorld;