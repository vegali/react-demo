"use strict";

import React, {Component} from "react";
import ReactDOM from "react-dom";

class LifeCycle extends Component {
    props = {
        value : '开始渲染'
    };

    componentWillReceiveProps(nextProps){
        console.log("组件将要接收属性");
        this.setState = {
            value : nextProps.value
        }
    };

    shouldComponentUpdate(nextProps,nextState){
        console.log('判断是否要渲染');
        return true;
    };


    componentWillUpdate(nextProps,nextState){
        console.log('组件将要更新');
    }

    componentWillMount(){
        console.log('组件将要渲染');
    }

    render(){
        console.log("渲染");
        return <span>{this.props.value}</span>
    }

    componentDidMount(){
        console.log('组件渲染完毕');
    };

    componentDidUpdate(prevProps,prevState) {
        console.log('组件更新完毕');
    };

    componentWillUnmount(prevProps,prevState){
        console.log("组件将要销毁");
    }
}

export default LifeCycle;