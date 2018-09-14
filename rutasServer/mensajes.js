const express = require('express');
const router = express.Router();

const Mensaje = require('../modelsMongoDb/mensaje');

router.get('/mensajes', (req, res) => {
    Mensaje.find({}, (err, msgs) => {
        return res.json(msgs);
    });
});

router.post('/mensajes', (req, res) => {
    delete req.body._id;
    Mensaje.create(req.body, (err, msg) => {
        if (err) res.json(err)
        else return res.json(msg);
    });
    // const io = req.app.get('io');
    // const msg = new Mensaje({
    //     username: req.body.username,
    //     mensaje: req.body.mensaje
    // });
    // msg.save().then(() => {
    //     io.emit('newTaskAdded');
    // });
});

module.exports = router;