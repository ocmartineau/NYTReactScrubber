import axios from "axios";
const API_KEY = process.env.REACT_APP_NYT_API_KEY;

//Exporting the API Request


export default {
    getArticles: (userQuery) => {    
        const { topic, startYear, endYear } = userQuery;
        return (axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=${topic}&begin_date=${startYear}0101&end_date=${endYear}1231&fq=document_type:(article)`));
        console.log(userQuery);
    }


};