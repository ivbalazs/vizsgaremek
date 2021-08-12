const mongoose = require('mongoose');
//const idValidator = require('mongoose-id-validator');

// _id: string = '';
// costCategoryName: string = '';
// description: string = '';

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

//IncomeSchema.plugin(idValidator);

module.exports = mongoose.model('CostCategory', CostCategorySchema);
