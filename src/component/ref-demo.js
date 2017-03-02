import React, {Component} from 'react';
import { findDOMNode } from 'react-dom';

class Refs extends Component{
    state = {
        red : 0,
        green : 0,
        pink : 0
    };

    update = (e)=>{
        this.setState({
            red : findDOMNode(this.refs.red).value,
            green : findDOMNode(this.refs.green).value,
            pink : findDOMNode(this.refs.pink).value
        });
        findDOMNode(this.refs.color).style.backgroundColor = `rgb(${this.state.red},${this.state.green},${this.state.pink})`;
    };

    render(){
        let Styles = {width:'100px',height:'100px',backgroundColor:'#eee'};
        return (
            <div>
                <Slider ref="red" update={this.update}>{this.state.red}</Slider>
                <Slider ref="green" update={this.update}>{this.state.green}</Slider>
                <Slider ref="pink" update={this.update}>{this.state.pink}</Slider>
                <div ref="color" style={Styles}></div>
            </div>
        )
    }
}

class Slider extends Component{
    render(){
        return(
            <input type="range"
                min="0"
                max="255"
                onChange={this.props.update}
            />
        )
    }
}

export default Refs;