import mongoose from 'mongoose'; // import mongoose dependency

const UserSchema = new mongoose.Schema({
    username: {
        type: String, // username is a string
        required: true, // username is required
        min: 3, // username can't be less than 3 characters
        max: 20, // username can't be more than 20 characters
        unique: true, // no two users can have the same username
    },
    email: {
        type: String,
        required: true,
        unique: true, // no two users can have the same email
    },
    password:{
        type: String,
        required: [true, "password is required"], // custom error message
        min: 6,
    },
}, {timestamps: true}); // create a new mongoose schema

export const User = mongoose.model('User', UserSchema); // in database this showed as users