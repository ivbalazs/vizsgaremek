const mongoose = require('mongoose');
//const idValidator = require('mongoose-id-validator');

//     id: number = 0;
//     name: string = '';
//     date: string = '';
//     sum: number = 0;
//     description: string = '';
//     costCategoryName: string = '';
//     costServiceName: string = '';
const CostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    sum: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    costCategoryName: {
        type: String,
        required: true
    },
    costServiceName: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

//IncomeSchema.plugin(idValidator);

module.exports = mongoose.model('Cost', CostSchema);
