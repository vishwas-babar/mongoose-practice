import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
    {
        CategoryId: {
            type: Number,
            required: true,
            unique: true,
        },
        Name: {
            type: String,
            required: true,
        },
        Description: {
            type: String,
            required: true
        }
    },
    {timestams:true}
);

export const Category = mongoose.model('Category', CategorySchema);