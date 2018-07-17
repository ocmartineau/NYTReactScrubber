import React from "react";
import API from "../../utils/API";
import Panel from "../../components/Panel";
import { List, ListItem } from "../../components/List";
import TitleBox from "../../components/TitleBox";
import SearchBox from "../../components/SearchBox";
import ResultsBox from "../../components/ResultsBox";
import SavedBox from "../../components/SavedBox";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          topic: "",
          startYear: "",
          endYear: "",
          searchedArticles: [],
          savedArticles: []
        };
    };
    
    handleTopicChange = event => {
      this.setState({ topic: event.target.value });
    };

    handleStartYearChange = event => {
        this.setState({ startYear: event.target.value });
    };

    handleEndYearChange = event => {
        this.setState({ endYear: event.target.value });
    };

    handleSaveArticle = event => {
      API.saveArticle()
        .then
    }

    handleDeleteArticle = event => {
      API.deleteArticle().
      then
    }

    handleFormSubmit = event => {
      event.preventDefault();
      API.getArticles(this.state.topic, this.state.startYear, this.state.endYear)
          .then(res => {
              if(res.status === "error") {
                  throw new Error(res.data.message);
              }
              var apiResults = res.data.response.docs;
              var results = apiResults.map(apiResult => {
                return {
                    id: apiResult._id,
                    title: apiResult.headline.main,
                    url: apiResult.web_url,
                    date:apiResult.pub_date,
                    snippet: apiResult.snippet,
                    author: apiResult.byline.original
                };
              });
              
              this.setState({ searchedArticles: results });
              console.log(this.state.searchedArticles);
          })
          .catch(err => console.log(err));
    };

    render() {
        return (
          <div>
            <TitleBox title="New York Times React Scraper" subtitle="Search your articles and save them." />

            <Panel heading="Article Search">
              <SearchBox 
                topic={this.topic}
                startYear={this.startYear}
                endYear={this.endYear}
                handleFormSubmit={this.handleFormSubmit}
                handleTopicChange = {this.handleTopicChange}
                handleStartYearChange = {this.handleStartYearChange}
                handleEndYearChange = {this.handleEndYearChange} />
            </Panel>  

            <Panel heading="Results">
              <ResultsBox results={this.state.searchedArticles} handleSaveArticle={this.handleSaveArticle}>
                <List/>
              </ResultsBox>
            </Panel>  

            <Panel heading="Saved Articles">
              <SavedBox>
                <List/>
              </SavedBox>
            </Panel>
          </div>
        );
    }
};

export default Search;