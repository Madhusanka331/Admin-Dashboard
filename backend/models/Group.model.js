const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const GroupSchema = new Schema({
    GID: { type: String, required: true },
    ResearchField: { type: String, required: true },
    

}, {
    timestamps: true,
});



const Group = mongoose.model('Group', GroupSchema);

module.exports = Group;