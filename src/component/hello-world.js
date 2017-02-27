import React, { Component } from 'react';

class HelloWorld extends Component{
    render(){
        var MyTestStyle = {
            color : 'red',
            fontSize : '20px'
        };

        return <h1 style={MyTestStyle}>Hello World!!</h1>
    }
}

module.exports = HelloWorld;