import React from "react";
import "./button.css";


handleArticleSave = event => {
    event.preventDefault();
    const clickedArticle = (this.state.results.filter(element => element._id === event.target.id)[0]);//Locates the article from the results array with the ID matching the button clicked

    API.saveArticle(clickedArticle).then(res => {
        this.getSaved(); 
        this.savedTop.scrollIntoView({ behavior: "smooth", block: "center"}); //Scolls down to the savedTop reference in the Saved panel

    })
};

handleArticleDelete = (event) => {
    event.preventDefault();
    const clickedArticle = this.state.savedArticles.filter(element => element._id = event.target.id)[0]; //Locates the article from the savedArticle array with the ID matching the button clicked
    API.deleteArticle(clickedArticle).then(response => {
        this.getSaved(); 
    })
};

const SaveButton = props => {
    return (
        <button type="button" {...props}>
            {props.children}
            onClick={this.handleArticleSave}
            Save Article
        </button>
    )
}

const DeleteButton = props => {
    return (
        <button type="button" {...props}>
            {props.children}
            onClick={this.handleArticleDelete}
            Delete Article
        </button>
    )
}

export {
    SaveButton,
    DeleteButton
}