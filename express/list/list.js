const express = require('express');

const list = require('./model');

const router = express.Router();

router.get('/list', (req, res, next) => {
    list.find({}, 'task')
    .then(list => {
    res.json({list})
})
.catch(next)
});

router.post('/list', (req, res, next) => {
    new list(req.body.list)
        .save()
        .then(list => {
        console.log(list);
    res.json({list})
})
.catch(next)
});

module.exports = router;
