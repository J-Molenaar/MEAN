var mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
var Schema = mongoose.Schema;

var itemSchema = new mongoose.Schema({
    question:{
        type: String,
        required: true,
        minlength:2
    },
    opt1:{
        type: String,
        required: true,
        minlength:2
    },
    opt1Votes:{
        type: Number,
    },
    opt2:{
        type: String,
        required: true,
        minlength:2
    },
    opt2Votes:{
        type: Number,
    },
    opt3:{
        type: String,
        required: true,
        minlength:2
    },
    opt3Votes:{
        type: Number,
    },
    opt4:{
        type: String,
        required: true,
        minlength:2
    },
    opt4Votes:{
        type: Number,
    },
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps:true});

var Item = mongoose.model("Item", itemSchema);
