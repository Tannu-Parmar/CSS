import mongoose from "mongoose"

export const connect = () => {
    mongoose.connect('mongodb://localhost:27017/justdial').then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });

}
