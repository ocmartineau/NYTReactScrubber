import axios from "axios";
const API_KEY = "9bf9fedadaa6406e99720bf2fe086ace"
console.log(API_KEY)
//Exporting the API Request


export default {
    getArticles: (topic, startYear, endYear) => {    
        console.log(topic,startYear, endYear);
        
        return (axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=${topic}&begin_date=${startYear}0101&end_date=${endYear}1231&fq=document_type:(article)`));
                
    },
    

    // saveArticle: (data) => {
    //     console.log("Saving ${articleData}...");
    //     const articleData = {
    //         title: data.headline.main,
    //         author: data.byline.original,
    //         date: data.pub_date,
    //         snippet: data.snippet,
    //         URL: data.web_url
    //     };
    //     return (axios.post("api/article", articleData))
    // }


};
