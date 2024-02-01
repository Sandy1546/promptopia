import {Schema, model, models} from "mongoose";
import { isEmail } from "validator";
import bcrypt from 'bcrypt';

const MembersSchema = new Schema({
    email: {
        type: String,
        trim: true,
        unique: [true, 'Email already exists!'], //this message will be displayed if this fails
        required: [true, 'Email is required!'],
        validate: [ isEmail, 'Invalid Email' ],
    },
    password: {
        type: String,
        required: [true, 'Password is required...'],
    },
});

const Members = models.Members || model('Members', MembersSchema);

export default Members;