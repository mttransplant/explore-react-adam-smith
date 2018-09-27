import React, {Component} from "react"
import CourseCard from "./CourseCard";
import ModuleList from "./ModuleList";


export default class WhiteBoard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <h1>WhiteBoard</h1>
                <ModuleList/>
                <div className="card-deck">
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
            </div>
        )
    }
}