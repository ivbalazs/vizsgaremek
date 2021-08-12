const express = require('express');
const createError = require('http-errors');

const CostCategory = require('../../models/costcategory.model');
const costCategoryService = require('./costcategory.service');

// Create a new cost category
exports.create = (req, res, next) => {
    const validationErrors = new CostCategory(req.body).validateSync();
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    }

    return costCategoryService.create(req.body)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return costCategoryService.findAll()
        .then(costcategories => {
            res.json(costcategories);
        });
};

exports.findOne = (req, res, next) => {
    return costCategoryService.findOne(req.params.id)
        .then(costcategory => {
            if (!costcategory) {
                return next(new createError.NotFound("Cost category is not found"));
            }
            return res.json(costcategory);
        });
};

exports.update = (req, res, next) => {
    const validationErrors = new CostCategory(req.body).validateSync();
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    }

    return costCategoryService.update(req.params.id, req.body)
        .then(costcategory => {
            res.json(costcategory);
        })
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return costCategoryService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};
