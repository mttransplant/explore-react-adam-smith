import React, {Component} from "react"

export default class CourseCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card" styles={{width: '18rem'}}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.text}</p>
                    <a href="#" className="btn btn-primary">More...</a>
                </div>
            </div>
        )
    }
}