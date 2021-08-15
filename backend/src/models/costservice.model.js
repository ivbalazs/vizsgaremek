const mongoose = require('mongoose');

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

module.exports = mongoose.model('CostService', CostServiceSchema);
