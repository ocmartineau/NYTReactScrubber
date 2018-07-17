import React from "react";
import PropTypes from "prop-types";
import SaveButton from "../buttons/button";
import DeleteButton from "../buttons/button";

class ListItem extends React.Component {
    render () {
        const {data, handleSaveArticle} = this.props
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-md-11">
                    <a href={data.url} target="_blank"><h4>{data.title}</h4></a>
                    <h5>{data.author}</h5>
                    <div>{data.date}</div>
                    <p>{data.snippet}</p>
                    <SaveButton/>
                    <DeleteButton/>
                    </div>
                </div>
            </li>
        )
    }
}




ListItem.props = {
    children: PropTypes.node
}

export default ListItem;