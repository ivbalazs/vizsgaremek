const Income = require('../../models/income.model');

exports.create = incomeData => {
    const income = new Income(incomeData);
    return income.save();
};

exports.findAll = () => Income.find().populate();

exports.findOne = id => Income.findById(id).populate();

exports.update = (id, updateData) => Income.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = id => Income.findByIdAndRemove(id);
