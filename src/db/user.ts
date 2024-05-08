import mongoose from 'mongoose';
const { Schema } = mongoose;

export const user = new Schema({
    id: Number,
    name: String,
});

export const User = mongoose.model('user', user);