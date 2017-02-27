"use strict";

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import HelloWorld from './component/hello-world';

ReactDom.render(
    <HelloWorld/>,document.getElementById('app')
);