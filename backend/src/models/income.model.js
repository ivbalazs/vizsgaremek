const mongoose = require('mongoose');

const IncomeSchema = mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    incomeName: {
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
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Income', IncomeSchema);
