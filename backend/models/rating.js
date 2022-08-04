const {Schema,model}=require ('mongoose')
const ratingSchema=new Schema({
    email:{
        type:String,
        required:true
    },
    value:{
        type:String,
        required:true
    },
    space_id:{
        type:Schema.Types.ObjectId,
        ref:'space',
        required:true
    },
},
{
    timestamps:true,
    collection:'ratings'
})

const ratings=model('rating',ratingSchema)
module.exports=ratings