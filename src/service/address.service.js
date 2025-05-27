import CustomError from "../utils/error.js";
import newAddress from "../models/address.model.js";

class AddressService {
  async create(data) {
    return await newAddress.create(data);
  }

  async findAll() {
    return await newAddress.find()
  }

  async findById(id) {
    const address = await newAddress.findById(id);
    if (!address) {
      throw new CustomError(404,"Address not found");
    }
    return address;
  }

  async update(id, data) {
    const updated = await newAddress.findByIdAndUpdate(id, data, { new: true });
    if (!updated) {
      throw new CustomError(404,"Address not found for update");
    }
    return updated;
  }

  async delete(id) {
    const deleted = await newAddress.findByIdAndDelete(id);
    if (!deleted) {
      throw new CustomError(404,"Address not found for deletion");
    }
    return deleted;
  }
}

export default new AddressService();
