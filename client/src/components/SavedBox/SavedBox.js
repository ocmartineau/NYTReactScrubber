import React from "react";
import API from "../../utils/API";

class SavedBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          articles: []
        };
    }

    componentDidMount() {
        this.getSaved();
    }
    
    getSaved = () => {
        API.getArticles()
          .then(res =>
            this.setState({
              articles: res.data
            })
          )
          .catch(err => console.log(err));
    };

    deleteArticle = id => {
        API.deleteArticle(id)
          .then((res => this.getSaved()))
          .catch(err => console.log(err));
    };

    
    render() {
        return "";
    }
}

export default SavedBox;