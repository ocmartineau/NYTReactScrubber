import React from "react";
import "./list.css";
import PropTypes from "prop-types";
import ListItem from "../list/listItem";

class List extends React.Component {
    render () {
        return (
            <div className="list-overflow-container">
                
                <ul className="list-group">
                    {this.props.children}
                    <ListItem/>
                </ul>

            </div>
        )
    }
}

List.props = {
    children: PropTypes.node
}

export default List;