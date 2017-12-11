const mongoose = require('mongoose');
var Cats_Schema = new mongoose.Schema({
    cat_name: { type: String, required: true, minlength: 1},
    lives: { type: Number,	required: true, minlength: 1},
    superpower: {type: String, required: true, minlength: 1},
    picture: { type: String, required: true, minlength: 1}
});
const Cat = mongoose.model('Cat', Cats_Schema);       // We are setting this Schema in our Models as 'Cat'
