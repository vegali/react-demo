"use strict";

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import HelloWorld from './component/hello-world';
import DestroyComponent from './component/destroy-component';

ReactDom.render(
    //<HelloWorld/>,document.getElementById('hello-world'),
    <DestroyComponent/>,document.getElementById('life-cycle')
);