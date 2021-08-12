const express = require('express');
const createError = require('http-errors');

const Cost = require('../../models/cost.model');
const costService = require('./cost.service');

// Create a new cost
exports.create = (req, res, next) => {
    const validationErrors = new Cost(req.body).validateSync();
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    }

    return costService.create(req.body)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return costService.findAll()
        .then(costs => {
            res.json(costs);
        });
};

exports.findOne = (req, res, next) => {
    return costService.findOne(req.params.id)
        .then(cost => {
            if (!cost) {
                return next(new createError.NotFound("Cost is not found"));
            }
            return res.json(cost);
        });
};

exports.update = (req, res, next) => {
    const validationErrors = new Cost(req.body).validateSync();
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    }

    return costService.update(req.params.id, req.body)
        .then(cost => {
            res.json(cost);
        })
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return costService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};
