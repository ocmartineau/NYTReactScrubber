import React from "react";
import "./List.css";
import PropTypes from "prop-types";
import ListItem from "../List/ListItem";

class List extends React.Component {
    render () {
        const { results, handleSaveArticle}  = this.props
        return (
            <div className="list-overflow-container">
                <ul className="list-group">
                    {results.map(result =>
                        <ListItem  key={result.id} data={result} handleSaveArticle={handleSaveArticle} />
                    )}
                </ul>

            </div>
        )
    }
}

List.props = {
    children: PropTypes.node
}

export default List;