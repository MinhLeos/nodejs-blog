const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/blog_education_dev')
        console.log('connect success')
    } catch (error) {
        console.log('error connecting', error);
    }
}

module.exports = { connect }

/* 
, {
            useNewUrlParser: true,
            useUnifieldTopology: true
        }
*/