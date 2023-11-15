'use strict'

const { model, Schema, Types } = require('mongoose');

// !dmbg
const DOCUMENT_NAME = 'Shop'
const COLLECTION_NAME = 'Shops'

const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var shopSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxLength: 150
    },
    email: {
        type: String,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    verify: {
        type: Types.boolean,
        default: false
    },
    roles: {
        type: Array,
        default: []
    }
}, {
    collection: COLLECTION_NAME
});

//Export the model
module.exports = mongoose.model(DOCUMENT_NAME, shopSchema);