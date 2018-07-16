import React from "react";
import PropTypes from 'prop-types';
import "./searchbox.css";
import API from "../../utils/API";

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            topic: "",
            startYear: "",
            endYear: ""
        }
    }
    render () {
        const { topic, startYear, endYear } = this.props;
        
        return (
            <form>
                <div className="form-group">
                    <label>Topic:</label>
                        <input  
                        value={topic}
                        onChange={this.handleTopicChange}
                        name="topic"
                        type="text" 
                        className="form-control"
                        placeholder="Popular searches: Trump, Russia, Tesla, Washington..."
                        id="topic"
                        />
                    
                    <label>Start Year:</label>
                        <input 
                        value={startYear}
                        onChange={this.handleStartYearChange}
                        name="start year"
                        type="text" 
                        className="form-control"
                        placeholder="YYYYMMDD"
                        />
                    
                    <label>End Year:</label>
                        <input 
                        value={endYear}
                        onChange={this.handleEndYearChange}
                        name="end year"
                        type="text" 
                        className="form-control"
                        placeholder="YYYYMMDD"
                        />
                    
                    <button 
                        onClick={this.handleFormSubmit}
                        type="submit" 
                        className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        );
    }

    handleTopicChange = event => {
        this.setState({ topic: event.target.value });
    };

    handleStartYearChange = event => {
        this.setState({ startYear: event.target.value });
    };

    handleEndYearChange = event => {
        this.setState({ endYear: event.target.value });
    };

    handleFormSubmit = event => {
        console.log("it's running");
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
}

SearchBox.props = {
    topic: PropTypes.string,
    startYear: PropTypes.number,
    endYear: PropTypes.number,
    handleInputChange: PropTypes.func,
    handleFormSubmit: PropTypes.func,
}

export default SearchBox;