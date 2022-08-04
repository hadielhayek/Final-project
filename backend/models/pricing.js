const { Schema, model } = require('mongoose')
const pricingSchema = new Schema({
    numberofppl: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    acesshours: {
        type: String,
        required: true
    },
    typeofdesk: {
        type: String,
        enum: ['0', '1', '2'],
        required: true
    },
    space_id: {
        type: Schema.Types.ObjectId,
        ref: 'space',
        required: true
    },
    status: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true,
        collection: 'pricings'
    })

    const pricings = model('pricing', pricingSchema);
module.exports = pricings;
