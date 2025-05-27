
import {Schema,model,Types} from "mongoose";


let permissionScheme = new Schema({

    staff_id:{type:Schema.Types.ObjectId,ref:"Staff"},
    actions:[String],
    permissionModel:String
  

},{strict:true})

let newPermission = model("Permission",permissionScheme)

export default newPermission                                                                                                                 