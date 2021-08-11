const mongoose = require('mongoose');
//const idValidator = require('mongoose-id-validator');

// export class Income {
//     date: string = '';
//     incomeName: string = '';
//     sum: number = 0;
//     description: string = '';
//     id: number = 0;
// }

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

//IncomeSchema.plugin(idValidator);

module.exports = mongoose.model('Income', IncomeSchema);
