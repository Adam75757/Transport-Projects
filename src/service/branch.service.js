import CustomError from "../utils/error.js";
import newBranch from "../models/branch.model.js";
import newStaff from "../models/staff.model.js";

class BranchService {
  async create(data) {
    try {
        return await newBranch.create(data);
    } catch (error) {
        throw new CustomError(403,"branch not create");
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
    const deleted = await newBranch.findByIdAndDelete(id);
    if (!deleted) {
      throw new CustomError(error.status || 500,"Branch not found");
    }
    return deleted;
  }
}

export default new BranchService();
