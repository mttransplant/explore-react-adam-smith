import React from 'react';
import ReactDom from 'react-dom';
import HelloWorld from './components/HelloWorld'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/font-awesome/css/font-awesome.css"
import WhiteBoard from "./components/WhiteBoard"

const courses=[
    {
        title: "CS5200",
        text: "CS5200 Course Text"
    },
    {
        title: "CS5610",
        text: "CS5610 Course Text"
    }
]

ReactDom.render(
    <div className="container-fluid">
        <WhiteBoard courses={courses}/>
    </div>,
    document.getElementById('root')
)