import React, {Component} from "react"
import CourseCard from "./CourseCard";
import ModuleList from "./ModuleList";
import CourseGrid from "./CourseGrid";
import CourseTable from "./CourseTable";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

export default class WhiteBoard extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return(
            <div>
                <h1>WhiteBoard ({this.props.courses.length})</h1>
                <Router>
                    <div>
                        <Link to="/course/table">Table</Link>
                        <Link to="/course/grid">Grid</Link>
                        {/*<Route path="/course/table"*/}
                               {/*component={CourseTable}/>*/}
                        {/*<Route path="/course/grid"*/}
                               {/*component={CourseGrid}/>*/}
                        <Route path="/course/table"
                               render={() => <CourseTable courses={this.props.courses}/>}/>
                        <Route path="/course/grid"
                               render={() => <CourseGrid courses={this.props.courses}/>}/>
                    </div>
                </Router>

                {/*<ModuleList/>*/}
                {/*<div className="card-deck">*/}
                    {/*{*/}
                        {/*this.props.courses.map((course, index) => (*/}
                            {/*<CourseCard*/}
                                {/*key={index}*/}
                                {/*title={course.title}*/}
                                {/*text={course.text}/>*/}
                        {/*))*/}
                    {/*}*/}
                {/*</div>*/}

            </div>
        )
    }
}