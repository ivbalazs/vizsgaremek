const express = require('express');
const createError = require('http-errors');

const CostService = require('../../models/costservice.model');
const costServiceService = require('./costservice.service');

// Create a new cost service
exports.create = (req, res, next) => {
    const validationErrors = new CostService(req.body).validateSync();
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    }

    return costServiceService.create(req.body)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return costServiceService.findAll()
        .then(costservices => {
            res.json(costservices);
        });
};

exports.findOne = (req, res, next) => {
    return costServiceService.findOne(req.params.id)
        .then(costservice => {
            if (!costservice) {
                return next(new createError.NotFound("Cost service is not found"));
            }
            return res.json(costservice);
        });
};

exports.update = (req, res, next) => {
    const validationErrors = new CostService(req.body).validateSync();
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    }

    return costServiceService.update(req.params.id, req.body)
        .then(costservice => {
            res.json(costservice);
        })
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return costServiceService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};
