const mongoose = require('mongoose');

const CostCategorySchema = mongoose.Schema({
    costCategoryName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('CostCategory', CostCategorySchema);
