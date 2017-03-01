"use strict";

import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import HelloWorld from './component/hello-world';
import DestroyComponent from './component/destroy-component';

ReactDom.render(
    <DestroyComponent/>,document.getElementById('app')
);