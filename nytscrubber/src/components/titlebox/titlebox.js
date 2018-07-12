import React from "react";
import "./titlebox.css";

class TitleBox extends React.Component {
    render () {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">New York Times React Scraper</h1>
                    <p className="lead">Search your articles and save them.</p>
                </div>
            </div>
        )
    }
}

export default TitleBox;