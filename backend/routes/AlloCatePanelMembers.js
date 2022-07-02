const router = require('express').Router();
let AlloCatePanelMembers = require('../models/AlloCatePanelMembers.model');

router.route('/').get((req, res) => {
    AlloCatePanelMembers.find()
        .then(AlloCatePanelMembers => res.json(AlloCatePanelMembers))
        .catch(AlloCatePanelMembers => res.status(400).json('Error: ' + err));
});


//Add Function

router.route('/add').post((req, res) => {

    const GID = req.body.GID;
    const ResearchField = req.body.ResearchField;
    const PanelMember1 = req.body.PanelMember1;
    const PanelMember2 = req.body.PanelMember2;
    const PanelMember3 = req.body.PanelMember3;

    



    const newAlloCatePanelMembers = new AlloCatePanelMembers({
        GID,
        ResearchField,
        PanelMember1,
        PanelMember2,
        PanelMember3,

        

    });



    newAlloCatePanelMembers.save()
        .then(() => res.json('AlloCatePanelMembers added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});









module.exports = router;