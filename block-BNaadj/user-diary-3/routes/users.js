let express = require('express');
let router = express.Router();
let User = require('../models/users');

router.get('/', (req, res, next) => {
    User.find({}, (err, users) => {
        if(err) return next(err);
        res.render('users', {users: users});
    })
});

router.get('/new', (req, res, next) => {
    res.render('singleUser');
});

router.post('/', (req, res, next) => {
    User.create(req.body, (err, user) => {
        if(err) return next(err);
        res.render('userDetails', {user: user});
    })
});

router.get('/:id', (req, res, next) => {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        if(err) return next(err);
        res.render('userDetails', {user});
    })
});

router.get('/:id/edit', (req, res, next) => {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        if(err) return new(err);
        res.render('userForm', {user: user});
    })
});

router.post('/:id', (req, res, next) => {
    let id = req.params.id;
    User.findByIdAndUpdate(id, req.body, (err, user) => {
        if(err) return next(err);
        res.redirect(`/users/${id}`);
    })
});

router.get('/:id/delete', (req, res, next) => {
    let id = req.params.id;
    User.findByIdAndDelete(id, (err, user) => {
        if(err) return next(err);
        res.redirect('/users');
    })
});


module.exports = router;
