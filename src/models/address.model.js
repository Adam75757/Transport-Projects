
import {Schema,model} from "mongoose";


let AddressScheme = new Schema({


    name: {type:String,required:true},
  

},{strict:true})

let newAddress = model("Address",AddressScheme)

export default newAddress                                                                                                                 