const CostService = require('../../models/costservice.model');

exports.create = costServiceData => {
    const cost = new CostService(costServiceData);
    return cost.save();
};

exports.findAll = () => CostService.find().populate();

exports.findOne = id => CostService.findById(id).populate();

exports.update = (id, updateData) => CostService.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = id => CostService.findByIdAndRemove(id);
