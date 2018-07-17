import React from "react";
import "./ResultsBox.css";
import { List, ListItem } from "../../components/List";

class ResultsBox extends React.Component {
    render () {
        const {results, handleSaveArticle}  = this.props
        console.log("in ResultBox" + results)
        return (
            <div>
                <List results={results} handleSaveArticle={handleSaveArticle}/>
            </div>
          );
    }
}

export default ResultsBox;