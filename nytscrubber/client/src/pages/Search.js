import React from "react";
import API from "../util/API";
import SearchBox from "../components/searchbox";

class topic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: "Tesla",
            startYear: "2017",
            endYear: "2018",
            results: []
        };
    }

    handleInputChange = event => {
        this.setState({ topic: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getArticles(this.state.topic, this.state.startYear, this.state.endYear)
            .then(res => {
                if(res.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.response.docs });
                console.log(this.state.results);
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <SearchBox 
                    handleFormSubmit={this.handleFormSubmit}
                    startYear={this.state.startYear}
                    endYear={this.state.endYear}
                    topic={this.state.topic}
                    handleInputChange={this.handleInputChange}
                />
            </div>
        )
    }
}