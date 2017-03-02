import React, { Component } from 'react';

class EventDemo extends Component{
    state = {
        liked : true
    };

    update = () => {
        this.setState({
            liked : !this.state.liked
        })
    };

    render(){
        let text = this.state.liked ? '喜欢' : '不喜欢'
        return(
            <div onClick={this.update}>你 {text} 我</div>
        );
    }
}

export default EventDemo;