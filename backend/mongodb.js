const mongoose = require('mongoose');
let schema= new mongoose.Schema({
    fullname:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    }
});

let model= mongoose.model('register',schema);

// Order/Membership Schema
let orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    userEmail: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    planName: {
        type: String,
        required: true
    },
    planStartDate: {
        type: Date,
        required: true
    },
    planDuration: {
        type: Number,
        required: true
    },
    planEndDate: {
        type: Date,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'active'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

let orderModel = mongoose.model('order', orderSchema);

module.exports = { model, orderModel };
