import React from "react"

const ModuleListItem = ({title}) =>
    <li className="list-group-item">
        {title}
        <span className="float-right">
            <i className="fa fa-trash mx-1"></i>
            <i className="fa fa-pencil mx-1"></i>
        </span>
    </li>

export default ModuleListItem