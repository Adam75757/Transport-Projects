
import {Schema,model,Types} from "mongoose";


let BranchScheme = new Schema({


    name: {type:String},
    address_id:{type:Schema.Types.ObjectId,ref:"Address"},
    createAt:{ type:Date,default:Date.now()},
  

},{strict:true})

let newBranch = model("Branch",BranchScheme)

export default newBranch                                                                                                                  