// const categorySchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     parentCategory: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Category',
//         default: null
//     }
// });

// const Category = mongoose.model('Category', categorySchema);



// Business model
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

// Category model
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        default: null
    }
});

const Category = mongoose.model('Category', categorySchema);

// User model
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business'
    }]
});

const User = mongoose.model('User', userSchema);

// Admin model
const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Admin = mongoose.model('Admin', adminSchema);

// Category Mapping model
const categoryMappingSchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
});

const CategoryMapping = mongoose.model('CategoryMapping', categoryMappingSchema);

// Product model
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: Number
});

const Product = mongoose.model('Product', productSchema);
