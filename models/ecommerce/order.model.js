import mongoose from 'mongoose';

const orderItemsSchema = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
        quantity: {
            type: Number,
            required: true,
            default: 1,
        }
    }
);

const orderSchema = new mongoose.Schema(
    {
        orderId: {
            type: String,
            required: true,
            unique: true,
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        orderItems: [orderItemsSchema],
        // we can also write the above code as follows:
        // orderItems: [
        //     {
        //         productId: {
        //             type: mongoose.Schema.Types.ObjectId,
        //             ref: "Product",
        //         },
        //         quantity: {
        //             type: Number,
        //             required: true,
        //             default: 1,
        //         }
        //     }
        // ]

        address: {
            type: String,
            required: true,
        },

        status: {
            type: String,
            enum: ['pending', 'packed', 'shipped', 'delivered'],
            default: 'pending',
        }
    }, 
    {timestamps: true}
);

export const Order = mongoose.model('Order', orderSchema);