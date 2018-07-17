import React from "react";
import "./TitleBox.css";

class TitleBox extends React.Component {
    render () {
        const { title, subtitle } = this.props
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">{title}</h1>
                    <p className="lead">{subtitle}</p>
                </div>
            </div>
        )
    }
}

export default TitleBox;