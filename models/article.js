const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
    URL: { type: String, required: true },
    snippet: { type: String, required: true },
    author: { type: String, required: true },
});

const Article = mongoose.model("NYTReact", articleSchema);

module.exports = Article;