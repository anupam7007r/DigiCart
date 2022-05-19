const express = require('express');
const router = express.Router();
const Model = require('../models/cartModel');

router.post('/add', (req, res) => {
    console.log('add request at user');

    console.log(req.body);

    new Model(req.body).save()

        .then((data) => {
            console.log('cart data saved!!');
            res.status(200).json({ message: 'success' });
        })

        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.get('/getall', (req, res) => {

    Model.find({})

        .then((data) => {
            console.log('user data saved!!');
            res.status(200).json(data);
        })

        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.get('/getbyuser/:userid', (req, res) => {

    Model.findOne({ email: req.params.useremail })

        .then((data) => {
            console.log('user data saved!!');
            res.status(200).json(data);
        })

        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
})



module.exports = router;