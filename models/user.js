const { Schema, model } = require("mongoose");

const UserSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: false,
        default: 'https://squaredchat.s3.us-east-2.amazonaws.com/no-image.png'
    },
    online: {
        type: Boolean,
        default: false,
    },
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    }]
});

UserSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('User', UserSchema);