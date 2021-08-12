const mongoose = require('mongoose');
//const idValidator = require('mongoose-id-validator');

// costServiceName: string = '';
// address: string = '';
// description: string = '';
// _id: string = '';

const CostServiceSchema = mongoose.Schema({
    costServiceName: {
        type: String,
        required: true
    },
    address: {
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

module.exports = mongoose.model('CostService', CostServiceSchema);
