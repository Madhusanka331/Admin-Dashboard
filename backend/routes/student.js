const router = require('express').Router();
let student = require('../models/student.model');

router.route('/').get((req, res) => {
    student.find()
        .then(student => res.json(student))
        .catch(student => res.status(400).json('Error: ' + err));
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
    const gender = req.body.gender;
    



    const newstudent = new student({
        firstName,
        lastName,
        email,
        mobile,
        dateOfBirth,
        password,
        address,
        idNumber,
        gender,
        

    });



    newstudent.save()
        .then(() => res.json('student added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Get Data 
router.route('/:id').get((req, res) => {
    student.findById(req.params.id)
        .then(student => res.json(student))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    student.findByIdAndDelete(req.params.id)
        .then(() => res.json('student deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Update data
router.route('/update/:id').post((req, res) => {
    student.findById(req.params.id)
        .then(student => {
            student.firstName = req.body.firstName;
            student.lastName = req.body.lastName;
            student.email = req.body.email;
            student.mobile = req.body.mobile;
            student.dateOfBirth = req.body.dateOfBirth;
            student.password = req.body.password;
            student.address = req.body.address;
            student.idNumber = req.body.idNumber;
            student.gender = req.body.gender;
            



            student.save()
                .then(() => res.json('student updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;