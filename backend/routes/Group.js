const router = require('express').Router();
let Group = require('../models/Group.model');

router.route('/').get((req, res) => {
    Group.find()
        .then(Group => res.json(Group))
        .catch(Group => res.status(400).json('Error: ' + err));
});


//Add Function

router.route('/add').post((req, res) => {

    const GID = req.body.GID;
    const ResearchField = req.body.ResearchField;
    



    const newGroup = new Group({
        GID,
        ResearchField,
        

    });



    newGroup.save()
        .then(() => res.json('Group added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});






// Get Data 
router.route('/:id').get((req, res) => {
    Group.findById(req.params.id)
        .then(Group => res.json(Group))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;