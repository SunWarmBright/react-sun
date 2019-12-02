const mongoose = require('mongoose');
let schema = new mongoose.Schema({
    xm : String,
    gh : Number,
    nl : Number,
    xb : String,
    rzsj : Number,
    xb : String,
    zy : String,
    zw : String
});
module.exports = mongoose.model('teacher', schema);
