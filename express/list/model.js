const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    task: String,
    date: String,
    url: String
});

module.exports = mongoose.model('list', listSchema);
