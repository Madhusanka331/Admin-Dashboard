const router = require('express').Router();
let Markingscheme = require('../models/Markingscheme.model');

router.route('/').get((req, res) => {
    Markingscheme.find()
        .then(Markingscheme => res.json(Markingscheme))
        .catch(Markingscheme => res.status(400).json('Error: ' + err));
});


//Add Function

router.route('/add').post((req, res) => {

    const EvaluationPhase = req.body.EvaluationPhase;
    const Topic = req.body.Topic;
    const MaximumAllocateMarks = req.body.MaximumAllocateMarks;
    const Topic2 = req.body.Topic2;
    const MaximumAllocateMarks2 = req.body.MaximumAllocateMarks2;
    const Topic3 = req.body.Topic3;
    const MaximumAllocateMarks3 = req.body.MaximumAllocateMarks3;
    const Topic4 = req.body.Topic4;
    const MaximumAllocateMarks4 = req.body.MaximumAllocateMarks4;
    



    const newMarkingscheme = new Markingscheme({
        EvaluationPhase,
        Topic,
        MaximumAllocateMarks,
        Topic2,
        MaximumAllocateMarks2,
        Topic3,
        MaximumAllocateMarks3,
        Topic4,
        MaximumAllocateMarks4,
        

    });



    newMarkingscheme.save()
        .then(() => res.json('Markingscheme added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});








module.exports = router;