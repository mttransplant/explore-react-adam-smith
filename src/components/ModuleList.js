import React, {Component} from "react"
import ModuleListItem from "./ModuleListItem";

export default class ModuleList extends Component {
    render () {
        return (
            <div>
                <h2>Module List</h2>
                <ul className="list-group">
                    <ModuleListItem title="Week 1"/>
                    <ModuleListItem title="Week 2"/>
                    <ModuleListItem title="Week 3"/>
                    <ModuleListItem title="Week 4"/>
                    <ModuleListItem title="Week 5"/>
                </ul>
            </div>
        )
    }
}