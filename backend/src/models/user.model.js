const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    // firstName: String,
    // lastName: String,
    email: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);


// export class User {
//     id?: number;
//     first_name?: string;
//     last_name?: string;
//     email?: string;
//     password?: string;
//     role?: number;
//     token?: string;
// }
