const router = require('express').Router();
const mongoose = require('mongoose')
const Notes1 = require('../model/formmodel');
router.post('/', (req, res, next) => {

    const dynamicform = new Notes1({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        salary: req.body.salary,
        age: req.body.age
    });

    dynamicform.save().then(
        result => {
            console.log(result);
        }
    ).catch(err =>
        console.log(err)
    )

    res.status(201).json([{
        message: "Handling post request to the product",
        dynamicform: dynamicform
    }])
})

module.exports = router;