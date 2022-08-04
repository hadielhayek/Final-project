const { Schema, model } = require('mongoose')
const spaceSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    start_at: {
        type: String,
        required: true
    },
    end_at: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },

},
    {
        timestamps: true,
        collection: 'space',
    })


const spaces = model("space", spaceSchema);
module.exports = spaces;
