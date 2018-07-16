import React from "react";
import "./button.css";
import API from '../../utils/API';

class SaveButton extends React.Component {
    render () {
        return (
            <button type="button">
                {props.children}
                {/* onClick={this.handleArticleSave} */}
                Save Article
            </button>
        )
    }
}



class DeleteButton extends React.Component {
    render () {
        return (
            <button type="button">
                {props.children}
                {/* onClick={this.handleArticleDelete} */}
                Delete Article
            </button>
        )
    }
}



export default {
    SaveButton,
    DeleteButton
}