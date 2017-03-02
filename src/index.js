"use strict";

import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import HelloWorld from './component/hello-world';
// import DestroyComponent from './component/destroy-component';
// import RefDemo from './component/ref-demo'
import EventDemo from './component/event-demo'

ReactDom.render(
    //<HelloWorld/>,document.getElementById('hello-world'),
    // <DestroyComponent/>,document.getElementById('life-cycle')
    //<RefDemo/>,document.getElementById('ref-demo')
    <EventDemo/>,document.getElementById('event-demo')
);