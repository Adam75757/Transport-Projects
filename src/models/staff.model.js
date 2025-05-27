
import {Schema,model,Types} from "mongoose";


let StaffScheme = new Schema({

    branch_id:{type:Schema.Types.ObjectId,ref:"Branch"},
    username: {type:String,unique:true},
    password: String,
    birthDate: Date,
    gender:{type:String,enum:["male","female"]},
    role: {type:String,default:"Staff"}

},{strict:true})

let newStaff = model("Staff",StaffScheme)

export default newStaff                                                                                                                  