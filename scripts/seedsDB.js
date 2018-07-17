const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/NYTREACT',
    {
        useMongoClient: true
    }
);

const articleSeed = [
    {
        title: 'Test Article 1',
        date: '7/15/2018',
        url: 'www.test1.com',
        snippet: 'This is the snippet for Test Article 1.',
        author: 'Test Author 1'
    },
    {
        title: 'Test Article 2',
        date: '7/7/2017',
        url: 'www.google.com',
        snippet: 'This is the snippet for Test Article 2.',
        author: 'Test Author 2'
    },
    {
        title: 'Test Article 3',
        date: '1/1/2028',
        url: 'www.test3.com',
        snippet: 'This is the snippet for Test Article 3.',
        author: 'Test Author 3'
    }
];

db.Article
    .remove({})
    .then(() => db.Article.collection.insertMany(articleSeed))
    .then(data => {
        console.log(data.insertedIds.length + ' records inserted!');
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });