import React from 'react';
import ReactDom from 'react-dom';
import HelloWorld from './components/HelloWorld'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/font-awesome/css/font-awesome.css"
import WhiteBoard from "./components/WhiteBoard"


ReactDom.render(
    <div className="container-fluid">
        <WhiteBoard/>
    </div>,
    document.getElementById('root')
)