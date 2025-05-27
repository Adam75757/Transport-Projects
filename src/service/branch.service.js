import CustomError from "../utils/error.js";
import newBranch from "../models/branch.model.js";

class BranchService {
  async create(data) {
    try {
        return await newBranch.create(data);
    } catch (error) {
        throw new CustomError(403,"Address not create");
    }

  }

  async findAll() {
    return await newBranch.find()
  }

  async findById(id) {
    const address = await newBranch.findById(id);
    if (!address) {
      throw new CustomError(404,"Address not found");
    }
    return address;
  }

  async update(id, data) {
    const updated = await newBranch.findByIdAndUpdate(id, data, { new: true });
    if (!updated) {
      throw new CustomError(404,"Address not found for update");
    }
    return updated;
  }

  async delete(id) {
    const deleted = await newBranch.findByIdAndDelete(id);
    if (!deleted) {
      throw new CustomError(404,"Address not found");
    }
    return deleted;
  }
}

export default new BranchService();
