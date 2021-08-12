const Cost = require('../../models/cost.model');

exports.create = costData => {
    const cost = new Cost(costData);
    return cost.save();
};

exports.findAll = () => Cost.find().populate();

exports.findOne = id => Cost.findById(id).populate();

exports.update = (id, updateData) => Cost.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = id => Cost.findByIdAndRemove(id);
