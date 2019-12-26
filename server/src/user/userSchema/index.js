import { Schema } from 'mongoose'
import { single as emailAddress } from 'email-address';

const UserSchema = new Schema({
    name: {
        first: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        }
    },
    parentOf: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        match: emailAddress,
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    admin: Boolean
});

UserSchema.virtual('name.full').get(function () {
    return `${this.name.first} ${this.name.last}`;
});

export default UserSchema;