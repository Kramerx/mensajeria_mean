const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MsgSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    mensaje: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Mensaje', MsgSchema);