import CustomError from "../utils/error.js";
import newAddress from "../models/address.model.js";
import newStaff from "../models/staff.model.js";

class AddressService {
  async create(data) {
   try {
    return await newAddress.create(data);
   } catch (error) {
    throw new CustomError(error.status || 400,error.message || "Address olishda xatolik.");
    
   }
  }

  async findAll() {
    try {
      return await newAddress.find()
    } catch (error) {
    throw new CustomError(error.status || 500,error.message || "Address olishda xatolik.");
      
    }
  


  }

  async findById(id) {
  try {
    const address = await newAddress.findById(id);
    if (!address) {
      throw new CustomError(404,"Address not found");
    }
    return address;
  } catch (error) {
    throw new CustomError(error.status || 500,error.message || "Address olishda xatolik.");
    
  }
  }

  async update(id, data) {
    try {
  
    } catch (error) {
    throw new CustomError(error.status || 500,error.message || "Address olishda xatolik.");
      

    }
    }

  async delete(id) {
    try {
      const deleted = await newAddress.findByIdAndDelete(id);
    if (!deleted) {
      throw new CustomError(404,"Address not found for deletion");
    }
    return deleted;
    } catch (error) {
    throw new CustomError(error.status || 500,error.message || "Address olishda xatolik.");
      
    }
  }
}

export default new AddressService();
