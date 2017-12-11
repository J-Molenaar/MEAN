
const mongoose = require('mongoose');

var user_Schema = new mongoose.Schema({
    first: { type: String, required: true, minlength: 1},
    last: { type: String, required: true, minlength: 1},
    email: {type: String, required: true, minlength: 1},
    password: { type: String, required: true, minlength: 1},

},
    { timestamps: true });

//custom methods, pre, post etc. here

const User = mongoose.model('User', user_Schema );
