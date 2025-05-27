
import {Schema,model,Types} from "mongoose";


let TransportScheme = new Schema({

    branch_id:{type:Schema.Types.ObjectId,ref:"Branch"},
    model: {type:String,required:true},
    color: {type:String,required:true},
    img: {type:String,required:true},
    price: {type:Number,required:true},
    createAt:{ type:Date,default:Date.now()}


},{strict:true})

let newTransport = model("Transport",TransportScheme)

export default newTransport                                                                                                              