import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name!'],
        minlength: 3,
        maxlength: 50
    },
    age: {
        type: Number,
        required: [true, 'Please enter your age!']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email!'],
        unique: true,
        validate: {
            validator: function (value: string) {
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)
            },
            message: '{VALUE} is not a valid email. '
        }
    },
    photo: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: true,
        enum: { values: ['user', 'admin'], message: '{VALUE} is not valid. Please provide a valid role!' }
    },
    userStatus: {
        type: String,
        required: true,
        enum: { values: ['active', 'inactive'], message: '{VALUE} is not valid. Please provide a valid user status!' }
    }
})

// creating user model 
const User = model("User", userSchema);

export default User;