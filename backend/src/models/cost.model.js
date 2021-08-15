const mongoose = require('mongoose');

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

module.exports = mongoose.model('Cost', CostSchema);
