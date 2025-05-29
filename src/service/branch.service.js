import CustomError from "../utils/error.js";
import newBranch from "../models/branch.model.js";
import mongoose from "mongoose";
class BranchService {
  async create(data) {
    try {
      let t = await newBranch.find({name:data.name})

      if(t.length >0) throw new CustomError(403,"Bunday Branch bor.")
      let  malumot = await newBranch.create(data);

      return malumot
      } catch (error) {
        throw new CustomError(403,error.message || "branch not create");
    }

  }

  async findAll() {
    try {
    return await newBranch.find()
      
    } catch (error) {
      throw new CustomError(error.status || 404,error.message || "Branch not found");
      
    }
  }

  async findById(id) {
    const address = await newBranch.findById(id);
    if (!address) {
      throw new CustomError(error.status || 500,"Branch not found");
    }
    return address;
  }

  static async getBranchquery(query) {
    try {
                    
            let data = {  };

            if (query.name)  data.name = query.name;   
          

        let users = await newBranch.find(data);
        
        

        return {
            message: "Success",
            branch:users
        };
    } catch (error) {
        throw new CustomError(error.status || 500, error.message || "Foydalanuvchilarni olishda xatolik");
    }
}

  async update(id, data) {
    const address = await newBranch.findById(id);
    if(!address){
      throw new CustomError(error.status || 500,"Branch not found");

    }
    const updated = await newBranch.findByIdAndUpdate(id, data, { new: true });
    if (!updated) {
      throw new CustomError(error.status || 500,"Branch not found for update");
    }
    return updated;
  }

  async delete(id) {
    if(!id)  throw new CustomError( 403,"id required");
    if(!mongoose.Types.ObjectId.isValid(id)){
    throw new CustomError(  403,"id ni xato kiritdingiz");

    }
        let deleted = await newBranch.findByIdAndDelete(id);
    
    if (!deleted) {
      throw new CustomError(  404,"Branch not found");
    }
    return deleted;
  }
}

export default new BranchService();


