import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        completed: {
            type: Boolean, 
            default: false,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        subTodos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'SubTodo'
            }
        ]
    },
    {timestamps: true}
);

export const Todo = mongoose.model('Todo', TodoSchema); // in database this showed as todos