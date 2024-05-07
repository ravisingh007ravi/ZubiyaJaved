const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    firstName: { type: String, require: true, trim: true },
    lastName: { type: String, require: true, trim: true },
    emailId: { type: String, require: true, trim: true },
    State: { type: String, require: true, trim: true },
    City: { type: String, require: true, trim: true },
    Gender: { type: String, require: true, trim: true },
    dateofBirth: { type: String, require: true, trim: true },
    age: { type: Number, require: true, trim: true },

},
    { timestamps: true });

module.exports = mongoose.model('userData', userSchema)