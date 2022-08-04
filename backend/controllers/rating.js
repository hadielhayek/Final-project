const rating = require('../models/rating')
class controller {

    async  getallrating(req, res, next) {
      
        let response = await rating.aggregate([
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
        rating.findOne({ _id: id }, (err, response) => {
            if (err) return next(err);
            res.status(200).json(response)
         })
    }

    post(req, res, next) {
        let body = req.body;
        let doc = new rating(body);
        doc.save((err, response) => {
            if (err) return next(err);
            res.status(200).json({response,message:"Your rating was inserted",success:true});
        })
    }


    async put(req,res,next){
        let {id}=req.params;
        let body=req.body;
    rating.updateOne({_id:id}, { $set: body }, (err,response)=>{
        if (err) return next (err);
        res.status(200).json(response)
    })
   }


   delete(req,res,next){
    let {id}=req.params;
    let body=req.body;
    rating.findByIdAndDelete({_id:id},(err,response)=>{
        if (err) return next (err);
        res.status(200).json({response,message:"Rate  was deleted successfully",success:true})
    })
   }


}


const ratingcontroller = new controller();
module.exports = ratingcontroller;