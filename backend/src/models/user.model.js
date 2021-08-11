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

    // name: {
    //     type: String,
    //     required: true,
    // },
    // email: {
    //     type: String,
    //     required: true,
    // },
    // password: {
    //     type: String,
    //     required: true,
    // },
    // role: {
    //     type: Number,
    //     required: true,
    // },
}, {
    timestamps: true
});

UserSchema.plugin(require('mongoose-bcrypt'));

module.exports = mongoose.model('User', UserSchema);

// export class User {
//     _id: number;
//     name: string;
//     // first_name?: string;
//     // last_name?: string;
//     email: string;
//     password: string;
//     role: number;
//     // token?: string;
// }
