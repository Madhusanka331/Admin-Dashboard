const router = require('express').Router();
let Document = require('../models/Document.model');



//Add Function

router.route('/add').post((req, res) => {

    const File = req.body.File;


    const newDocument = new Document({
        File,
        

    });



    newDocument.save()
        .then(() => res.json('Document added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;