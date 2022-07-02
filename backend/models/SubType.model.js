const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const SubTypeSchema = new Schema({
    Type: { type: String, required: true },
    

}, {
    timestamps: true,
});



const SubType = mongoose.model('SubType', SubTypeSchema);

module.exports = SubType;