	const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema ({
    name: { type: String },
    decription: { type: String, maxlength: 600 },
    img: { type: String },
    createAt: { type: Date , default: Date.now },
    updateAt: { type: Date , default: Date.now },
})

module.exports = mongoose.model('Course', Course);
