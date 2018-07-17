import axios from "axios";
const API_KEY = "9bf9fedadaa6406e99720bf2fe086ace"
console.log(API_KEY)
//Exporting the API Request


export default {
    getArticles: (topic, startYear, endYear) => {    
        console.log(topic,startYear, endYear);
        
        return (axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=${topic}&begin_date=${startYear}0101&end_date=${endYear}1231&fq=document_type:(article)`));
                
    },
    
    saveArticle: function(articleData) {
        return axios.post("/api/articles", articleData);
    },
    
    
    getSavedArticles: function() {
        return axios.get("/api/articles");
    },
    
    deleteArticle: function(id) {
        return axios.delete("api/articles/" + id);
    }
};
