import React from "react";
import PropTypes from 'prop-types';
import "./searchbox.css";

class SearchBox extends React.Component {
    render () {
        const { topic, startYear, endYear, handleInputChange, handleFormSubmit } = this.props;
        
        return (
            <form>
                <div className="form-group">
                    <label>Topic:</label>
                        <input  
                        value={topic}
                        onChange={handleInputChange}
                        name="topic"
                        type="text" 
                        className="form-control"
                        placeholder="Popular searches: Trump, Russia, Tesla, Washington..."
                        id="topic"
                        />
                    
                    <label>Start Year:</label>
                        <input 
                        value={startYear}
                        onChange={handleInputChange}
                        name="start year"
                        type="text" 
                        className="form-control"
                        placeholder="YYYYMMDD"
                        />
                    
                    <label>End Year:</label>
                        <input 
                        value={endYear}
                        onChange={handleInputChange}
                        name="end year"
                        type="text" 
                        className="form-control"
                        placeholder="YYYYMMDD"
                        />
                    
                    <button 
                        onClick={handleFormSubmit}
                        type="submit" 
                        className="btn btn-primary">
                        Submit
                        
                    </button>
                </div>
            </form>
        );
    }
}

SearchBox.props = {
    topic: PropTypes.string,
    startYear: PropTypes.number,
    endYear: PropTypes.number,
    handleInputChange: PropTypes.func,
    handleFormSubmit: PropTypes.func,
}

export default SearchBox;