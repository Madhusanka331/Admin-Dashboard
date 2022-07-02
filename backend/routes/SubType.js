const router = require('express').Router();
let SubType = require('../models/SubType.model');

router.route('/').get((req, res) => {
    SubType.find()
        .then(SubType => res.json(SubType))
        .catch(SubType => res.status(400).json('Error: ' + err));
});


//Add Function

router.route('/add').post((req, res) => {

    const Type = req.body.Type;
    



    const newSubType = new SubType({
        Type,
        

    });



    newSubType.save()
        .then(() => res.json('SubType added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});









module.exports = router;