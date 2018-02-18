const express = require('express');

const list = require('./model');

const router = express.Router();

router.get('/list', (req, res, next) => {
    list.find({})
    .then(list => {
    res.json({list})
})
.catch(next)
});

router.put('/list/:id', function (req, res) {
    list.findOneAndUpdate({ "_id": req.params.id}, {
        task: req.body.list.task,
        date: req.body.list.date,
        url: req.body.list.url
    }, { new: true }, function (err, doc) {
        if (err) {
            res.status(400).json(err)
        }
        res.status(200).json(doc)
    })
})

router.delete('/list/:id', function (req, res) {
    let id = req.params.id
    list.remove({
        _id: id
    }, function () {
        res.json()
    })
})

module.exports = router;
