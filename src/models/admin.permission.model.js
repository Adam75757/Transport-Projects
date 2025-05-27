
import {Schema,model,Types} from "mongoose";


let AdminpermissionScheme = new Schema({

    staff_id:{type:Schema.Types.ObjectId,ref:"Staff"},
    AdminActions:[String],
    permissionModel:String
  

},{strict:true})

let newAdminPermission = model("AdminPermission",AdminpermissionScheme)

export default newAdminPermission                                                                                                                 