const mongoose = require('mongoose');

const connectToDB = (mongodb_uri) => {
    mongoose.connect(mongodb_uri);
}

module.exports = connectToDB;