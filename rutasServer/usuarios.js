const express = require('express');
const router = express.Router();

const User = require('../modelsMongoDb/usuario');

router.get('/usuarios', (req, res) => {
    User.find({}, (err, users) => {
        return res.json(users);
    });
});

router.post('/usuarios', (req, res) => {
    delete req.body._id;
    User.create(req.body, (err, user) => {
        if (err) {
            res.json(err)
        }
        else return res.json(user);
    });
});

router.delete('/usuarios/:id', (req, res) => {
    User.deleteOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.json(err)
        } else {
            res.json(true)
        }
    });
});

router.put('/usuarios/:id', (req, res) => {
    User.update({ _id: req.params.id }, req.body, (err, user) => {
        if (err) {
            res.json(err)
        } else {
            res.json(true)
        }
    });
});

module.exports = router;