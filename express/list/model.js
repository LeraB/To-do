const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
    task: String,
    complete: Boolean,
    uncomplete: Boolean
});

module.exports = mongoose.model('list', listSchema);
