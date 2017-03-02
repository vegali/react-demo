import React, {Component} from 'react';
import { findDOMNode } from 'react-dom';

class Refs extends Component{
    state = {
        red : 0,
        green : 0,
        blue : 0
    };

    update = (e)=>{
        this.setState({
            red : findDOMNode(this.refs.red).value,
            green : findDOMNode(this.refs.green).value,
            blue : findDOMNode(this.refs.blue).value
        });
        findDOMNode(this.refs.color).style.backgroundColor = `rgb(${this.state.red},${this.state.green},${this.state.blue})`;
    };

    render(){
        let Styles = {width:'100px',height:'100px',backgroundColor:'#eee'};
        return (
            <div>
                <Slider ref="red" update={this.update} value={this.state.red} />{this.state.red}<br />
                <Slider ref="green" update={this.update} value={this.state.green} />{this.state.green}<br />
                <Slider ref="blue" update={this.update} value={this.state.blue} />{this.state.blue}<br />
                <div ref="color" style={Styles}></div>
            </div>
        )
    }
}

class Slider extends Component{
    render(){
        return(
            <input type="range"
                defaultValue = {this.props.value}
                min="0"
                max="255"
                onChange={this.props.update}
            />
        )
    }
}

export default Refs;