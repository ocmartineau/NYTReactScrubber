import React from "react";
import "./ResultsBox.css";
import { List, ListItem } from "../../components/List";

class ResultsBox extends React.Component {
    render () {
        const {results, handleSaveArticle, handleDeleteArticle}  = this.props
        console.log("in ResultBox" + results)
        return (
            <div>
                {handleSaveArticle && <List results={results} handleSaveArticle={handleSaveArticle}/>}
                {handleDeleteArticle && <List results={results} handleDeleteArticle={handleDeleteArticle}/>}
            </div>
          );
    }
}

export default ResultsBox;