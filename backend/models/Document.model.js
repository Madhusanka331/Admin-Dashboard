const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const DocumentSchema = new Schema({
    File: { type: String, required: true }
    

}, {
    timestamps: true,
});



const Document = mongoose.model('Document', DocumentSchema);

module.exports = Document;