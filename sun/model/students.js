const mongoose = require('mongoose');
let student = new mongoose.Schema({
    xingming : String,
    xuehao : Number,
    nianling : Number,
    xibie : String,
    ruxueshijian : Number,
    xingbie : String,
    zhuanye : String,
    kemu : Object ,
    mima : String,
    biye : Boolean,
    banji:String
});
// km : [{ 
//     xueqi : Number,
//     xnq : Number,
//     mm : String
// }
// ]

module.exports = mongoose.model('students',student);
