const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    city: String,
    state: String,
    postalCode: String,
    phone: String,
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
    ratings: [{
        user: String,
        rating: Number
    }],
    reviews: [{
        user: String,
        review: String
    }],
    isOpen: Boolean,
    openingTime: String,
    closingTime: String
});

const Business = mongoose.model('Business', businessSchema);
