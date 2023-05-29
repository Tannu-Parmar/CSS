const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: Number
});

const Product = mongoose.model('Product', productSchema);
