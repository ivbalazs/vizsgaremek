const CostCategory = require('../../models/costcategory.model');

exports.create = costCategoryData => {
    const cost = new CostCategory(costCategoryData);
    return cost.save();
};

exports.findAll = () => CostCategory.find().populate();

exports.findOne = id => CostCategory.findById(id).populate();

exports.update = (id, updateData) => CostCategory.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = id => CostCategory.findByIdAndRemove(id);
