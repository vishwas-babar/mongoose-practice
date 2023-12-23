import mongoose from 'mongoose'; // import mongoose dependency

const UserSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
            unique: true,
        },
        mesId: {
            type:String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        }
    },
    {timestamps: true}
);

export const User = mongoose.model('User', UserSchema);