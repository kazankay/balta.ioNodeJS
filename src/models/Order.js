
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },

    number: { 
        type: String,
        required: true,
    },
    createDate: { 
        type: Date,
        required: true,
        default: Date.now
    },
    items: [{
        quantity: {
            type: Number,
            require: true,
            default: 1
        },
        price: {
            type: Number,
            require: true,
            default: 1
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    }],
    status: {
        type: String,
        required: true,
        enum: ['created', 'done'],
        default: 'created'
    }
});

mongoose.model('Order', OrderSchema);