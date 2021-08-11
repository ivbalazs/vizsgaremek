const express = require('express');
const createError = require('http-errors');

const userService = require('./user.service');

// Create a new user.
exports.create = (req, res, next) => {
    const { first_name, last_name, email } = req.body;
    if (!email) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newUser = {
        firstName: first_name || '',
        lastName: last_name || '',
        email: email
    };

    return userService.create(newUser)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return userService.findAll()
        .then(users => {
            res.json(users);
        });
};

exports.findOne = (req, res, next) => {
    return userService.findOne(req.params.id)
        .then(user => {
            if (!user) {
                return next(new createError.NotFound("User is not found"));
            }
            return res.json(user);
        });
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    const { first_name, last_name, email } = req.body;
    if (!email) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    // const newUser = {
    //     firstName: first_name || '',
    //     lastName: last_name || '',
    //     email: email
    // };
    return userService.update(req.params.id, update)
        .then(person => {
            res.json(person);
        })
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return userService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};
