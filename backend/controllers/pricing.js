const pricing = require('../models/pricing')
class controller {

    async getallpricing(req, res, next) {

        let response = await pricing.aggregate([
            {
                '$lookup': {
                    'from': 'space',
                    'localField': 'space_id',
                    'foreignField': '_id',
                    'as': 'spaceId'
                }
            }, {
                '$unwind': {
                    'path': '$spaceId',
                    'preserveNullAndEmptyArrays': true
                }
            }

        ]);
        res.status(200).json(response)
    }

    get(req, res, next) {
        let { id } = req.params;
        pricing.findOne({ _id: id }, (err, response) => {
            if (err) return next(err);
            res.status(200).json(response)
        })
    }

    post(req, res, next) {
        let body = req.body;
        let doc = new pricing(body);
        doc.save((err, response) => {
            if (err) return next(err);
            res.status(200).json({ response, message: "Your price was inserted", success: true });
        })
    }


    async put(req, res, next) {
        let { id } = req.params;
        let body = req.body;
        pricing.updateOne({ _id: id }, { $set: body }, (err, response) => {
            if (err) return next(err);
            res.status(200).json(response)
        })
    }


    delete(req, res, next) {
        let { id } = req.params;
        let body = req.body;
        pricing.findByIdAndDelete({ _id: id }, (err, response) => {
            if (err) return next(err);
            res.status(200).json({ response, message: "price was deleted", success: true })
        })
    }


}


const Pricingcontroller = new controller();
module.exports = Pricingcontroller;