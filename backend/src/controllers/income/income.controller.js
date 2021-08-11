const express = require('express');
const createError = require('http-errors');

const Income = require('../../models/income.model');
const incomeService = require('./income.service');

// Create a new income
exports.create = (req, res, next) => {
    const validationErrors = new Income(req.body).validateSync();
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    }

    return incomeService.create(req.body)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return incomeService.findAll()
        .then(incomes => {
            res.json(incomes);
        });
};

exports.findOne = (req, res, next) => {
    return incomeService.findOne(req.params.id)
        .then(income => {
            if (!income) {
                return next(new createError.NotFound("Income is not found"));
            }
            return res.json(income);
        });
};

exports.update = (req, res, next) => {
    const validationErrors = new Income(req.body).validateSync();
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    }

    return incomeService.update(req.params.id, req.body)
        .then(car => {
            res.json(car);
        })
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return incomeService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};
