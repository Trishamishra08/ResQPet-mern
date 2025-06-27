import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";
//above file is used to enable unique feature
//npm install mongoose-unique-validator@5.0.0

const ngoSchema = mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        require: [true, 'name is required'],
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        require: [true, 'email is required'],
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        require: [true, 'password is required'],
        minlength: 5,
        maxlength: 10
    },
    address: {
        type: String,
        require: [true, 'address is required'],
        trim: true
    },
    city: {
        type: String,
        require: [true, 'city is required'],
        trim: true,
    },
    pincode: {
        type: String,
        required: [true, 'pincode is required'],
        trim: true,
        match: [/^\d{6}$/, 'Pincode must be a 6-digit number'],

    },
    mobile: {
        type: String,
        required: [true, 'mobile number is required'],
        trim: true,
        unique: true,
        match: [/^[6-9]\d{9}$/, 'Invalid Indian mobile number']
    },
    role: String,
    status: Number,
    info: String
});
//to apply unique validator
mongoose.plugin(mongooseUniqueValidator);
const ngoSchemaModel = mongoose.model('ngo_collection', ngoSchema);
export default ngoSchemaModel;