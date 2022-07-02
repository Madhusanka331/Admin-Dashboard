const router = require('express').Router();
let Lecturer = require('../models/Lecturer.model');

router.route('/').get((req, res) => {
    Lecturer.find()
        .then(Lecturer => res.json(Lecturer))
        .catch(Lecturer => res.status(400).json('Error: ' + err));
});


//Add Function

router.route('/add').post((req, res) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const dateOfBirth = req.body.dateOfBirth;
    const password = req.body.password;
    const address = req.body.address;
    const idNumber = req.body.idNumber;
    const role = req.body.role;
    const gender = req.body.gender;
    



    const newLecturer = new Lecturer({
        firstName,
        lastName,
        email,
        mobile,
        dateOfBirth,
        password,
        address,
        idNumber,
        role,
        gender,
        

    });



    newLecturer.save()
        .then(() => res.json('Lecturer added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Get Data 
router.route('/:id').get((req, res) => {
    Lecturer.findById(req.params.id)
        .then(Lecturer => res.json(Lecturer))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Lecturer.findByIdAndDelete(req.params.id)
        .then(() => res.json('Lecturer deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Update data
router.route('/update/:id').post((req, res) => {
    Lecturer.findById(req.params.id)
        .then(Lecturer => {
            Lecturer.firstName = req.body.firstName;
            Lecturer.lastName = req.body.lastName;
            Lecturer.email = req.body.email;
            Lecturer.mobile = req.body.mobile;
            Lecturer.dateOfBirth = req.body.dateOfBirth;
            Lecturer.password = req.body.password;
            Lecturer.address = req.body.address;
            Lecturer.idNumber = req.body.idNumber;
            Lecturer.role = req.body.role;
            Lecturer.gender = req.body.gender;
            



            Lecturer.save()
                .then(() => res.json('Lecturer updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;