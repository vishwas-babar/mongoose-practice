import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        UserId: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        FirstName: {
            type: String,
            required: true,
            lowercase: true,
        },
        LastName: {
            type: String,
            required: true,
            lowercase: true,
        },
        Email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        Password: {
            type: String,
            required: true,
        },
        Address: {
            type: String,
        },
        PhoneNumber: {
            type: String,
            required: true,
        },
    },
    {timestamps: true}
);

export const User = mongoose.model('User', UserSchema);