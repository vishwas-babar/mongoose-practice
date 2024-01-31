import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
    {
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        likes: {
            type: Number,
            default: 0,
        },
        comments: {
            type: Number,
            default: 0,
        },
    },
    {timestamps: true}
);

export const PostSchema = mongoose.model('PostSchema', Schema);