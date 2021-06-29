const { Schema, model } = require("mongoose");

const ConversationSchema = Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message',
        required: false
    }]
});

ConversationSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    return object;
});

module.exports = model('Conversation', ConversationSchema);