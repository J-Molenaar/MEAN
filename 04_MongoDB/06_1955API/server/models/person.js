let mongoose = require('mongoose');

  let Person_Schema = new mongoose.Schema(
    {
      name: { type: String, required: true, minlength: 3 },
    }
  );

  let Person = mongoose.model('Person', Person_Schema);
