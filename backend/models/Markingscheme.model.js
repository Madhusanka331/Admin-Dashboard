const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const LecSchema = new Schema({
    EvaluationPhase: { type: String, required: true },
    Topic: { type: String, required: true },
    MaximumAllocateMarks: { type: String, required: true },
    Topic2: { type: String, required: true },
    MaximumAllocateMarks2: { type: String, required: true },
    Topic3: { type: String, required: true },
    MaximumAllocateMarks3: { type: String, required: true },
    Topic4: { type: String, required: true },
    MaximumAllocateMarks4: { type: String, required: true },
    

}, {
    timestamps: true,
});



const Lec = mongoose.model('Lec', LecSchema);

module.exports = Lec;