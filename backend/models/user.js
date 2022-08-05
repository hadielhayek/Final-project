const {Schema,model}=require('mongoose')
const userSchema= new Schema({
    email:{
        type:String,
        reuqired:true
    },
    password:{
        type:String,
        required:true
    },
    token:{
        type:String
    },
})

const users = model('user', userSchema);
module.exports = users;