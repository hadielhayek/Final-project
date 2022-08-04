const space = require('../models/space')
class controller {


    getallspace(req, res, next) {
        space.aggregate(
            [
                {
                    $lookup: {
                        from: "pricings",
                        localField: "_id",
                        foreignField: "space_id",
                        as: "pricings",
                    },
                },
                {
                    $lookup: {
                        from: "ratings",
                        localField: "_id",
                        foreignField: "space_id",
                        as: "ratings",
                    },
                },
            ],
         
           
            (err, response) => {
                if (err) return next(err);
                res.status(200).send({
                    success: true,
                    message: "Get top rated spaces successfully",
                    response,
                });
            }
        );
    }

    get(req, res, next) {
        let { id } = req.params;
        space.findOne({ _id: id }, (err, response) => {
            if (err) return next(err);
            res.status(200).json(response)
        })
    }

    post(req, res, next) {
        let body = req.body;
        let doc = new space(body);
        doc.save((err, response) => {
            if (err) return next(err);
            res.status(200).json({ response, message: "Your space was inserted", success: true });
        })
    }


    async put(req, res, next) {
        let { id } = req.params;
        let body = req.body;
        space.updateOne({ _id: id }, { $set: body }, (err, response) => {
            if (err) return next(err);
            res.status(200).json(response)
        })
    }


    delete(req, res, next) {
        let { id } = req.params;
        let body = req.body;
        space.findByIdAndDelete({ _id: id }, (err, response) => {
            if (err) return next(err);
            res.status(200).json({ response, message: "space was Deleted successfully", success: true })
        })
    }


}


const Spacecontroller = new controller();
module.exports = Spacecontroller;
