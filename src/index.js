"use strict";

import React, { Component } from 'react';
import ReactDom from 'react-dom';
let MyComponentStyles = {
    color : 'blue',
    fontSize : '50px'
};

ReactDom.render(
    <h1 style = {MyComponentStyles}>Hello World</h1>,document.getElementById('app')
);