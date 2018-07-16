import React from "react";
import PropTypes from "prop-types";
import SaveButton from "../buttons/button";
import DeleteButton from "../buttons/button";

class ListItem extends React.Component {
    render () {
        const {nytData} = this.props
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-md-11">
                    <h4>{nytData.headline.main}</h4>
                    <h5>{nytData.byline.original}</h5>
                    <a href={nytData.web_url}>{nytData.web_url}</a>
                    <div>{nytData.pub_date}</div>
                    <p>{nytData.snippet}</p>
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