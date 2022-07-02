const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const AlloCatePanelMembersSchema = new Schema({
    GID: { type: String, required: true },
    ResearchField: { type: String, required: true },
    PanelMember1: { type: String, required: true },
    PanelMember2: { type: String, required: true },
    PanelMember3: { type: String, required: true },
    

}, {
    timestamps: true,
});



const AlloCatePanelMembers = mongoose.model('AlloCatePanelMembers', AlloCatePanelMembersSchema);

module.exports = AlloCatePanelMembers;